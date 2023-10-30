import express from "express";
import bodyParser from "body-parser";
import fs from "fs";

const app = express();

app.use(express.static("./public"))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/retrieve-last-answer", (_, res) => {
	const lastAnswer = fs.readFileSync("./last-answer.dat");
	res.send(lastAnswer);
});

app.post("/save-last-answer", (req, res) => {
	console.log(req.body);
	fs.writeFileSync("./last-answer.dat", req.body.lastAnswer.toString());
	res.sendStatus(200);
});

app.listen(8080);
