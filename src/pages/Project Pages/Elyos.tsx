import ScrollToTop from "../../components/ScrollToTop";


const Elyos = () => {
  return (
    <div className="flex w-full flex-col gap-[10px] bg-zinc-900  lg:px-[180px] lg:py-[110px]">
      <ScrollToTop/>
      <h1 className="text-[35px] font-bold text-white">Elyos Project</h1>

      <p className="text-[17px] text-zinc-400">
        A group of university students and mentors developing efficient EV's for Shell Eco
        Marathon.
      </p>

      <img
        src="./gubi_mesa.jpeg"
        alt="elyos car"
        loading="lazy"
        className="rounded-md object-cover lg:mt-[15px] lg:max-w-[1000px]"
      />

      {/* Blog init */}
      <div className="flex w-full flex-col gap-[5px] lg:max-w-[750px]">
        <h1 className="blog-subtitle lg:mt-[40px]">What is SEM?</h1>
        <p className="blog-text">
          SEM stands for{" "}
          <a
            href="https://www.shellecomarathon.com/"
            className="text-white underline hover:text-emerald-400"
          >
            Shell Eco Marathon
          </a>
          , which is a competition focused on efficient energy consumption
          applied to the automotive industry. Basically participant teams are
          required to design and build cars that are able to complete a certain
          distance in some time using the least amount of energy (which can be
          electric or fuel in the case of internal combustion cars).
        </p>

        <p className="blog-text">
          Elyos is a team made up of university students and mentors aiming for
          the electric vehicle prototype challenge, and have participated in 3
          different SEM events. Having the best performance last year where we
          were ranked 4th place in the competition out of 28 teams, and a new
          record for mexican teams was also set that day.
        </p>

        <img
          src="./sem_2024_rank.JPG"
          alt="ranking elyos indianapolis 2024"
          loading="lazy"
          className="rounded-md object-cover lg:mb-[20px] lg:mt-[20px] lg:max-w-[1000px]"
        />

        <h1 className="blog-subtitle lg:mt-[40px]">
          How can efficiency be improved?
        </h1>

        <p className="blog-text">
          Vehicle's energy consumption depends on both mechanical and
          electric/electronic several factors. These are what I consider are the
          most critical conditions.
        </p>
        <ul className="blog-text" style={{ listStyleType: "disc" }}>
          <li>Vehicle Aerodynamics</li>
          <li>Vehicle's Weight</li>
          <li>
            Brushless electric motor efficiency at certain speeds (shown at
            motor's datasheet)
          </li>
          <li>
            Brushless DC Motor driver (components and internal programming){" "}
          </li>
        </ul>
        <p className="blog-text">
          In this article I want to focus on the car electronics, since I have
          been mostly involved in the{" "}
          <span className="font-bold text-white">BLDC driver</span> development
          (as it is required to design your own motor driver by the competition
          rules) and building a{" "}
          <span className="font-bold text-white">telemetry system </span> to
          gather real-time data from the car to perform data analysis and carry
          out optimizations based on different driving conditions.
        </p>

        <h1 className="blog-subtitle lg:mt-[40px]">Vehicle's Telemetry</h1>
        <p className="blog-text">
          Through the telemetry system we are able to measure, visualize and
          register relevant data from the vehicles performance in real-time.
        </p>
        <img
          src="./telemetry_pcb.JPG"
          alt="telemetry pcb"
          className="rounded-md object-cover lg:mb-[20px] lg:mt-[20px] lg:max-w-[1000px]"
        />
        <p className="blog-text">
          The shown PCB is mounted on the rear section of the chassis, and it is
          programmed to constantly collect data about the following variables.
        </p>
        <ul className="blog-text" style={{ listStyleType: "disc" }}>
          <li>Battery voltage</li>
          <li>Current flowing through the motor</li>
          <li>Accelerations in 3-axes</li>
          <li>Rotation in 3-axes (roll, pitch, yaw)</li>
          <li>GPS data (latitude, longitude, GPS speed)</li>
          <li>Wheel RPM's</li>
        </ul>
        <p className="blog-text">
          After this data is collected it's sent via RF using the{" "}
          <span className="font-bold text-white">LoRa RFM95W</span>
          {" "}module, and should be received by a base station connected to a
          laptop, where raw data will be parsed and the team monitors
          performance using a desktop custom Graphical User Interface (GUI)
          built using <span className="font-bold text-white">QTQuick</span> for
          this application.
        </p>
        <img
          src="./telemetry_ui.JPG"
          alt="telemetry interface"
          loading="lazy"
          className="rounded-md object-cover lg:mb-[20px] lg:mt-[20px] lg:max-w-[1000px]"
        />
      </div>
    </div>
  );
};

export default Elyos;
