import React from "react";

/**
 * PodcastPreviewCard displays information about a single podcast.
 * @param {string} title - Podcast title
 * @param {string} image - Podcast image URL
 * @param {number} seasons - Number of seasons
 * @param {Array} genres - Array of genre names
 * @param {string} lastUpdated - Human-readable last updated date
 */
const PodcastPreviewCard = ({ title, image, seasons, genres, lastUpdated }) => {
  return (
    <div className="podcast-card">
      <img src={image} alt={title} className="podcast-image" />
      <h3 className="podcast-title">{title}</h3>
      <p className="podcast-seasons">{seasons} Season{seasons !== 1 ? "s" : ""}</p>
      <div className="podcast-genres">
        {genres.map((genre) => (
          <span key={genre} className="genre-tag">
            {genre}
          </span>
        ))}
      </div>
      <p className="podcast-updated">Last updated: {lastUpdated}</p>
    </div>
  );
};

export default PodcastPreviewCard;
