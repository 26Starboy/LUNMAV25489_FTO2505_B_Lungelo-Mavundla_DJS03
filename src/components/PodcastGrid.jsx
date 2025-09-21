import React from "react";
import PodcastPreviewCard from "./PodcastPreviewCard.jsx";

const PodcastGrid = ({ podcasts, genres }) => {
  return (
    <section className="podcast-grid" id="podcasts">
      {podcasts.map(podcast => (
        <PodcastPreviewCard key={podcast.id} podcast={podcast} genres={genres} />
      ))}
    </section>
  );
};

export default PodcastGrid;
