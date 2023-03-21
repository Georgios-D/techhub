import { Link } from "react-router-dom";
import { Question } from "../Question";

type Props = {
    questions: Question;
};

export default function QuestionCard({ questions }: Props) {
    return (
        <div className="p-4 border-b border-b-gray-300">
            <Link
                to={"/questions/" + questions._id}
                className="text-lg text-sky-600"
            >
                {questions.title}
            </Link>
            <p className="text-sm">{questions.description}</p>
        </div>
    );
}
