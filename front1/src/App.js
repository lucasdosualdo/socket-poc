import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Room from "./pages/Room";
import { socket } from "./api/socket";

function App() {
 //socket.connect();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/room/:rooId" element={<Room />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
