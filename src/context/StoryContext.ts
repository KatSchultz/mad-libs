import { createContext, Dispatch } from "react";
import { StoryFiller } from "../data/data";

interface StoryContextModel {
  stories: StoryFiller[];
  setStories: (stories: StoryFiller[]) => void;
  addStory: (story: StoryFiller) => void;
}

const defaultValue: StoryContextModel = {
  stories: [],
  setStories: (stories: StoryFiller[]) => {},
  addStory: () => {},
};

const StoryContext = createContext(defaultValue);
export default StoryContext;
