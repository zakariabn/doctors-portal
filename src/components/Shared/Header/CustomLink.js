import React from "react";
import { Link, useMatch, useResolvedPath } from "react-router-dom";

const CustomLink = ({ children, to, ...props }) => {
  const resolved = useResolvedPath(to);
  const match = useMatch({ path: resolved.pathname, end: true });

  return (
    <div>
      <Link
        className={`btn btn-white
        ${match && "btn-primary"}
        `}
        to={to}
        {...props}>
        {children}
      </Link>
    </div>
  );
};

export default CustomLink;
