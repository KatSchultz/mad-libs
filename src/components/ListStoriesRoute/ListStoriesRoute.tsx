import React from "react";
import { getStories } from "../../services/story.service";

export default function ListStoriesRoute() {
  getStories().then((response) => {
    console.log(response);
  });

  return (
    <div>
      <h2>Read a Story</h2>
      <ul></ul>
    </div>
  );
}
