import React from "react";
import VimeoVideo from "./VimeoVideo";
import Image from "next/image";

type ImageOrVideoProps = {
  src: string;
  altText: string;
  className?: string;
};

const ImageOrVideo = ({ src, altText, className }: ImageOrVideoProps) => {
  if (src.includes("video:")) {
    return (
      <VimeoVideo
        videoId={src.replace("video:", "")}
        className={className}
        title={altText}
      ></VimeoVideo>
    );
  } else {
    return (
      <Image
        src={src}
        alt={altText}
        width={720}
        height={720}
        style={{
          width: "100%",
          height: "100%",
        }}
        className={"object-cover " + className}
      />
    );
  }
};

export default ImageOrVideo;
