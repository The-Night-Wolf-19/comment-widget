import "./App.css";
import { useState } from "react";
import CommentEditor from "./components/comment-editor/CommentEditor";
import Header from "./components/header/Header";
import Comments from "./components/comments/Comments";

export function App() {
  const [comments, setComments] = useState({ comments: [], i: 0 });

  const addComment = (val) => {
    let temp = { ...val, i: comments.i + 1 };
    setComments(temp);
  };
  const deleteComment = (val) => {
    setComments(val);
  };
  return (
    <div className="App">
      <Header />
      <CommentEditor
        comment={comments}
        addComment={(val) => addComment(val)}
        latest={comments.i}
      />
      <Comments
        comments={comments}
        addComment={(val) => addComment(val)}
        deleteComment={(val) => deleteComment(val)}
      />
    </div>
  );
}

/*
  comments={
    comments:[
      {
        username: "Shubham",
        date: "19 November 2022",
        text: "1st Level comment",
        id:0,
        comments: [
          {
            username: "Shubham",
            date: "19 November 2022",
            text: "2nd Level Comment",
            id:1,
            comments: []
            }
          ]
      },
      {

      },
    ],
    i:2,
  }

*/
