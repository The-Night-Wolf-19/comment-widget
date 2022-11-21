//Component for editing comments

import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "./CommentEditor.css";

const EditComment = ({ comment, value, editComment, latest }) => {
  const [input, setInput] = useState(value);
  const handleChange = (val) => {
    setInput(val);
  };
  const handleEdit = () => {
    if (input === "") return;
    let date = new Date();
    date = date.toString();
    let temp = { ...comment, text: input, date: date };

    setInput("");
    editComment(temp);
  };
  const handleKey = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleEdit();
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
          <Button variant="contained" onClick={handleEdit}>
            Edit Comment
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default EditComment;
