import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { socket } from "../api/socket";

export default function Room() {
  const [message, setMessage] = useState("");
  const [messagesList, setMessagesList] = useState([]);

  useEffect(() => {
    socket.on("receivedMessage", (text) => {
      setMessagesList((current) => [...current, text]);
    });
    return () => socket.off("receivedMessage");
  }, [socket]);

  const handleMessage = () => {
    socket.emit("message", message);
  };

  return (
    <>
      <div>FRONT 1</div>
      <ul>
        {messagesList.map((message) => (
          <li>{message}</li>
        ))}
      </ul>
      <input
        type="text"
        placeholder="digite uma mensagem..."
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={handleMessage}>Enviar mensagem</button>
      <Link to={`/`}>
        <button>voltar para página inical</button>
      </Link>
    </>
  );
}
