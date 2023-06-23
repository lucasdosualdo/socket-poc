import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { socket } from "../api/socket";

export default function Home() {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");
  const [username, setUsername] = useState("");
  console.log(socket, "socket fora");
  const handleSubmit = () => {
    if (selectedOption === "" || username === "") {
      alert("selecione a sala ou insira um nome corretamente");
      return;
    }
    socket.emit("setRoom", selectedOption);
    socket.emit("setUsername", username);
    console.log(socket, "socket dentro");
    setUsername("");
    navigate(`/room/${selectedOption.slice(-1)}`);
  };

  return (
    <>
      <div>FRONT 1</div>
      <div>
        <label for="username">Digit your name</label>
        <input
          type="text"
          name="username"
          onChange={(event) => setUsername(event.target.value)}
        />
      </div>

      <select
        value={selectedOption}
        onChange={(event) => setSelectedOption(event.target.value)}
      >
        <option value="">select room</option>
        <option value="sala 1">opção 1</option>
        <option value="sala 2">opção 2</option>
        <option value="sala 3">opção 3</option>
      </select>

      <button onClick={() => handleSubmit()}>entrar na sala</button>
    </>
  );
}
