import React from "react";
import Comment from "../comment/Comment";
import "./Comments.css";
const Comments = ({ comments, addComment, deleteComment }) => {
  const handleAdd = (val, id) => {
    let temp = [...comments.comments];
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].id === id) {
        temp[i] = val;
        i = temp.length;
      }
    }
    addComment({ ...comments, comments: temp });
  };
  const handleDelete = (val, id) => {
    let temp = [...comments.comments];
    let idx = -1;
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].id === id) {
        idx = i;
        temp[i] = val;
        i = temp.length;
      }
    }
    if (idx !== -1) temp.splice(idx, 1);
    deleteComment({ ...comments, comments: temp });
  };
  let components = [];
  components = comments.comments.map((ele) => (
    <Comment
      comment={ele}
      id={ele.id}
      addComment={(val, id) => handleAdd(val, id)}
      deleteComment={(val, id) => handleDelete(val, id)}
      latest={comments.i}
      key={ele.id}
    />
  ));
  return (
    <div className="CommentsDiv">
      {comments.comments.length === 0 ? <p>Add a Comment</p> : components}
      {/* <Comment /> */}
    </div>
  );
};

export default Comments;
