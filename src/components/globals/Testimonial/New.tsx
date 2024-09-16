import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  Typography,
} from "@mui/material";
import { toast } from "react-toastify";
import Rating from "@mui/material/Rating";

interface TestimonialDialogProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (testimonial: {
    content: string;
    author: string;
    rating: number;
  }) => void;
}

function NewTestimonialDialog({
  open,
  onClose,
  onSubmit,
}: TestimonialDialogProps) {
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState(0);

  const handleSubmit = () => {
    if (!content || !author || rating === 0) {
      toast.error("Please complete all fields.");
      return;
    }

    onSubmit({ content, author, rating });
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Submit Your Testimonial</DialogTitle>
      <DialogContent>
        <TextField
          fullWidth
          label="Your Name"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          margin="dense"
        />
        <TextField
          fullWidth
          label="Your Testimonial"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          margin="dense"
          multiline
          rows={4}
        />
        <div className="flex items-center mt-3">
          <Typography>Rating:</Typography>
          <Rating
            value={rating}
            onChange={(event, newValue) => {
              if (newValue !== null) {
                setRating(newValue);
              }
            }}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} color="primary">
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default NewTestimonialDialog;
