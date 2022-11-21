import "./App.css";
import { useState, useEffect } from "react";
import CommentEditor from "./components/comment-editor/CommentEditor";
import Header from "./components/header/Header";
import Comments from "./components/comments/Comments";

export function App() {
  //Getting and setting data in local storage

  let data = localStorage.getItem("comments");
  const [comments, setComments] = useState(
    data ? JSON.parse(data) : { comments: [], i: 0 }
  );
  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  //Method to handle changes in data
  const addComment = (val) => {
    let temp = { ...val, i: comments.i + 1 };
    setComments(temp);
  };
  const changeComment = (val) => {
    setComments(val);
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
        changeComment={(val) => changeComment(val)}
      />
    </div>
  );
}

/* Basic structure of how data will be stored
  comments={
    comments:[
      {
        username: "Shubham",
        date: "21 November 2022",
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
    ],
    i:2,
  }

*/
