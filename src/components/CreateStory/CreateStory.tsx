import React, { ChangeEvent, useState, useContext } from "react";
import "./CreateStory.css";
import { storyData } from "../../data/data";
import { createStory } from "../../services/story.service";
import StoryContext from "../../context/StoryContext";

export default function CreateStory() {
  const [userInput, setUserInput] = useState({
    author: "",
    place: "",
    person: "",
    sillyWord: "",
    occupation: "",
    number: "",
    brandTagline: "",
  });

  const { addStory } = useContext(StoryContext);

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setUserInput({ ...userInput, ...{ [e.target.name]: e.target.value } });
  };

  const submitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    // storyData.push(userInput);
    addStory(userInput);
  };

  return (
    <div>
      <h2>Create A Story</h2>
      <form action="" className="story-form" onSubmit={submitHandler}>
        <label htmlFor="author">Author</label>
        <input
          type="text"
          name="author"
          value={userInput.author}
          onChange={changeHandler}
        />
        <label htmlFor="place">Place</label>
        <input
          type="text"
          name="place"
          value={userInput.place}
          onChange={changeHandler}
        />
        <label htmlFor="person">Person</label>
        <input
          type="text"
          name="person"
          value={userInput.person}
          onChange={changeHandler}
        />
        <label htmlFor="sillySord">Silly Word</label>
        <input
          type="text"
          name="sillyWord"
          value={userInput.sillyWord}
          onChange={changeHandler}
        />
        <label htmlFor="occupation">Occupation</label>
        <input
          type="text"
          name="occupation"
          value={userInput.occupation}
          onChange={changeHandler}
        />
        <label htmlFor="number">Number</label>
        <input
          type="text"
          name="number"
          value={userInput.number}
          onChange={changeHandler}
        />
        <label htmlFor="brandTagline">Brand Tagline</label>
        <input
          type="text"
          name="brandTagline"
          value={userInput.brandTagline}
          onChange={changeHandler}
        />
        <button className="story-form__button">Save</button>
      </form>
    </div>
  );
}
