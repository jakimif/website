import type { NextPage } from "next";
import Content1 from "./content1";

export type FrameComponent1Type = {
  className?: string;
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[104px] box-border max-w-full text-left text-29xl text-neutral-neutral-03 font-body-16px-regular mq450:pb-11 mq450:box-border mq1125:pb-[68px] mq1125:box-border ${className}`}
    >
      <div className="w-[1224px] flex flex-col items-start justify-start gap-[56px] max-w-full mq825:gap-[28px]">
        <div className="self-stretch flex flex-row items-end justify-between max-w-full gap-[20px] mq825:flex-wrap">
          <h1 className="m-0 w-[496px] relative text-inherit tracking-[-2px] leading-[130%] font-medium font-inherit inline-block shrink-0 max-w-full mq450:text-10xl mq450:leading-[37px] mq825:text-19xl mq825:leading-[50px]">
            Free forever. Upgrade for unlimited tasks,
          </h1>
          <div className="w-[198px] rounded-lg bg-neutral-neutral-01 flex flex-row items-center justify-start p-2 box-border gap-[12px] text-base">
            <div className="flex flex-row items-center justify-start py-1 px-3">
              <div className="relative leading-[170%] inline-block min-w-[62px]">
                Monthly
              </div>
            </div>
            <div className="flex-1 rounded-lg bg-theme-colors-color-02 flex flex-row items-center justify-start py-1 px-3 text-center text-white">
              <div className="flex-1 relative leading-[170%]">Yearly</div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full text-5xl text-neutral-neutral-01">
          <Content1
            fi2550288="/fi-2550288.svg"
            essential="Essential"
            prop="$260"
          />
          <Content1
            fi2550288="/fi-4148878.svg"
            essential="Premium"
            prop="$399"
            propBackgroundColor="#38d2d9"
            propBackgroundColor1="#142249"
            propColor="#0f1224"
            propColor1="#0f1224"
            propBorderTop="1px solid rgba(6, 59, 38, 0.2)"
            propPadding="unset"
            propColor2="#142249"
            propMarginLeft="-36px"
            propWidth="63px"
            propAlignSelf="stretch"
            propColor3="#0f1224"
            propAlignSelf1="stretch"
            propDisplay="unset"
            propMinWidth="unset"
            propColor4="#0f1224"
            propBackgroundColor2="#38d2d9"
            propColor5="#142249"
          />
          <Content1
            fi2550288="/fi-10464383.svg"
            essential="Enterprise"
            prop="$456"
            propBackgroundColor="#142249"
            propBackgroundColor1="#38d2d9"
            propColor="#f5f6f4"
            propColor1="#fff"
            propBorderTop="1px solid rgba(245, 246, 244, 0.3)"
            propPadding="unset"
            propColor2="#fff"
            propMarginLeft="-53px"
            propWidth="unset"
            propAlignSelf="unset"
            propColor3="#f5f6f4"
            propAlignSelf1="unset"
            propDisplay="inline-block"
            propMinWidth="52px"
            propColor4="#f5f6f4"
            propBackgroundColor2="#142249"
            propColor5="#fff"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
