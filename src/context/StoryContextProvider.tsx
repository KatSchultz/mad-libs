import { ReactNode, useState } from "react";
import { StoryFiller } from "../data/data";
import StoryContext from "./StoryContext";
import { createStory, getStories } from "../services/story.service";

interface Props {
  children: ReactNode;
}

const CartContextProvider = ({ children }: Props) => {
  const [stories, setStories] = useState<StoryFiller[]>([]);

  // getStories().then((response) => {
  //   setStories(response);
  // });

  const addStory = (story: StoryFiller): void => {
    createStory(story);
  };

  return (
    <StoryContext.Provider value={{ stories, setStories, addStory }}>
      {children}
    </StoryContext.Provider>
  );
};

export default CartContextProvider;
