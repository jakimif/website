import type { NextPage } from "next";
import FrameComponent3 from "./frame-component3";

export type ContentType = {
  className?: string;
};

const Content: NextPage<ContentType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-row items-start justify-center py-0 px-5 box-border max-w-full text-left text-base text-white font-body-16px-regular ${className}`}
    >
      <div className="w-[1224px] rounded-3xl bg-theme-colors-color-02 flex flex-row items-start justify-start p-16 box-border gap-[174px] max-w-full z-[1] mq450:gap-[22px] mq450:pt-[42px] mq450:pb-[42px] mq450:box-border mq825:gap-[43px] mq1125:flex-wrap mq1400:gap-[87px] mq1400:pl-8 mq1400:pr-8 mq1400:box-border">
        <div className="flex-1 flex flex-col items-start justify-start pt-[3.5px] px-0 pb-0 box-border min-w-[348px] max-w-full mq825:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full mq825:gap-[20px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full">
              <div className="w-[496px] flex flex-col items-start justify-start gap-[16px] max-w-full">
                <div className="flex flex-row items-center justify-start gap-[12px]">
                  <img
                    className="h-6 w-6 relative overflow-hidden shrink-0"
                    alt=""
                    src="/auto-awesome.svg"
                  />
                  <div className="relative leading-[170%]">
                    Analytics and Reporting
                  </div>
                </div>
                <h1 className="m-0 self-stretch relative text-29xl tracking-[-2px] leading-[130%] font-medium font-inherit mq450:text-10xl mq450:leading-[37px] mq825:text-19xl mq825:leading-[50px]">
                  Grow Your Team, Grow Your Business
                </h1>
              </div>
              <div className="self-stretch relative leading-[170%] text-neutral-neutral-01">
                Streamline HR processes and empower your team with our products.
                Facilitate manage employee data, and more in one platform.
              </div>
            </div>
            <button className="cursor-pointer [border:none] p-0 bg-[transparent] w-[188px] flex flex-row items-start justify-start">
              <div className="flex-1 rounded-9xl bg-white flex flex-row items-center justify-center py-3 px-6 gap-[8px] whitespace-nowrap">
                <div className="flex-1 relative text-base leading-[28px] font-body-16px-regular text-theme-colors-color-02 text-center inline-block min-w-[108px]">
                  Book a Demo
                </div>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/east-3.svg"
                />
              </div>
            </button>
          </div>
        </div>
        <div className="w-[386px] rounded-2xl bg-white box-border flex flex-col items-start justify-start py-[22px] px-[23px] relative gap-[40px] min-w-[386px] max-w-full text-gray-400 font-dm-sans border-[1px] border-solid border-darkgray mq450:gap-[20px] mq825:min-w-full mq1125:flex-1">
          <div className="w-[332px] flex flex-row items-start justify-between max-w-full gap-[20px] mq450:flex-wrap">
            <div className="flex flex-col items-start justify-start gap-[5px]">
              <div className="relative tracking-[-0.4px] leading-[22px] inline-block min-w-[68px]">
                Expenses
              </div>
              <div className="relative text-9xl tracking-[-0.4px] leading-[22px] font-medium text-gray-900 whitespace-nowrap mq450:text-3xl mq450:leading-[18px]">
                $ 250,560.0
              </div>
            </div>
            <div className="flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0">
              <img className="w-8 h-8 relative" alt="" src="/mastercard.svg" />
            </div>
          </div>
          <div className="w-[297px] h-px absolute !m-[0] right-[28px] bottom-[136px] box-border border-t-[1px] border-dashed border-lightgray-200" />
          <div className="w-[297px] h-px absolute !m-[0] right-[27px] bottom-[96px] box-border border-t-[1px] border-dashed border-lightgray-200" />
          <div className="self-stretch flex flex-col items-start justify-start gap-[21px] text-xs">
            <div className="self-stretch flex flex-row items-start justify-start pt-0 px-0 pb-[11px] gap-[11px] mq450:flex-wrap">
              <div className="relative tracking-[-0.4px] leading-[8px] inline-block min-w-[28px]">
                $30k
              </div>
              <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[192px]">
                <div className="self-stretch h-px relative box-border border-t-[1px] border-dashed border-lightgray-200" />
              </div>
            </div>
            <FrameComponent3
              r20k="$20k"
              r10k="$10k"
              r5k="$5k"
              r0="$0"
              propMinWidth="27px"
              propGap="15px"
              propMinWidth1="24px"
              propMinWidth2="20px"
              propMinWidth3="15px"
              propLeft="0px"
            />
            <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0.5 pl-[38px]">
              <div className="flex-1 flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                <div className="relative tracking-[-0.4px] leading-[8px] inline-block min-w-[12px] mq450:w-full mq450:h-3">
                  10
                </div>
                <div className="relative tracking-[-0.4px] leading-[8px] inline-block min-w-[7px] mq450:w-full mq450:h-[7px]">
                  11
                </div>
                <div className="relative tracking-[-0.4px] leading-[8px] inline-block min-w-[11px] mq450:w-full mq450:h-[11px]">
                  12
                </div>
                <div className="relative tracking-[-0.4px] leading-[8px] inline-block min-w-[11px] mq450:w-full mq450:h-[11px]">
                  13
                </div>
                <div className="relative tracking-[-0.4px] leading-[8px] inline-block min-w-[11px] mq450:w-full mq450:h-[11px]">
                  14
                </div>
                <div className="relative tracking-[-0.4px] leading-[8px] inline-block min-w-[11px] mq450:w-full mq450:h-[11px]">
                  15
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
