// Components
import WorkCard from "../../components/WorkCard";

const Projects = () => {
  const team_works = [
    {
      title: "ELYOS",
      imgSrc: "./elyos.jpeg",
      description:
        "An efficient Electric Vehicle made for Shell Eco Marathon competition",
      date: "",
      tags: ["BLDC Driver", "Telemetry", "PCB Design"],
      href: "#elyos",
      class_aux: "",
    },
    {
      title: "FRC 6348",
      imgSrc: "./marseloide2.JPG",
      description:
        "First Robotics Competition (2022) team 6348 - Horus, Rapid React challenge ",
      date: "",
      tags: ["Solidworks", "Python"],
      href: "#/horus",
      class_aux: "",
    },
  ];

  const works = [
    {
      title: "EV Telemetry",
      imgSrc: "./telemetry_ui.JPG",
      description:
        "A complete solution to monitor real-time performance of EV's. From physical module to UI",
      date: "",
      tags: ["STM32", "QT Quick", "Flux AI"],
      href: "#/telemetry",
      class_aux: "",
    },
    {
      title: "MiniMicro",
      imgSrc: "./minimicro.png",
      description:
        "32-bit RISC Microcontroller built using Verilog. Based on ARM-V7 instruction set",
      date: "",
      tags: ["Verilog", "Altera Quartus"],
      href: "https://github.com/Polo280/MiniMicro",
      class_aux: "opacity-90",
    },
    {
      title: "Scorch Finder",
      imgSrc: "./scorch.jpeg",
      description:
        "Automatic PCB defect detection machine using Jetson Orin Nano and Deep Learning",
      date: "",
      tags: ["Computer Vision", "C++", "Linux"],
      href: "#/scorchfind",
      class_aux: "opacity-90",
    },
  ];

  
  return (
    <section id="projects">
      <div className="flex w-full flex-col gap-[5px] bg-black px-[100px] lg:pb-[20px] lg:pt-[20px]">
        <h2 className="w-full text-[35px] font-bold text-white">Experience</h2>
        {/* <p className="text-zinc-400 text-[17px] w-[700px] mt-[5px]">The best way to master something is through practice and errors. These projects helped me to build
          skills, network with interesting people and to have lots of fun </p> */}

        {/* <h3 className="w-full text-[20px] text-white mt-[20px] font-bold">Community Challenges</h3> */}
        <div className="flex flex-row flex-wrap gap-[70px] lg:mt-[10px]">
          {team_works.map(
            (
              { title, imgSrc, description, date, tags, href, class_aux },
              key,
            ) => (
              <WorkCard
                key={key}
                title={title}
                imgSrc={imgSrc}
                description={description}
                date={date}
                tags={tags}
                href={href}
                class_aux={class_aux}
              />
            ),
          )}
        </div>

        <h3 className="mt-[40px] w-full text-[35px] font-bold text-white">
          Projects
        </h3>
        <div className="flex flex-row flex-wrap items-center gap-[70px]">
          {works.map(
            (
              { title, imgSrc, description, date, tags, href, class_aux },
              key,
            ) => (
              <WorkCard
                key={key}
                title={title}
                imgSrc={imgSrc}
                description={description}
                date={date}
                tags={tags}
                href={href}
                class_aux={class_aux}
              />
            ),
          )}
        </div>

        {/* <h3 className="w-full text-[20px] text-white mt-[40px] font-bold">Hackatons and Competitions</h3>
        <div className="flex flex-row flex-wrap gap-[70px]">
          {
            competitions.map(({title, imgSrc, description, date, tags, href, class_aux}, key) => (
              <WorkCard 
              key={key}
              title={title}
              imgSrc={imgSrc}
              description={description}
              date={date}
              tags={tags}
              href={href}
              class_aux={class_aux}
              />
            ))
          }
        </div> */}

        <div className="flex w-full items-center lg:mt-[50px] lg:h-[50px]">
          <a href="/projects">
          <button 
            className="bg-emerald-950 text-emerald-300 transition-colors duration-300 hover:bg-emerald-500 hover:text-white lg:mt-[10px] lg:rounded-3xl lg:px-[28px] lg:py-[15px] lg:text-[18px]">
              View All Projects{" "}
              <span className="material-symbols-rounded text-[15px]">
                arrow_forward
              </span>
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
