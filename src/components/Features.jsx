import React from "react";

/**
 * Features section component highlights app features.
 */
const Features = () => {
  return (
    <section id="features" className="features">
      <h2>App Features</h2>
      <div className="features-grid">
        <div className="feature-card">
          <h3>Browse Podcasts</h3>
          <p>Explore trending podcasts across all genres with ease.</p>
        </div>
        <div className="feature-card">
          <h3>Track Progress</h3>
          <p>Keep track of the episodes you've listened to and never miss updates.</p>
        </div>
        <div className="feature-card">
          <h3>Discover New Shows</h3>
          <p>Get personalized recommendations based on your listening preferences.</p>
        </div>
      </div>
    </section>
  );
};

export default Features;
