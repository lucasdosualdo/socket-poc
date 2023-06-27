import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { socket } from "./../../api/socket";
import style from "./Home.module.css";
import { Input, Button } from "@mui/material";

export default function Home() {
  const navigate = useNavigate();
  const usernameRef = useRef();

  const handleSubmit = () => {
    const username = usernameRef.current.value;
    if (!username.trim()) {
      alert("insira um nome corretamente");
      return;
    }
    socket.emit("setUsername", username);

    navigate(`/room`);
  };

  return (
    <div className={style["home-container"]}>
      <h2>Chat real time</h2>
      <Input inputRef={usernameRef} placeholder="username" />
      <Button sx={{ mt: 2 }} onClick={() => handleSubmit()} variant="contained">
        Entrar
      </Button>
    </div>
  );
}
