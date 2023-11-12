import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import React from "react";
import * as ReactDOM from "react-dom/client";
import About from "./components/About";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import Login from "./components/Login";
/* import Signup from "./components/Signup"; */
import Food_Donation_Drives from "./components/Food_Donation_Drives";
import Book_Donation_Drives from "./components/Book_Donation_Drives";
import Clothes_Donation_Drives from "./components/Clothes_Donation_Drives";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" Component={About} />
      <Route path="/contact" Component={Contact} />
      <Route path="/login" Component={Login} />
      {/* <Route path="/signup" Component={Signup} /> */}
      <Route path="/food-donation-drives" Component={Food_Donation_Drives} />
      <Route path="/book-donation-drives" Component={Book_Donation_Drives} />
      <Route
        path="/clothes-donation-drives"
        Component={Clothes_Donation_Drives}
      />
    </Routes>
  );
}

export default App;
