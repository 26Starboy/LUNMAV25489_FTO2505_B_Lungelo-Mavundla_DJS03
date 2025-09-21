import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";
import PodcastGrid from "./components/PodcastGrid";
import Loading from "./components/Loading";
import Error from "./components/Error";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <PodcastGrid />
      <Footer />
    </>
  );
};

export default App;
