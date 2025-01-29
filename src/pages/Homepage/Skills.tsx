
const Skills = () => {
  return (
    <section id="skills">
      <div className="w-full bg-black px-[100px] lg:pb-[70px] lg:pt-[20px]">
        <h2 className="text-[35px] font-bold text-white">Skills</h2>
        <div className="h-[1px] w-full bg-zinc-600 lg:mt-[10px]"></div>

        <p className="mt-[30px] flex w-full justify-center">
          <a href="https://skillicons.dev">
            <img
              loading="lazy"
              src="https://skillicons.dev/icons?i=c,cpp,python,matlab,js,git,github,linux,latex,vscode,qt,opencv,raspberrypi,arduino"
              className="transition-transform duration-300 hover:scale-[1.03] lg:w-[900px]"
            />
          </a>
        </p>

        <div className="h-[1px] w-full bg-zinc-600 lg:mt-[30px]"></div>
      </div>
    </section>
  );
};

export default Skills;
