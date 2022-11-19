import "./App.css";
import { useState } from "react";
import CommentEditor from "./components/comment-editor/CommentEditor";
import Comment from "./components/comment/Comment";
import Header from "./components/header/Header";

function App() {
  const [comments, setComment] = useState({ data: [], i: 0 });

  return (
    <div className="App">
      <Header />
      <CommentEditor comments={comments} />
      <Comment comments={comments} />
    </div>
  );
}

export default App;

/*
  comments={
    data:[
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
