import React from "react";
import { Provider } from "react-redux";
import { store } from './app/store';

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/navigation/Navbar";

function App() {
  return (
    <Provider store={store}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Provider>
  );
}

export default App;
