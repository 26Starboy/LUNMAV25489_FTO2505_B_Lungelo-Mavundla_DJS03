import React from "react";
import PodcastPreviewCard from "./PodcastPreviewCard";

/**
 * PodcastGrid displays a responsive grid of PodcastPreviewCard components.
 * @param {Array} podcasts - Array of podcast objects
 */
const PodcastGrid = ({ podcasts }) => {
  return (
    <section id="podcasts" className="podcast-grid">
      {podcasts.map((podcast) => (
        <PodcastPreviewCard key={podcast.id} {...podcast} />
      ))}
    </section>
  );
};

export default PodcastGrid;
