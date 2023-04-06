import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "허민",
        comment: "안녕하세요, 허민입니다.",
    },
    {
        name: "허민1",
        comment: "안녕하세요, 허민1입니다.",
    },
    {
        name: "허민2",
        comment: "안녕하세요, 허민2입니다.",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;