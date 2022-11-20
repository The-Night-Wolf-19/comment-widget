import { Button } from "@mui/material";
import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import Stack from "@mui/material/Stack";
import "./Comment.css";
const Comment = () => {
  return (
    <div className="CommentDiv">
      <div className="ParentComment">
        <span className="CommentText">Comment</span>
        <div className="CommentButton">
          <Stack direction="row" spacing={2}>
            <Button variant="outlined" color="error" startIcon={<DeleteIcon />}>
              Delete
            </Button>
            <Button variant="contained" endIcon={<SendIcon />}>
              Reply
            </Button>
          </Stack>
        </div>
      </div>
      <div className="ChildComments">
        <div className="CommentDiv">
          <div className="ParentComment">
            <span className="CommentText">Comment</span>
            <div className="CommentButton">
              <Stack direction="row" spacing={2}>
                <Button
                  variant="outlined"
                  color="error"
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
                <Button variant="contained" endIcon={<SendIcon />}>
                  Reply
                </Button>
              </Stack>
            </div>
          </div>
          <div className="ChildComments">
            <div className="CommentDiv">
              <div className="ParentComment">
                <span className="CommentText">Comment</span>
                <div className="CommentButton">
                  <Stack direction="row" spacing={2}>
                    <Button
                      variant="outlined"
                      color="error"
                      startIcon={<DeleteIcon />}
                    >
                      Delete
                    </Button>
                    <Button variant="contained" endIcon={<SendIcon />}>
                      Reply
                    </Button>
                  </Stack>
                </div>
              </div>
            </div>
            <div className="CommentDiv">
              <div className="ParentComment">
                <span className="CommentText">Comment</span>
                <div className="CommentButton">
                  <Stack direction="row" spacing={2}>
                    <Button
                      variant="outlined"
                      color="error"
                      startIcon={<DeleteIcon />}
                    >
                      Delete
                    </Button>
                    <Button variant="contained" endIcon={<SendIcon />}>
                      Reply
                    </Button>
                  </Stack>
                </div>
              </div>
            </div>
            <div className="CommentDiv">
              <div className="ParentComment">
                <span className="CommentText">Comment</span>
                <div className="CommentButton">
                  <Stack direction="row" spacing={2}>
                    <Button
                      variant="outlined"
                      color="error"
                      startIcon={<DeleteIcon />}
                    >
                      Delete
                    </Button>
                    <Button variant="contained" endIcon={<SendIcon />}>
                      Reply
                    </Button>
                  </Stack>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="CommentDiv">
          <div className="ParentComment">
            <span className="CommentText">Comment</span>
            <div className="CommentButton">
              <Stack direction="row" spacing={2}>
                <Button
                  variant="outlined"
                  color="error"
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
                <Button variant="contained" endIcon={<SendIcon />}>
                  Reply
                </Button>
              </Stack>
            </div>
          </div>
        </div>
        <div className="CommentDiv">
          <div className="ParentComment">
            <span className="CommentText">Comment</span>
            <div className="CommentButton">
              <Stack direction="row" spacing={2}>
                <Button
                  variant="outlined"
                  color="error"
                  startIcon={<DeleteIcon />}
                >
                  Delete
                </Button>
                <Button variant="contained" endIcon={<SendIcon />}>
                  Reply
                </Button>
              </Stack>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comment;
