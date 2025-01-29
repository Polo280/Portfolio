
import BottomBar from "../../components/BottomBar";

const Horus = () => {
  return (
    <>
      <div className="flex w-full flex-col gap-[10px] bg-black lg:px-[180px] lg:py-[110px]">
        <h1 className="text-[35px] font-bold text-white">FRC #6348 - Horus</h1>

        <p className="text-[17px] text-zinc-400">
          FIRST Robotics Competition 2022, Rapid React Challenge.
        </p>

        <img
          src="./marseloide2.JPG"
          alt=""
          className="rounded-md object-cover lg:mt-[15px] lg:max-w-[1000px]"
        />

        {/* Blog init */}
        <div className="flex w-full flex-col gap-[5px] lg:max-w-[750px]">
          <h1 className="blog-subtitle lg:mt-[40px]">Overview</h1>
          <p className="blog-text">
            <span className="font-bold">FIRST Robotics Competition (FRC)</span>{" "}
            is an international high school robotics competition, where teams
            from different schools all over the world design and build a robot
            to get the highest score in the challenge that is launched every
            year.
          </p>
          <p className="blog-text">
            Personally, I took part of Horus (#6348) team during my last year in
            high school, and it taught me a lot about programming hardware and
            3D design but most importantly, how to work in a team and to solve
            problems with the things you have right away.
          </p>

          <h1 className="blog-subtitle lg:mt-[40px]">
            The design process: Off Season
          </h1>
          <p className="blog-text">
            Before the Covid pandemic I had never designed anything functional
            in my life, the closest I had been when I drew spaceships and moon
            robots as a kid. But during 2021, when we practically spent the
            whole day closed up in our houses, I started learning{" "}
            <span className="font-bold text-white">Solidworks</span> on my own
            with YouTube videos. It was totally worth it.
          </p>

          <p className="blog-text">
            When we got into 5th semester, it was the Off Season of the
            competition, a period to practically use for the new people involved
            in the team to learn the basic skills needed to contribute actively,
            so I decided to experiment programming robot motors, modules and
            also started to 3D design some pieces in our inventory as a warm up
            for the Build Season.
          </p>

          {/* <p className="blog-text">
          One of the designs I did that I'm proud of, is this rotary,{" "}
          <span className="font-bold text-white"> adjustable hood turret</span>{" "}
          mechanism able to launch balls in different angles for the previous
          challenge - 2021 Infinite Recharge.
        </p>

        <img
          src="/Turret.JPG"
          alt=""
          className="rounded-md object-cover lg:mb-[20px] lg:mt-[20px] lg:max-w-[500px]"
        /> */}

          <h1 className="blog-subtitle lg:mt-[40px]">
            The design process: Build Season
          </h1>

          <p className="blog-text">
            When the 2022{" "}
            <span className="font-bold text-white">Rapid React</span> challenge
            came out we started taking decisions for the overall design of the
            new robot. The challenge involved a structure which was placed at
            the exact center of the field with two baskets - a lower and bigger
            one, and also a higher cone-shaped smaller basket. And also some
            bars with different heights so the robots could hang up from the
            lowest one and reach the higher ones climbing.
          </p>

          <p className="blog-text">
            There were many ways to get points according to the rules of the
            event. This{" "}
            <a
              href="https://www.reddit.com/r/FRC/comments/rzd6nn/rapid_react_cheetsheat_strategy_map/#lightbox"
              className="underline hover:text-emerald-400"
            >
              cheatsheet
            </a>{" "}
            from team 4481 shows them in an attractive, orderly manner.
          </p>

          <img
            src="./rapid_react.webp"
            alt=""
            className="rounded-md object-cover lg:mb-[20px] lg:mt-[20px] lg:max-w-[1000px]"
          />

          <p className="blog-text">
            So, there were many initial ideas for our robots design but some key
            takeaways that the whole team considered a must.
          </p>
          <ul className="blog-text" style={{ listStyleType: "disc" }}>
            <li>
              Robot should be able to collect balls from the field on its own (
              <span className="highlight">folding intake </span> for size
              constraints).
            </li>
            <li>
              It should be able to throw balls reaching the top basket, as well
              to the lower one (the simplest, yet effective mechanism was to go
              for a<span className="highlight"> turret</span>).
            </li>
            <li>
              Ability to hang from at least the lowest bar (if time suited us
              after finishing everything else develop a mechanism to climb
              progressively).
            </li>
          </ul>

          <p className="blog-text">
            This is an initial design I created in Solidworks for the general
            structure of our robot. The turret has an adjustable hood radius
            which can be changed to throw the balls at different speeds and
            angles.
          </p>

          <img
            src="./marseloide.JPG"
            alt=""
            className="rounded-md object-cover lg:mb-[20px] lg:mt-[20px] lg:max-w-[1000px]"
          />

          <p className="blog-text">
            And the intake is supported by two arms that would allow it to fold
            and extend with some{" "}
            <span className="highlight">pneumatic pistons</span> we already had
            in our workshop (though it didn't work as expected when
            manufactured, but fortunately we managed to solve it ;).
          </p>

          <p className="blog-text">
            The parts were manufactured by CIU, one of our sponsors using laser
            cutting CNC machines, and the whole robot was made of{" "}
            <span className="highlight">aluminum</span> to reduce weight, except
            for the intake which should handle collisions from other robots
            without breaking so it was made of{" "}
            <span className="highlight">stainless steel</span>.
          </p>

          <h1 className="blog-subtitle lg:mt-[40px]">
            Monterrey's Regional 2022
          </h1>

          <p className="blog-text">
            Finally the competition day came after weeks of hard work building
            our robot. Since our team's budget was reduced, we could only afford
            to participate in one regional event of the competition. The team
            decided to go for the regional in Monterrey, since its the biggest
            carried out in Mexico.
          </p>

          <p className="blog-text">
            Below you can watch one of the most exciting matches our team Horus
            (6348) had during the event, where other teams were pushing our
            robot to avoid it scoring.
          </p>

          <iframe
            width="750"
            height="450"
            src="https://www.youtube.com/embed/-UR2Dr7DIUY?si=nGsIS4DQbzDRX_lZ"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
            className="lg:mb-[20px] lg:mt-[20px]"
          ></iframe>

          <p className="blog-text">
            Horus had a good overall performance during the competition. We made
            it up to the{" "}
            <a
              href="https://www.thebluealliance.com/team/6348/2022"
              className="highlight underline hover:text-emerald-400"
            >
              finals
            </a>{" "}
            led by team 3478 (Lambot), but were defeated by alliance led by team
            4635 (Botbusters) from Monterrey. I think we did a good job being
            high-school students at the time and that we learnt a lot about
            solving problems with low budget and with the things he had right
            away.
          </p>

          <p className="blog-text">
            More valuable in my opinion, the friends and connections I made
            while I was in this team, and the fun we had together while building
            the robot, each member working on things they enjoyed the most and
            did best.
          </p>
        </div>
      </div>
      <BottomBar />
    </>
  );
};

export default Horus;
