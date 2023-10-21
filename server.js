import { add, subtract, multiply, divide } from "./calculator.js";
import http from "http";

const httpServer = new http.Server((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.write("Hello World");
  res.end("\n");
});
httpServer.listen(3000);
