import React from "react";

type PillProps = {
  content: string;
  small?: boolean;
};

const Pill = ({ content, small = false }: PillProps) => {
  if (small) {
    return (
      <div className="rounded-full px-3 py-1 border border-solid border-color">
        <p className="text-sm">{content}</p>
      </div>
    );
  } else {
    return (
      <div className="rounded-full px-3 py-2 sm:px-5 sm:py-3 border border-solid border-color">
        <p className="text-lg sm:text-xl">{content}</p>
      </div>
    );
  }
};

export default Pill;
