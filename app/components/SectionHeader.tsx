import React from "react";

type SectionHeaderProps = {
  title: string;
};

const SectionHeader = ({ title }: SectionHeaderProps) => {
  return <h2 className="text-sm mb-3">{title}</h2>;
};

export default SectionHeader;
