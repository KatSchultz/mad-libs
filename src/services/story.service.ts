import { StoryFiller } from "../data/data";
import { backEnd } from "../libs/axios";

export const getStory = async (id: string) => {
  const response = await backEnd.get<StoryFiller>(`/stories/${id}`);
  return response.data;
};

export const getStories = async () => {
  const response = await backEnd.get<StoryFiller[]>("/stories");
  return response.data;
};

export const createStory = async (data: StoryFiller) => {
  const response = await backEnd.post<StoryFiller>("/stories", data);
  return response.data;
};
