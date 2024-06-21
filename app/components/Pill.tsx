import React from "react";

type PillProps = {
  content: string;
  small?: boolean;
};

const Pill = ({ content, small = false }: PillProps) => {
  if (small) {
    return (
      <div className="rounded-full px-3 py-1 border border-solid border-color">
        <p className="text-small">{content}</p>
      </div>
    );
  } else {
    return (
      <div className="rounded-full px-3 py-1 sm:px-3 sm:py-1 border border-solid border-color">
        <p className="text-base sm:text-lg">{content}</p>
      </div>
    );
  }
};

export default Pill;
