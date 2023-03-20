import express from "express";
import mongoose from "mongoose";

const app = express();
import cors from "cors";

app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
    res.send("hej");
});

const questionSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
);

const Question = mongoose.model("questions", questionSchema);

app.get("/questions", async (req, res) => {
    const questions = await Question.find();
    res.send(questions);
});

app.get("/questions/:id", async (req, res) => {
    const question = await Question.findById(req.params.id);
    res.send(question);
});

app.listen(3000, () => {
    mongoose.connect(
        "mongodb+srv://GeorgiosD:georgiosd@cluster0.ywdaimb.mongodb.net/techhub?retryWrites=true&w=majority"
    );
});
