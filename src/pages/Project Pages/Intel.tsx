import ScrollToTop from "../../components/ScrollToTop";
import TopBar from "../../components/TopBar";
import BottomBar from "../../components/BottomBar";

const Intel = () => {
  return (
    <div>
      <div className="flex w-full flex-col gap-[5px] bg-zinc-900 lg:px-[180px] lg:pb-[110px]">
        <ScrollToTop/>
        <TopBar/>

        <h1 className="lg:text-[50px]  text-white lg:mt-[110px]">Intel Corp. Intern</h1>

        <p className="text-[17px] text-zinc-300 lg:text-[22px]">
            Signal Integrity oriented towards server platforms - Intel XEON Series.
        </p>

        <figure className="text-center">
          <img
            src="./IntelPlatform.jpg"
            alt="server"
            className="rounded-md object-cover lg:mt-[25px] lg:mb-[25px] lg:max-w-[850px]"
          />
          {/* <p className="mt-2 text-sm text-gray-600 italic">A caption beneath the image</p> */}
        </figure>

        {/* BLOG Init */}
        <div className="flex w-full flex-col gap-[5px] lg:max-w-[850px] lg:mt-[30px]">
          <p className="blog-text">
            My internship at Intel is the first industrial level professional role I've got to experience
            in my career. I had applied to many roles at Intel before, but somehow I found myself having
            interviews for the Signal Integrity team, something critical in every application involving 
            electronics, yet something I had never depeened in. 
          </p>

          <p className="blog-text">
            At first, it was pretty tough to adapt to my new role since - I realized it is 
            pretty common to use lots of abbreviations in big companies and very specific terms
            that I had never listened before, also getting comfortable with the company tools and 
            in general, getting used to the team workflow and the site. 
          </p>

          <p className="blog-text">
            The main focus of the Signal Integrity team is to build <i>Product Design Guidelines (PDG's) </i>
            for platforms <i> - motherboards - </i> related with Intel silicon processors. There are two sub-areas 
            following this hierarchy - <strong> client side </strong> for processors used in personal computers (Intel Core ix)
            and <strong> server side </strong> for processors used in server farms of big tech companies like Microsoft and 
            Alibaba.
          </p>

          <p className="blog-text">
            Now briefly, a PDG is a very long document with the considerations that must be taken into account
            when designing boards for an specific model of the processor. It contains descriptions for parameters
            such as transmission line length and calculated impedance so that people who design system boards use these 
            assure they will meet the corresponding specifications depending on the signals they are working with.
          </p>

          <figure className="text-center">
          <img
            src="./XEON.jpeg"
            alt="server"
            className="rounded-md object-cover lg:mt-[25px] lg:mb-[25px] lg:max-w-[850px]"
          />
          <p className="lg:mt-[5px] lg:text-md text-gray-500 italic">Intel XEON series processor, Land Grid Array (LGA) package</p>
        </figure>

        <p className="blog-text">
            One of the most recurrent problems while measuring processor signals using lab instrumentation <i> - oscilloscope,
            VNA, TDR - </i> comes from the very careful procedures that must be followed to ensure the signal being captured
            is not distorted in a significant way from the measurement setup such as the probe and the cable used.
        </p>

        <p className="blog-text">
          Now suppose the processor is mounted on its socket to perform measurements while the system motherboard is booting up. 
          How could you measure the signal pins located right in the center of the processor's case? How can it be done 
          without soldering some very thin wire since it would impact the total impedance of the transmission line, therefore
          distorting the signal? 
        </p>

        <p className="blog-text">
          So, this is the task I was given to work with when I entered the team. To build a prototype that can allow 
          lab measurements in these signals while impacting the transmission line to the least extent. This is a challenging
          project that requires to apply knowledge from a broad range of areas, from material selection for manufacturing and PCB layout
          to embedded programming and GUI implementation.  
        </p>

        </div>

      </div>
      <BottomBar />
    </div>
  );
};

export default Intel;
