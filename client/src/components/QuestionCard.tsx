import React from "react";
import { Link } from "react-router-dom";
type Props = {};

export default function QuestionCard({}: Props) {
    return (
        <div className="p-4 border-b border-b-gray-300">
            <Link to="/question/123" className="text-lg text-sky-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro,
                dolores?
            </Link>
            <p className="text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                enim deserunt nihil error laborum ipsum aut culpa reiciendis
                assumenda corporis!
            </p>
        </div>
    );
}
