import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type Content1Type = {
  className?: string;
  fi2550288?: string;
  essential?: string;
  prop?: string;

  /** Style props */
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
  propBorderTop?: CSSProperties["borderTop"];
  propPadding?: CSSProperties["padding"];
  propColor2?: CSSProperties["color"];
  propMarginLeft?: CSSProperties["marginLeft"];
  propWidth?: CSSProperties["width"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propColor3?: CSSProperties["color"];
  propAlignSelf1?: CSSProperties["alignSelf"];
  propDisplay?: CSSProperties["display"];
  propMinWidth?: CSSProperties["minWidth"];
  propColor4?: CSSProperties["color"];
  propBackgroundColor2?: CSSProperties["backgroundColor"];
  propColor5?: CSSProperties["color"];
};

const Content1: NextPage<Content1Type> = ({
  className = "",
  fi2550288,
  essential,
  prop,
  propBackgroundColor,
  propBackgroundColor1,
  propColor,
  propColor1,
  propBorderTop,
  propPadding,
  propColor2,
  propMarginLeft,
  propWidth,
  propAlignSelf,
  propColor3,
  propAlignSelf1,
  propDisplay,
  propMinWidth,
  propColor4,
  propBackgroundColor2,
  propColor5,
}) => {
  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const iconStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const essentialStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const startBuildingYourStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const lineDiv1Style: CSSProperties = useMemo(() => {
    return {
      borderTop: propBorderTop,
    };
  }, [propBorderTop]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      marginLeft: propMarginLeft,
      width: propWidth,
    };
  }, [propMarginLeft, propWidth]);

  const frameDiv4Style: CSSProperties = useMemo(() => {
    return {
      alignSelf: propAlignSelf,
    };
  }, [propAlignSelf]);

  const perUserStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor3,
      alignSelf: propAlignSelf1,
      display: propDisplay,
      minWidth: propMinWidth,
    };
  }, [propColor3, propAlignSelf1, propDisplay, propMinWidth]);

  const perMonthStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor4,
    };
  }, [propColor4]);

  const textStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
    };
  }, [propBackgroundColor2]);

  const getStartedStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor5,
    };
  }, [propColor5]);

  return (
    <div
      className={`flex-1 rounded-2xl bg-neutral-neutral-01 flex flex-col items-start justify-start p-4 box-border gap-[32px] min-w-[294px] max-w-full text-left text-5xl text-neutral-neutral-01 font-body-16px-regular mq450:gap-[16px] ${className}`}
    >
      <div
        className="self-stretch rounded-lg bg-theme-colors-color-02 flex flex-col items-start justify-start p-4 gap-[31px] mq450:gap-[15px]"
        style={frameDiv1Style}
      >
        <div className="self-stretch flex flex-col items-start justify-start gap-[24px]">
          <div className="self-stretch flex flex-row items-start justify-start gap-[16px] mq450:flex-wrap">
            <div className="flex flex-row items-start justify-start">
              <div
                className="rounded-2xl bg-theme-colors-color-01 flex flex-row items-start justify-center p-4"
                style={iconStyle}
              >
                <img
                  className="h-8 w-8 relative overflow-hidden shrink-0"
                  loading="lazy"
                  alt=""
                  src={fi2550288}
                />
              </div>
            </div>
            <div className="flex-1 flex flex-col items-start justify-start gap-[6px] min-w-[161px]">
              <h1
                className="m-0 self-stretch relative text-inherit tracking-[-1px] leading-[34px] font-medium font-inherit mq450:text-lgi mq450:leading-[27px]"
                style={essentialStyle}
              >
                {essential}
              </h1>
              <div
                className="self-stretch relative text-xs leading-[170%] text-white"
                style={startBuildingYourStyle}
              >
                Start building your insights hub
              </div>
            </div>
          </div>
          <div
            className="self-stretch h-px relative box-border border-t-[1px] border-solid border-whitesmoke"
            style={lineDiv1Style}
          />
        </div>
        <div
          className="w-[171px] flex flex-row items-start justify-start py-0 pr-0.5 pl-0 box-border text-21xl text-white"
          style={frameDiv2Style}
        >
          <div
            className="flex-1 relative tracking-[-1.5px] leading-[120%] font-medium whitespace-nowrap mq450:text-5xl mq450:leading-[29px] mq825:text-13xl mq825:leading-[38px]"
            style={divStyle}
          >
            {prop}
          </div>
          <div
            className="w-[63px] flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border ml-[-65px] text-xs text-neutral-neutral-01"
            style={frameDiv3Style}
          >
            <div
              className="self-stretch flex flex-col items-start justify-start"
              style={frameDiv4Style}
            >
              <div
                className="self-stretch relative leading-[170%]"
                style={perUserStyle}
              >
                /per user
              </div>
              <div
                className="relative leading-[170%] inline-block min-w-[63px]"
                style={perMonthStyle}
              >
                /per month
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full text-lg text-neutral-neutral-03">
        <h3 className="m-0 w-[292px] relative text-inherit leading-[31px] font-medium font-inherit inline-block">
          Includes :
        </h3>
        <div className="self-stretch flex flex-col items-start justify-start gap-[20px] max-w-full text-base">
          <div className="self-stretch flex flex-row items-center justify-start gap-[8px] max-w-full">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0"
              alt=""
              src="/check-15.svg"
            />
            <div className="flex-1 relative leading-[170%] inline-block max-w-[calc(100%_-_24px)]">
              Centralized employee database
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[8px] max-w-full">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0"
              alt=""
              src="/check-15.svg"
            />
            <div className="flex-1 relative leading-[170%] inline-block max-w-[calc(100%_-_24px)]">
              Clock-in/clock-out functionality
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[8px] max-w-full">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0"
              alt=""
              src="/check-15.svg"
            />
            <div className="flex-1 relative leading-[170%] inline-block max-w-[calc(100%_-_24px)]">
              Applicant tracking system (ATS)
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[8px] max-w-full">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0"
              alt=""
              src="/check-15.svg"
            />
            <div className="flex-1 relative leading-[170%] inline-block max-w-[calc(100%_-_24px)]">
              Applicant tracking system (ATS)
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[8px] max-w-full">
            <img
              className="h-4 w-4 relative overflow-hidden shrink-0"
              alt=""
              src="/check-15.svg"
            />
            <div className="flex-1 relative leading-[170%] inline-block max-w-[calc(100%_-_24px)]">
              Learning management system (LMS)
            </div>
          </div>
        </div>
      </div>
      <button
        className="cursor-pointer [border:none] py-3 px-6 bg-theme-colors-color-02 self-stretch rounded-9xl flex flex-row items-start justify-start whitespace-nowrap hover:bg-steelblue"
        style={textStyle}
      >
        <div
          className="flex-1 relative text-base leading-[28px] font-body-16px-regular text-white text-center"
          style={getStartedStyle}
        >
          Get Started
        </div>
      </button>
    </div>
  );
};

export default Content1;
