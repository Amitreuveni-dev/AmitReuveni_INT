import { createServer } from "http";
import express from "express";
import { json } from "body-parser";

type computer = {
    id: string,
    title: string,
    price: number,
    description?: string,
}

let computers: computer[] = [];

const app = express();

app.use(json());


app.get("/computer", (req, res) => {
    
    res.json(computers);
});

app.get("/computer/:id", (req, res) => {
    const { id } = req.params;

    const computer = computers.find((c) => c.id === id);

    if (!computer) {
        res.status(404);
        res.end();
        return;
    }

    res.json(computer);
});

app.get("/about", (req, res) => {
    res.send("about");
});

const server = createServer(app);

server.listen(8000, () => console.log(`server listen on port 8000`));