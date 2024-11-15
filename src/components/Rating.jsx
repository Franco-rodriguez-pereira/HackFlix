import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";

function HalfRating({ setFilterRating }) {
  const handleRatingChange = (event, newValue) => {
    if (newValue === 4) {
      setFilterRating(7);
    } else if (newValue === 5) {
      setFilterRating(9);
    } else {
      setFilterRating(0); 
    }
  };

  return (
    <Stack spacing={1}>
      <Rating
        name="half-rating"
        defaultValue={0}
        precision={1}
        onChange={handleRatingChange}
      />
    </Stack>
  );
}

export default HalfRating;
