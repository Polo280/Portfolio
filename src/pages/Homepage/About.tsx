const About = () => {
  return (
    <section id="about">
      <div className="flex w-full flex-row gap-[60px] bg-black px-[120px] lg:h-[700px]">
        <div className="flex h-full w-full flex-col items-center gap-2 pt-[220px]">
          <h2 className="w-full lg:text-[50px] text-white">Hello World!</h2>
          <p className="w-full text-[18px] leading-loose text-zinc-400">
            My name is Jorge, I'm a robotics engineering student from Mexico
            interested in working in problems on different areas to expand my
            solving skills and understanding of the world. Currently I'm
            interested in electronic design, embedded systems, deep learning and
            control modelling.
          </p>

          {/* Buttons CVs */}
          <div className="mt-[25px] flex w-full flex-row items-center gap-[50px]">
            <a
              href="/Jorge_Gonzalez_Resume.pdf"
              target="_blank"
              //download="Jorge_Gonzalez_Resume.pdf"
              className=""
            >
              <button className="flex w-[150px] flex-row items-center gap-[5px] rounded-lg bg-emerald-950 px-[10px] py-[10px] text-[17px] text-emerald-300 transition-colors duration-300 hover:bg-emerald-500 hover:text-white">
                <span className="material-symbols-rounded">description</span>{" "}
                Hardware CV
              </button>
            </a>
            <a
              href="/Jorge_Gonzalez_Resume_SW.pdf"
              target="_blank"
              //download="Jorge_Gonzalez_Resume.pdf"
              className=""
            >
              <button className="flex w-[150px] flex-row items-center gap-[5px] rounded-lg bg-blue-950 px-[10px] py-[10px] text-[17px] text-blue-300 transition-colors duration-300 hover:bg-blue-500 hover:text-white">
                {" "}
                <span className="material-symbols-rounded">
                  description
                </span>{" "}
                Software CV
              </button>
            </a>
          </div>
        </div>

        <div className="flex h-full w-full flex-col items-center justify-center">
          <img
            src="./jorch.svg"
            loading="lazy"
            alt=""
            className="max-w-[450px] rounded-3xl"
          />
          {/* <p className="w-full text-center text-[15px] leading-relaxed text-zinc-400 lg:mt-[15px]">
              Just a <span className="underline">chill guy</span> who likes technology
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default About;
