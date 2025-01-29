import { useEffect, useState } from "react";

const Hero = () => {
  const media = [
    { type: "video", src: "./pruebas_horus.mp4" },
    { type: "image", src: "./gubi_prime.jpeg" },
  ];

  const [mediaCount, setMediaCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setMediaCount((prevCount) =>
      (prevCount + 1) % media.length
      );
    }, 10000); // Change every 10 secs

    return () => clearInterval(interval);
  }, [media.length]);

  const currentMedia = media[mediaCount];

  return (
    <section id="home">
      <div
        className="relative mt-[70px] w-full bg-[#000000]"
        style={{ height: "calc(100vh - 70px)" }}
      >
        {currentMedia.type === "video" ? (
          <video
            className="absolute inset-0 h-full w-full object-cover"
            src={currentMedia.src}
            autoPlay
            muted
            loop
          ></video>
        ) : (
          <img
            src={currentMedia.src}
            alt=""
            className="h-full w-full object-cover"
          />
        )}

        {/* Shadow Overlay */}
        <div className="absolute inset-0 flex h-full w-full flex-col items-center justify-center bg-black bg-opacity-60">
          <h1 className="text-[85px] text-white">Impact the World</h1>
        </div>
      </div>
    </section>
  );
};

export default Hero;
