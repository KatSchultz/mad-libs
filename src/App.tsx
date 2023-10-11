import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import HomeRoute from "./components/HomeRoute/HomeRoute";
import ListStoriesRoute from "./components/ListStoriesRoute/ListStoriesRoute";
import ViewStoryRoute from "./components/ViewStoryRoute/ViewStoryRoute";
import CreateStory from "./components/CreateStory/CreateStory";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<HomeRoute />}></Route>
          <Route path="/stories" element={<ListStoriesRoute />}></Route>
          <Route path="/stories/:id" element={<ViewStoryRoute />}></Route>
          <Route path="/create-story" element={<CreateStory />}></Route>
          <Route path="*" element={<Navigate to="/" />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
