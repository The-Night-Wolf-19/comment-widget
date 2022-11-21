import { Button } from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import "./Comment.css";
import CommentEditor from "../comment-editor/CommentEditor";
import EditComment from "../comment-editor/EditComment";

const Comment = ({
  comment,
  id,
  addComment,
  deleteComment,
  changeComment,
  latest,
}) => {
  //States and methods for opening and closing edit/add input field
  const [reply, setReply] = useState(false);
  const [edit, setEdit] = useState(false);

  const handleReplyClick = () => {
    setReply(!reply);
  };
  const handleEditClick = () => {
    setEdit(!edit);
  };

  // Handling add, delete, edit comment method for this comment
  const handleAdd = (val) => {
    setReply(!reply);
    addComment(val, id);
  };

  const handleDelete = () => {
    let temp = { ...comment, comments: [] };
    deleteComment(temp, id);
  };

  const handleChange = (val) => {
    setEdit(!edit);
    changeComment(val, id);
  };

  //Methods for Passing add, delete, edit comment method that we are getting from our child comments
  const passDelete = (val, cid) => {
    let temp = [];
    temp = comment.comments.slice();
    let idx = -1;
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].id === cid) {
        idx = i;
        temp[i] = val;
        i = temp.length;
      }
    }
    if (idx !== -1) {
      temp.splice(idx, 1);
    }
    changeComment({ ...comment, comments: temp }, id);
  };

  const passAdd = (val, id) => {
    let temp = [...comment.comments];
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].id === id) {
        temp[i] = val;
        i = temp.length;
      }
    }
    addComment({ ...comment, comments: temp }, id);
  };

  const passChange = (val, cid) => {
    let temp = [...comment.comments];
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].id === cid) {
        temp[i] = val;
        i = temp.length;
      }
    }
    changeComment({ ...comment, comments: temp }, id);
  };

  //For rendering child comments if present
  const childComments = comment.comments.map((ele) => (
    <Comment
      comment={ele}
      id={ele.id}
      addComment={(val, id) => passAdd(val, id)}
      deleteComment={(val, id) => passDelete(val, id)}
      changeComment={(val, id) => passChange(val, id)}
      latest={latest}
      key={ele.id}
    />
  ));
  return (
    <div className="CommentDiv">
      <div className="ParentComment">
        <span className="CommentText">{comment.text}</span>
        <div className="CommentTimestamp">&nbsp;---{comment.date}</div>
        <div className="CommentButton">
          <Stack direction="row" spacing={2}>
            <Button
              size="small"
              variant="outlined"
              color="error"
              startIcon={<DeleteIcon />}
              onClick={handleDelete}
            >
              Delete
            </Button>
            <Button
              size="small"
              variant="contained"
              endIcon={<SendIcon />}
              onClick={handleReplyClick}
            >
              {reply ? "Close" : "Reply"}
            </Button>
            <Button
              size="small"
              color="secondary"
              variant="contained"
              endIcon={<EditIcon />}
              onClick={handleEditClick}
            >
              {edit ? "Close" : "Edit"}
            </Button>
          </Stack>
        </div>
      </div>
      {reply ? (
        <CommentEditor
          comment={comment}
          addComment={(val) => handleAdd(val)}
          latest={latest}
        />
      ) : (
        ""
      )}
      {edit ? (
        <EditComment
          comment={comment}
          value={comment.text}
          editComment={(val) => handleChange(val)}
          latest={latest}
        />
      ) : (
        ""
      )}
      {comment.comments.length === 0 ? (
        ""
      ) : (
        <div className="ChildComments">{childComments}</div>
      )}
    </div>
  );
};

export default Comment;
