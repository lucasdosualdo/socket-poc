import { Link } from "react-router-dom";

export default function Room() {
  return (
    <>
      <div>FRONT 2</div>
      <input type="text" placeholder="digite uma mensagem..." />
      <Link to={`/`}>
        <button>voltar para página inical</button>
      </Link>
    </>
  );
}
