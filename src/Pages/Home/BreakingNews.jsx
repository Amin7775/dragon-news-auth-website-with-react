import Marquee from "react-fast-marquee";
const BreakingNews = () => {
  return (
    <div className="flex gap-4 bg-[#F3F3F3] py-3">
      <button className="btn text-white bg-[#D72050] hover:bg-[#da6685] ml-3 text-semibold text-xl">
        Breaking News
      </button>
      <Marquee className="font-semibold text-lg cursor-pointer" pauseOnHover>
        Match Highlights: Germany vs Spain — as it happened ! Match Highlights:
        Germany vs Spain as...
      </Marquee>
    </div>
  );
};

export default BreakingNews;
