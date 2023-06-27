import { useEffect, useState, useRef } from "react";
import { socket } from "./../../api/socket";
import style from "./Room.module.css";
import { Input } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function Room() {
  const bottomRef = useRef();
  const messageRef = useRef();
  const [messagesList, setMessagesList] = useState([]);

  useEffect(() => {
    socket.on("receivedMessage", (value) => {
      setMessagesList((current) => [...current, value]);
    });
    return () => socket.off("receivedMessage");
  }, [socket]);

  useEffect(() => {
    scrollDown();
  }, [messagesList]);

  const handleMessage = () => {
    const message = messageRef.current.value;
    if (!message.trim()) return;

    socket.emit("message", message);
    clearInput();
    focusInput();
  };

  const clearInput = () => {
    messageRef.current.value = "";
  };

  const focusInput = () => {
    messageRef.current.focus();
  };

  const getEnterKey = (e) => {
    if (e.key === "Enter") handleMessage();
  };

  const scrollDown = () => {
    bottomRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div>
      <div className={style["chat-container"]}>
        <div className={style["chat-body"]}>
          {messagesList.map((message, index) => (
            <div
              className={`${style["message-container"]} ${
                message.authorId === socket.id && style["message-mine"]
              }`}
              key={index}
            >
              <div className="message-author">
                <strong>{message.author}</strong>
              </div>
              <div className="message-text">{message.text}</div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>
        <div className={style["chat-footer"]}>
          <Input
            inputRef={messageRef}
            placeholder="Mensagem"
            onKeyDown={(e) => getEnterKey(e)}
            fullWidth
          />
          <SendIcon
            sx={{ m: 1, cursor: "pointer" }}
            onClick={() => handleMessage()}
            color="primary"
          />
        </div>
      </div>
    </div>
  );
}
