import React, { useContext, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { getStory } from "../../services/story.service";
import { StoryFiller } from "../../data/data";
import StoryContext from "../../context/StoryContext";

export default function ViewStoryRoute() {
  // const { storyId } = useParams() || "";
  // const { stories } = useContext(StoryContext);
  // const story = stories.filter((story) => story._id === storyId);
  const location = useLocation();
  const { story } = location.state;
  console.log(story);
  const [thisStory, setThisStory] = useState<StoryFiller>({
    author: "",
    place: "",
    person: "",
    sillyWord: "",
    occupation: "",
    number: "",
    brandTagline: "",
  });

  // useEffect(() => {
  //   fillStory(storyId || "");
  // }, [storyId]);
  // let thisStory = {
  //   author: "",
  //   place: "",
  //   person: "",
  //   sillyWord: "",
  //   occupation: "",
  //   number: "",
  //   brandTagline: "",
  // };
  // function fillStory(storyIdentity: string) {
  //   getStory(storyIdentity).then((response) => {
  //     setThisStory(response);
  //   });
  // }
  return (
    <div>
      {story.author} needed to go to {story.place} as soon as possible! Luckily,
      they met a {story.occupation} named {story.person}. {story.person} flew{" "}
      {story.author} to {story.place} in their private jet called "The Flying{" "}
      {story.sillyWord}". They arrived in {story.number} minutes. {story.author}{" "}
      said "{story.brandTagline}" and walked into the sunset.
    </div>
  );
}
