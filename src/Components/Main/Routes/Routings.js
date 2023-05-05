import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "../UI/Footer";
import Navbar from "../UI/Navbar";
import Error from "../UI/Screens/Error";
import Home from "../UI/Screens/Home";
import MovieDetails from "../UI/Screens/MovieDetails";
const Routings = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Movie/:id" element={<MovieDetails />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Routings;
