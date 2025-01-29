
import BottomBar from "../../components/BottomBar";

const ScorchFinder = () => {
  return (
    <div>
      <div className="flex w-full flex-col gap-[10px] bg-zinc-900 lg:px-[180px] lg:py-[110px]">
        <h1 className="text-[35px] font-bold text-white">Scorch Finder</h1>

        <p className="text-[17px] text-zinc-400">
          An automatic, low budget PCB inspection machine powered by Jetson Orin
          Nano with Deep Learning
        </p>

        <img
          src="./scorch.jpeg"
          alt="scorch finder machine"
          className="rounded-md object-cover lg:mt-[15px] lg:max-w-[1000px]"
        />

        {/* Blog init */}
        <div className="flex w-full flex-col gap-[5px] lg:max-w-[750px]">
          <h1 className="blog-subtitle lg:mt-[40px]">Overview</h1>

          <p className="blog-text">
            In today's world,{" "}
            <a
              target="_blank"
              href="https://en.wikipedia.org/wiki/Printed_circuit_board"
              className="blog-link"
            >
              Printed Circuit Boards
            </a>{" "}
            (PCB) play a significant role in our daily lives. We are always
            using something that involves electronics to a certain extend. Our
            computers, cellphones, cars, washing machines, microwave ovens,
            televisions, among many others work thanks to electronic components
            at their core.
          </p>

          <p className="blog-text">
            The vast majority of appliances and our daily work tools use PCB's.
            And as one might assume, the quality assurance of these devices is
            generally automated in large companies thanks to{" "}
            <i>big, expensive and complex</i> PCB inspection machines capable of
            performing the job.
          </p>

          <p className="blog-text">
            But is there any existing solution for small to medium sized
            businesses that can't afford one of those devices? With this in
            mind, a group of classmates and I decided to embark on this project
            to deliver a low-cost, effective solution which should be able to
            distinguish between healthy and defective PCB's and provide
            information about which kind of defects where found.
          </p>

          <h1 className="blog-subtitle lg:mt-[40px]">The Hardware</h1>
          <p className="blog-text">
            The hardware is composed by a 3-axis CNC mechanism, which uses 3
            NEMA-17 motors to operate. An Nvidia Jetson Orin Nano acts as the
            Central Processing Unit of the system and orchestrates the
            inspection process.
          </p>

          <p className="blog-text">
            Currently, our system features 3 sensors to evaluate PCB quality.
          </p>

          <ul className="blog-text pl-[20px]" style={{ listStyleType: "disc" }}>
            <li>
              <span className="font-bold text-zinc-100">
                General RGB camera
              </span>{" "}
              - Takes a shot of the whole PCB to provide visualization
            </li>
            <li>
              <span className="font-bold text-zinc-100">
                Microscope RGB camera
              </span>{" "}
              - To take photos of specific components in the PCB
            </li>
            <li>
              <span className="font-bold text-zinc-100">IR camera</span> - Shows
              temperature distribution all over the PCB (if some element is
              shorting it should heat up)
            </li>
          </ul>

          <p className="blog-text">
            We considered this data is enough to tell accurately if some PCB is
            healthy or not, and which components are defective.
          </p>

          <p className="blog-text">
            In order to reduce electronic noise in our system and assure a
            reliable source of communication between components, we created this
            board -{" "}
            <i>
              {" "}
              We decided to include Mario as we listened to Nintendo music to
              avoid falling asleep when working at night.
            </i>
          </p>

          <img
            src="./scorchfinder_pcb.JPG"
            alt="sorch finder board"
            loading="lazy"
            className="rounded-md object-cover lg:mb-[20px] lg:mt-[20px] lg:max-w-[750px]"
          />

          <p className="text-center text-zinc-400 lg:text-[16px]">
            <a
              href="https://www.flux.ai/polo280/pcbdefectfinder?editor=pcb_3d"
              target="_blank"
              className="blog-link"
            >
              Click here
            </a>{" "}
            to open the PCB design in Flux
          </p>

          <p className="blog-text">
            The board contains three A4988 drivers - <i>one per axis</i>, and it
            has pin headers to configure microstepping with bridges. It also has
            pads to connect limit switches to avoid collisions and uses JST
            terminals for each stepper, a fan for the Orin and the IR camera.
            The pins at the left are used to connect to the Jetson using a 2 x
            20 plain cable.
          </p>

          <p className="blog-text">
            We created a console program running on the Jetson to manually
            configure coordinates for different inspection routines, which are
            stored in text files and could be run atomatically after this.
          </p>

          <h1 className="blog-subtitle lg:mt-[40px]">The Neural Network</h1>

          <p className="blog-text">
            To differentiate between healthy and defective PCB's we first tried
            to go for a classical computer vision approach, but it didn't take
            too much to realize that it would be a very complex task with
            questionable performance. This is why why we decided to go for the
            neural network approach.
          </p>

          <img
            src="./neural_net_scorch.JPG"
            alt="neural network sample"
            loading="lazy"
            className="rounded-md object-cover lg:mb-[20px] lg:mt-[20px] lg:max-w-[750px]"
          />

          <p className="blog-text">
            The model was trained with 7200 images which included healthy,
            defective, misplaced and even missing components. Overall it has 25
            different classes to classify the components.
          </p>

          <p className="blog-text">
            The results consistently demonstrated that the neural network
            achieved the desired performance metrics. Specifically, the model
            exhibited over 95 % accuracy, meeting our ridorous requirements for
            precision. Additionally, it maintained a high mean Average Precision
            (mAP) score, further confirming the effectiveness of the neural
            network in detecting and classifying objects with high confidence.
          </p>

          <p className="blog-text">
            The neural network is executed remotely through an API call and
            output values are received in JSON format. Following this, data is
            parsed and then prepared for visualization.
          </p>

          <img
            src="./Visualizador.jpg"
            alt="scorch finder ui"
            loading="lazy"
            className="rounded-md object-cover lg:mb-[20px] lg:mt-[20px] lg:max-w-[750px]"
          />

          <p className="text-center text-zinc-400 lg:text-[16px]">
            PCB inspector output visualization app
          </p>

          <p className="blog-text lg:mt-[30px]">
            The visualization desktop application is composed of 3 main panels.
          </p>
          <ul className="blog-text pl-[20px]" style={{ listStyleType: "disc" }}>
            <li>
              <span className="font-bold text-zinc-100">PCB Overview</span> -
              Shows the whole PCB frame and highlights location of defective
              components
            </li>
            <li>
              <span className="font-bold text-zinc-100">Stats panel</span> - The
              middle panel displays with a checklist the defects that were found
              in the PCB
            </li>
            <li>
              <span className="font-bold text-zinc-100">IR image</span> -
              Displays an image showing the temperature distribution over the PCB.
            </li>
          </ul>
        </div>
      </div>
      <BottomBar />
    </div>
  );
};

export default ScorchFinder;
