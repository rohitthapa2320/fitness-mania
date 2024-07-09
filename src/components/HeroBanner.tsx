import HeroBannerImage from "../assets/images/banner.jpg";

const HeroBanner = ():JSX.Element => {
  return(
    <div className="lg:mt-[100px] mt-[70px] sm:ml-[90px] relative p-5">
      <h1 className="text-[#9d4edd] font-extrabold text-[26px]">Fitness Mania</h1>
      <p className="font-semibold text-[40px] lg:text-[44px] mb-5 mt-[15px]">Sweat, Smile <br />
        And Repeat
      </p>
      <p className="text-lg font-serif leading-8 mb-8">
        Checkout the most effective exercises personalized to you...
      </p>
      <a href="#exercises" className=" w-[200px] text-center p-[12px] text-white rounded-[6px] bg-[#9d4edd] hover:bg-[#9d4edd]">
        Explore Exercises
      </a>
      <img src={HeroBannerImage} alt="hero-banner" className="hero-banner-img" />
    </div>
  )
}

export default HeroBanner;