// src/components/PodcastPreviewCard.jsx
import React from "react";

const PodcastPreviewCard = ({ podcast, genreMap }) => {
  return (
    <div className="podcast-card">
      {/* Podcast image */}
      <img
        src={podcast.image}
        alt={podcast.title}
        className="podcast-image"
      />

      <div className="podcast-info">
        {/* Title */}
        <h3 className="podcast-title">{podcast.title}</h3>

        {/* Genres */}
        <div className="podcast-genres">
          {podcast.genres.map((id) => (
            <span key={id} className="genre-tag">
              {genreMap[id]}
            </span>
          ))}
        </div>

        {/* Description */}
        <p className="podcast-description">{podcast.description}</p>

        {/* Seasons info */}
        <p className="podcast-seasons">
          Seasons: {podcast.seasons}
        </p>

        {/* Last updated */}
        <p className="podcast-updated">
          Last updated: {new Date(podcast.updated).toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default PodcastPreviewCard;
