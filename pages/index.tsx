import type { NextPage } from "next";
import FrameComponent10 from "../components/frame-component10";
import FrameComponent9 from "../components/frame-component9";
import FrameComponent8 from "../components/frame-component8";
import FrameComponent7 from "../components/frame-component7";
import FrameComponent6 from "../components/frame-component6";
import FrameComponent5 from "../components/frame-component5";
import FrameComponent4 from "../components/frame-component4";
import FrameComponent2 from "../components/frame-component2";
import FrameComponent1 from "../components/frame-component1";
import Footer from "../components/footer";
import GlobalPresence from "../components/global-presence";
import Content from "../components/content";
import FrameComponent from "../components/frame-component";

const HomeV: NextPage = () => {
  return (
    <div className="w-full relative bg-white overflow-hidden flex flex-col items-end justify-start pt-[27px] px-0 pb-0 box-border gap-[24px] leading-[normal] tracking-[normal]">
      <FrameComponent10 />
      <FrameComponent9 />
      <FrameComponent8 />
      <FrameComponent7 />
      <FrameComponent6 />
      <FrameComponent5 />
      <FrameComponent4 />
      <FrameComponent2 />
      <FrameComponent1 />
      <Footer />
      <GlobalPresence />
      <section className="self-stretch flex flex-col items-start justify-start max-w-full">
        <Content />
        <FrameComponent />
      </section>
    </div>
  );
};

export default HomeV;
