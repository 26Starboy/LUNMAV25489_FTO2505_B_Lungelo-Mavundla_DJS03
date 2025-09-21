import React from "react";

/**
 * Error component displays error or empty state messages.
 * @param {string} message - Message to display
 */
const Error = ({ message }) => {
  return <div className="error">{message}</div>;
};

export default Error;
