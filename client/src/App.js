import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ToDoPage from "./pages/ToDoPage";
import NavMenu from "./components/NavMenu";
import UserPage from "./pages/UserPage";

const App = () => {
  return (
    <BrowserRouter>
      <NavMenu />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/todo" element={<ToDoPage />} />
        <Route path="/users" element={<UserPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
