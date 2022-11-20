import React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import "./CommentEditor.css";
const CommentEditor = ({ comments }) => {
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
        <div className="InputCommentDiv">
          <TextField
            required
            id="outlined-required"
            label="Comment"
            placeholder="Comment"
          />
          <Button variant="contained">Add Comment</Button>
        </div>
      </Box>
    </div>
  );
};

export default CommentEditor;
