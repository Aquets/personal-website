import React from "react";

type VimeoVideoProps = {
  videoId: string;
  className?: string;
  title?: string;
};

const VimeoVideo = ({ videoId, className, title }: VimeoVideoProps) => {
  return (
    <div className={className}>
      <iframe
        src={
          "https://player.vimeo.com/video/" +
          videoId +
          "?h=34422120dc&title=0&byline=0&background=1&badge=0&autoplay=1&loop=1&autopause=0"
        }
        allow="autoplay; fullscreen; picture-in-picture"
        title={title}
        className="w-full aspect-video pointer-events-none loading-bg"
      ></iframe>
    </div>
  );
};

export default VimeoVideo;
