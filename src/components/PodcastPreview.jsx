import React, { useEffect, useState } from "react";
import PodcastGrid from "./PodcastGrid";
import Loading from "./Loading";
import Error from "./Error";
import { genres } from "../data";
import { formatDistanceToNow } from "date-fns";

/**
 * PodcastPreview component fetches podcast data and renders the grid.
 */
const PodcastPreview = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://podcast-api.netlify.app/podcasts")
      .then((res) => res.json())
      .then((data) => {
        if (!data || data.length === 0) {
          setError("No podcasts found.");
          setLoading(false);
          return;
        }

        // Map genre IDs to names
        const podcastsWithGenres = data.map((podcast) => {
          const podcastGenres = genres
            .filter((g) => podcast.genre_ids?.includes(parseInt(g.id)))
            .map((g) => g.title);

          return {
            id: podcast.id,
            title: podcast.title,
            image: podcast.image,
            seasons: podcast.totalSeasons || 0,
            genres: podcastGenres,
            lastUpdated: formatDistanceToNow(new Date(podcast.lastUpdated), {
              addSuffix: true,
            }),
          };
        });

        setPodcasts(podcastsWithGenres);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch podcasts.");
        setLoading(false);
      });
  }, []);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return <PodcastGrid podcasts={podcasts} />;
};

export default PodcastPreview;
