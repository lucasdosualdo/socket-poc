import { Link } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const [selectedOption, setSelectedOption] = useState("");
  console.log(selectedOption);
  return (
    <>
      <div>FRONT 2</div>
      <div>
        <label for="username">Digit your name</label>
        <input type="text" name="username" />
      </div>

      <select
        value={selectedOption}
        onChange={(event) => setSelectedOption(event.target.value)}
      >
        <option value="">select room</option>
        <option value="1">opção 1</option>
        <option value="2">opção 2</option>
        <option value="3">opção 3</option>
      </select>

      <Link to={selectedOption !== "" && `/room/${selectedOption}`}>
        <button>entrar na sala</button>
      </Link>
    </>
  );
}
