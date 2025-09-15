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

        <img
          src="./IntelPlatform.jpg"
          alt=""
          className="rounded-md object-cover lg:mt-[25px] lg:mb-[25px] lg:max-w-[850px]"
        />

        {/* BLOG Init */}
        <div className="flex w-full flex-col gap-[5px] lg:max-w-[850px]">
          <p className="blog-text">
            My internship at Intel is the first industrial level professional role I've got to experience
            in my career. I had applied to many roles at Intel before, but somehow I found myself having
            interviews for the Signal Integrity team, something critical in every application involving 
            electronics, yet something I had never depeened in. 
          </p>

          <p className="blog-text">
            At first, it was pretty tough to adapt to my new role since - I realized it is 
            pretty common to use lots of abbreviations in big companies and very specific terms
            that I had never listened before, also getting used to work with the company tools and 
            in general, getting used to the team workflow and the site. 
          </p>

          <p className="blog-text">
          </p>
        </div>

      </div>
      <BottomBar />
    </div>
  );
};

export default Intel;
