import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import StoryContext from "../../context/StoryContext";
import { Link } from "react-router-dom";
import "./ViewStoryRoute.css";

export default function ViewStoryRoute() {
  const location = useLocation();
  const { storyIndex } = location.state;
  const { stories } = useContext(StoryContext);
  const story = stories[storyIndex];
  let nextIndex = storyIndex === stories.length - 1 ? 0 : storyIndex + 1;
  let prevIndex = storyIndex === 0 ? stories.length - 1 : storyIndex - 1;
  return (
    <div className="view-story">
      <p className="view-story__text">
        {story.author} needed to go to {story.place} as soon as possible!
        Luckily, they met a {story.occupation} named {story.person}.{" "}
        {story.person} flew {story.author} to {story.place} in their private jet
        called "The Flying {story.sillyWord}". They arrived in {story.number}{" "}
        minutes. {story.author} said "{story.brandTagline}" and walked into the
        sunset.
      </p>
      <nav className="view-story__links">
        <Link
          to={`/stories/${stories[prevIndex]}`}
          state={{ storyIndex: prevIndex }}
        >
          Previous Story
        </Link>
        <Link
          to={`/stories/${stories[nextIndex]}`}
          state={{ storyIndex: nextIndex }}
        >
          Next Story
        </Link>
      </nav>
    </div>
  );
}
