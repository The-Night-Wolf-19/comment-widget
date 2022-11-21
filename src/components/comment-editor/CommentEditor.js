//Component for adding comment

import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "./CommentEditor.css";

const CommentEditor = ({ comment, addComment, latest }) => {
  const [input, setInput] = useState("");
  const handleChange = (val) => {
    setInput(val);
  };
  const handleAdd = () => {
    if (input === "") return;
    let temp = { ...comment };
    let date = new Date();
    date = date.toString();
    let add = {
      username: "Shubham",
      date: date,
      text: input,
      id: latest,
      comments: [],
    };
    temp.comments.push(add);
    setInput("");
    addComment(temp);
  };
  const handleKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleAdd();
    }
  };
  return (
    <div className="CommentEditorDiv">
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "80%" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="InputCommentDiv" onKeyPress={(e) => handleKey(e)}>
          <TextField
            required
            id="outlined-required"
            label="Comment"
            placeholder="Comment"
            value={input}
            onChange={(e) => handleChange(e.target.value)}
          />
          <Button variant="contained" onClick={handleAdd}>
            Add Comment
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default CommentEditor;
