import ScrollToTop from "../../components/ScrollToTop";
import BottomBar from "../../components/BottomBar";

const Telemetry = () => {
  return (
    <>
      <div className="flex w-full flex-col gap-[10px] bg-zinc-900 lg:px-[180px] lg:py-[110px]">
        <ScrollToTop/>
        <h1 className="text-[35px] font-bold text-white">
          Electric Vehicle Telemetry System
        </h1>

        <p className="text-[17px] text-zinc-400">
          A complete solution for real-time data collection and visualization
          for EV's
        </p>

        <img
          src="./gubi_prime.jpeg"
          alt=""
          className="rounded-md object-cover lg:mt-[15px] lg:max-w-[1000px]"
        />

        {/* Blog init */}
        <div className="flex w-full flex-col gap-[5px] lg:max-w-[750px]">
          <h1 className="blog-subtitle lg:mt-[40px]">Overview</h1>

          <p className="blog-text">
            The primary purpose of this project is to gather real-time data from{" "}
            <a href="#/elyos" className="blog-link">
              ELYOS
            </a>{" "}
            electric vehicle and register overall performance under different
            track conditions to carry out data analysis and know which
            optimizations should be implemented.
          </p>

          <p className="blog-text">
            <i>Shell Eco Marathon </i>is a competition focused on vehicle's{" "}
            efficiency, and in the EV's category, it all boils down to
            minimizing power consumption while maintaining a certain velocity.
            Surely there are many ways to achieve this, but as far as the
            vehicle's electronics is concerned, it is all about optimizing
            voltages being fed to the BLDC motor phases.
          </p>

          <p className="blog-text">
            The question here is{" "}
            <span className="italic">
              what parameters should be tweaked to optimize current consumption?
            </span>{" "}
            This is a great question and I will try to answer it in this
            article.
          </p>

          <h1 className="blog-subtitle lg:mt-[40px]">Physical Module</h1>
          <p className="blog-text">
            First of all, we need to have at our disposal a reliable data
            source. It all starts with the physical telemetry module, where data
            is being measured and transmitted. An STM32 NUCLEO L432KC board
            operates as the central processing unit, which was chosen due to its
            reduced size, availability and the standarized use of ST processors
            on industrial applications.
          </p>

          <div className="rounded-md object-cover lg:mb-[20px] lg:mt-[20px] lg:max-w-[1000px]">
            <iframe
              allowFullScreen
              src="https://www.flux.ai/polo280/telemetryboard?embed=1&editor=pcb_3d"
              className="w-full lg:h-[600px]"
            ></iframe>
          </div>

          <p className="blog-text lg:mt-[20px]">
            Currently, the telemetry system is composed by the following
            components.
          </p>

          <table className="bg-zinc-800 text-[18px] leading-8 text-white lg:mt-[20px]">
            <thead>
              <tr>
                <th className="blog-table-cell bg-blue-950/50">Sensor</th>
                <th className="blog-table-cell bg-blue-950/50">
                  Data it provides
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="blog-table-cell">Voltage divider</td>
                <td className="blog-table-cell">Battery Voltage</td>
              </tr>
              <tr>
                <td className="blog-table-cell">Shunt and current sensor</td>
                <td className="blog-table-cell">
                  Current flowing through the BLDC
                </td>
              </tr>
              <tr>
                <td className="blog-table-cell">IMU BNO055</td>
                <td className="blog-table-cell">
                  <ul className="pl-[20px]" style={{ listStyleType: "disc" }}>
                    <li>Orientation (quaternion or euler)</li>
                    <li>Accelerometer (linear accelerations)</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="blog-table-cell">Adafruit Breakout GPS</td>
                <td className="blog-table-cell">
                  <ul className="pl-[20px]" style={{ listStyleType: "disc" }}>
                    <li>Latitude and longitude</li>
                    <li>Speed estimate (knots)</li>
                    <li>GPS status code</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="blog-table-cell">Hall effect sensor</td>
                <td className="blog-table-cell">RPMs of rear wheel</td>
              </tr>
            </tbody>
          </table>

          <p className="blog-text lg:mt-[30px]">
            Besides those, for the next iteration of the PCB design we are
            planning to add an <i>OMRON optical encoder</i> to the telemetry
            system so we can know how is the pilot steering and this way predict
            a more accurate linear velocity!
          </p>

          <p className="blog-text">
            The STM microcontroller was programmed to interact with these
            components and gather the previously listed data. After that, it
            encodes this data in an specific string format and sends it via RF
            with LoRa RFM95W at 915 Mhz.
          </p>

          <h1 className="blog-subtitle lg:mt-[40px]">
            Graphical User Interface
          </h1>
          <p className="blog-text">
            Data is only relevant to us if we are able to visualize it and
            record it to evaluate performance under different conditions and
            modifications.
          </p>

          <p className="blog-text">
            To develop the <i>Graphical User Interface </i> I went with QT
            framework. As it is widely used on professional applications (also
            in automotive industry), specifically with <i>QT Quick </i> which
            uses QML and Javascript for the interface and C++ for back-end
            functionalities.
          </p>

          <img
            src="./telemetry_ui.JPG"
            alt="telemetry system ui"
            loading="lazy"
            className="rounded-md object-cover lg:mb-[20px] lg:mt-[20px] lg:max-w-[750px]"
          />

          <p className="blog-text">
            The app is still in development, but currently is features the
            following capabilities.
          </p>

          <ul className="blog-text pl-[20px]" style={{ listStyleType: "disc" }}>
            <li>
              <span className="font-bold text-zinc-100">Side Menu</span> - To
              change between configuration and visualization
            </li>
            <li>
              <span className="font-bold text-zinc-100">
                Radial Bars Panel{" "}
              </span>{" "}
              - Visualize in a friendly format velocity and distance traversed
            </li>
            <li>
              <span className="font-bold text-zinc-100">Plot Panel</span> - Show
              and compare variable history over time
            </li>
            <li>
              <span className="font-bold text-zinc-100">Data Panel</span> - Show
              real-tiem data being captured
            </li>
            <li>
              <span className="font-bold text-zinc-100">
                Real Time Location Panel
              </span>{" "}
              - Pin real-time location of the EV in the map
            </li>
            <li>
              <span className="font-bold text-zinc-100">
                Time control Panel
              </span>{" "}
              - Record completed laps and show some statistics
            </li>
          </ul>

          <p className="blog-text">
            One of the most useful things about this application is that it is
            capable of buffering and constantly <i>storing incoming data</i> in
            a <i>Comma Separated Values</i> (CSV) file. So the team is able to
            perform different data analyses, see what is working and make
            optimizations if not.
          </p>

          <p className="blog-text">
            This telemetry system even opens the gate to perform a much more
            complex type of analysis using <i>machine or deep learning</i>. Like
            training the model with variables of our system vs how much current
            is being consumed under those conditions, and then adjusting them in
            the track to lower power consumption.{" "}
            <span className="underline">Posibilities are endless!</span>
          </p>
        </div>
      </div>
      <BottomBar />
    </>
  );
};

export default Telemetry;
