import { Button } from "@/components/ui/button";
import { InfiniteMovingText } from "@/components/ui/infinite-moving";

const Heading = () => {
  return (
    <main className="pt-20 relative z-10">
      <div className="w-full px-4 sm:px-8 md:px-16 lg:px-32 xl:px-72 pt-20 sm:pt-32 md:pt-48 pb-24 sm:pb-48 md:pb-96 space-y-10 sm:space-y-16 md:space-y-20">
        <div className="flex flex-col gap-4 sm:gap-5 md:gap-7">
          <span className="font-semibold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-[30px] sm:leading-[40px] md:leading-[50px] lg:leading-[60px] tracking-tight text-[#FFFFFF]">
            Empowering Lives Through Innovative{" "}
            <strong className="font-bold underline decoration-[#7F93FF] decoration-[5px] sm:decoration-[7px]">
              AI
            </strong>{" "}
            Technologies.{" "}
          </span>
          <span className="text-[#C0C2CC] font-normal text-base sm:text-lg md:text-xl lg:text-2xl leading-[24px] sm:leading-[26px] md:leading-[28px] lg:leading-[30px] tracking-tight">
            Finding new horizons for visionaries to accelerate their innovation
            and progress.
          </span>
          <div className="flex flex-col sm:flex-row items-center gap-3">
            <Button
              variant={"default"}
              className="w-40 sm:w-48 md:w-60 h-12 sm:h-14 rounded-xl bg-[#6A35FF] font-semibold text-base sm:text-lg leading-[28px] sm:leading-[30px] text-[#FFFFFF] tracking-tight"
            >
              Explore Our Services
            </Button>
            <Button
              variant={"outline"}
              className="w-32 sm:w-36 md:w-40 h-12 sm:h-14 bg-transparent rounded-xl border-[#6881FF] font-semibold text-base sm:text-lg leading-[28px] sm:leading-[30px] text-[#FFFFFF] tracking-tight"
            >
              Learn more
            </Button>
          </div>
        </div>
        <InfiniteMovingText items={sentences} direction="left" speed="fast" />
      </div>
    </main>
  );
};

const sentences = [
  " From Ideas to Software Solutions 💡✨",
  " From Ideas to Software Solutions 🌟✨",
  " From Ideas to Software Solutions 💡✨",
  " From Ideas to Software Solutions 🌟✨",
];

export default Heading;
