import React from "react";
import Header from "./src/components/Header";
import Hero from "./src/components/Hero";
import PodcastPreview from "./src/components/PodcastPreview";
import Footer from "./src/components/Footer";

/**
 * Main App component that renders the landing page layout.
 */
function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <PodcastPreview />
      <Footer />
    </div>
  );
}

export default App;
