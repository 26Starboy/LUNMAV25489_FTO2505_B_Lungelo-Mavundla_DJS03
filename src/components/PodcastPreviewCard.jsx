import React from "react";

const PodcastPreviewCard = ({ podcast, genres }) => {
  // Map genre IDs to genre titles
  const genreTitles = genres
    .filter(g => podcast.genres.includes(g.id))
    .map(g => g.title);

  return (
    <div className="podcast-card">
      <img src={podcast.image} alt={podcast.title} className="podcast-image" />
      <h3 className="podcast-title">{podcast.title}</h3>
      {genreTitles.length > 0 && (
        <div className="podcast-genres">
          {genreTitles.map(title => (
            <span key={title} className="genre-tag">{title}</span>
          ))}
        </div>
      )}
      <p className="podcast-seasons">{podcast.seasons} Seasons</p>
      <p className="podcast-updated">Updated: {new Date(podcast.updated).toLocaleDateString()}</p>
      <p style={{ padding: "0 1rem 1rem" }}>{podcast.description}</p>
    </div>
  );
};

export default PodcastPreviewCard;
