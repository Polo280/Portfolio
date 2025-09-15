const About = () => {
  return (
    <section id="about">
      <div className="flex w-full flex-row gap-[60px] bg-black px-[120px] lg:h-[750px]">
        <div className="flex h-full w-full flex-col items-center gap-2 lg:pt-[120px]">
          <h2 className="w-full lg:text-[50px] text-white">About Me</h2>
          <p className="w-full lg:text-[20px] leading-loose text-zinc-300 text-justify">
            I'm Jorge, currently majoring in Robotics and Digital Systems looking to increase my understanding 
            about the world and life. I like to learn and challenge myself by building working solutions for problems 
            that require combining a wide range of skills, from 3D modelling and PCB layout design to 
            embedded programming and Graphical User Interface (GUI) design. <br/><br/>
            
            I have worked with many teams and met many amazing colleagues along the journey, each stage 
            with its own obstacles and lessons. Feel free to check the projects I've been fortunate to be 
            part of!
          </p>

          {/* Buttons CVs */}
          <div className="lg:mt-[50px] flex w-full flex-row items-center gap-[80px] justify-center">
            <a
              href={`${import.meta.env.BASE_URL}Jorge_Gonzalez_Resume.pdf`}
              target="_blank"
              //download="Jorge_Gonzalez_Resume.pdf"
              className=""
            >
              <button className="flex lg:h-[80px] lg:w-[200px] flex-row items-center gap-[5px] rounded-lg bg-emerald-950 px-[10px] py-[10px] text-[17px]
                               text-white transition-colors duration-300 hover:bg-emerald-500 hover:text-white
                               border-zinc-400 border-2 lg:text-[20px] justify-center">
                <span className="material-symbols-rounded">description</span>{" "}
                Hardware CV
              </button>
            </a>
            <a
              href={`${import.meta.env.BASE_URL}Jorge_Gonzalez_Resume_SW.pdf`}
              target="_blank"
              //download="Jorge_Gonzalez_Resume.pdf"
              className=""
            >
              <button className="flex lg:h-[80px] lg:w-[200px] flex-row items-center gap-[5px] rounded-lg bg-blue-950 
                                px-[10px] py-[10px] lg:text-[20px] text-white transition-colors duration-300 hover:bg-blue-500
                                hover:text-white border-zinc-400 border-2 justify-center">
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
            className="max-w-[500px] lg:rounded-[250px] lg:mt-[30px]"
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
