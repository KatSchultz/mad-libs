import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { getStories } from "../../services/story.service";
import { StoryFiller } from "../../data/data";
import StoryContext from "../../context/StoryContext";

export default function ListStoriesRoute() {
  // const [stories, setStories] = useState<StoryFiller[]>([]);
  // getStories().then((response) => {
  //   setStories(response);
  // });

  const { stories, setStories } = useContext(StoryContext);

  useEffect(() => {
    retrieveStories();
  }, []);

  const retrieveStories = (): void => {
    getStories().then((response) => {
      setStories(response);
    });
  };

  return (
    <div>
      <h2>Read a Story</h2>
      <ul>
        {stories.map((story) => (
          <li key={story._id}>
            <Link to={`/stories/${story._id}`} state={{ story: story }}>
              Madlib by {story.author}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
