import { serverHttp } from "./app.js";
import "./websocket.js";

const port = 3000;

serverHttp.listen(port, () => {
  console.log("app listening on port " + port);
});
