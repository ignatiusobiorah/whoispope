import React from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/app.scss";
//pages
import Home from "./pages/home";
import About from "./pages/about";
import Blog from "./pages/blog";
import Error from "./components/error";
import Users from "./pages/users";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Users />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
