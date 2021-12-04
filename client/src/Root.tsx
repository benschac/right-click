import React from "react";
import { Link } from "react-router-dom";

export const Root: React.FC = () => {
  return (
    <div>
      Root Component <Link to="/about">About</Link>
    </div>
  );
};
