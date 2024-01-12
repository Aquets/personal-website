"use client";
import Script from "next/script";

const HeroSection = () => {
  return (
    <>
      <Script src="/script.js" strategy="lazyOnload"></Script>
      <div className="w-full h-screen flex justify-center items-center overflow-hidden pb-20">
        <pre
          id="morph-section"
          className="w-auto text-lg leading-5 lg:text-xl lg:leading-6 2xl:text-3xl 2xl:leading-9 select-none "
        ></pre>
      </div>
    </>
  );
};

export default HeroSection;
