import { frame1, frame2, frame3 } from "@assets/index";

const Hero = () => {
  return (
    <section className="mx-auto flex max-w-screen-xl flex-col-reverse items-center gap-12 px-6 py-16 md:flex-row">
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-gradient mb-3 text-3xl font-bold md:text-4xl md:leading-[3rem] lg:text-5xl lg:leading-[4rem]">
          Building Dreams, Crafting Homes
        </h2>
        <p className="text-darkBlue mb-6 text-sm leading-6 md:w-4/5">
          Turning dreams into homes. Exploring our exceptional craftsmanship and
          envision your perfect space.
        </p>
        <button className="primary-btn">Explore our projects</button>
      </div>
      <div className="flex justify-center gap-2 md:gap-3 lg:gap-5">
        <img src={frame1} className="hero-img"></img>
        <img src={frame2} className="hero-img mt-[5%]"></img>
        <img src={frame3} className="hero-img"></img>
      </div>
    </section>
  );
};
export default Hero;
