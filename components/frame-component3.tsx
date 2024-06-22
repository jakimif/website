import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FrameComponent3Type = {
  className?: string;
  r20k?: string;
  r10k?: string;
  r5k?: string;
  r0?: string;

  /** Style props */
  propMinWidth?: CSSProperties["minWidth"];
  propGap?: CSSProperties["gap"];
  propMinWidth1?: CSSProperties["minWidth"];
  propMinWidth2?: CSSProperties["minWidth"];
  propMinWidth3?: CSSProperties["minWidth"];
  propLeft?: CSSProperties["left"];
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({
  className = "",
  r20k,
  r10k,
  r5k,
  r0,
  propMinWidth,
  propGap,
  propMinWidth1,
  propMinWidth2,
  propMinWidth3,
  propLeft,
}) => {
  const r20kStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
    };
  }, [propGap]);

  const r10kStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth1,
    };
  }, [propMinWidth1]);

  const r5kStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth2,
    };
  }, [propMinWidth2]);

  const r0Style: CSSProperties = useMemo(() => {
    return {
      minWidth: propMinWidth3,
    };
  }, [propMinWidth3]);

  const lineDivStyle: CSSProperties = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[8px] text-left text-xs text-gray-400 font-dm-sans ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start gap-[11px] mq450:flex-wrap">
        <div
          className="relative tracking-[-0.4px] leading-[8px] inline-block min-w-[34px]"
          style={r20kStyle}
        >
          {r20k}
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[192px]">
          <div className="self-stretch h-px relative box-border border-t-[1px] border-dashed border-lightgray-200" />
        </div>
      </div>
      <div
        className="self-stretch flex flex-row items-end justify-start gap-[8px] mq450:flex-wrap"
        style={frameDivStyle}
      >
        <div className="flex flex-col items-start justify-start gap-[32px]">
          <div
            className="h-2 relative tracking-[-0.4px] leading-[14px] inline-block min-w-[31px]"
            style={r10kStyle}
          >
            {r10k}
          </div>
          <div
            className="h-2 relative tracking-[-0.4px] leading-[14px] inline-block min-w-[27px]"
            style={r5kStyle}
          >
            {r5k}
          </div>
          <div
            className="h-2 relative tracking-[-0.4px] leading-[14px] inline-block min-w-[22px] whitespace-nowrap"
            style={r0Style}
          >
            {r0}
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-end pt-0 px-0 pb-[3px] box-border min-w-[197px]">
          <div className="self-stretch flex flex-row items-start justify-start relative">
            <div className="h-[146px] w-2 absolute !m-[0] top-[-38px] left-[54px] rounded-t-2xl rounded-b-none bg-theme-colors-color-02 z-[1]" />
            <div className="h-[109px] flex-1 relative">
              <div
                className="absolute top-[108px] left-[7px] box-border w-[297px] h-px border-t-[1px] border-dashed border-lightgray-200"
                style={lineDivStyle}
              />
              <div className="absolute top-[0px] left-[0px] rounded-t-2xl rounded-b-none bg-theme-colors-color-02 w-2 h-[108px] z-[1]" />
              <div className="absolute top-[14px] left-[110px] rounded-t-2xl rounded-b-none bg-theme-colors-color-02 w-2 h-[94px] z-[1]" />
              <div className="absolute top-[0px] left-[168px] rounded-t-2xl rounded-b-none bg-theme-colors-color-02 w-2 h-[108px] z-[1]" />
              <div className="absolute top-[72px] left-[226px] rounded-t-2xl rounded-b-none bg-theme-colors-color-02 w-2 h-9 z-[1]" />
              <div className="absolute top-[72px] left-[283px] rounded-t-2xl rounded-b-none bg-theme-colors-color-02 w-2 h-9 z-[1]" />
              <div className="absolute top-[42px] left-[8px] rounded-t-2xl rounded-b-none bg-theme-colors-color-01 w-2 h-[66px] z-[2]" />
              <div className="absolute top-[22px] left-[62px] rounded-t-2xl rounded-b-none bg-theme-colors-color-01 w-2 h-[86px] z-[2]" />
              <div className="absolute top-[80px] left-[118px] rounded-t-2xl rounded-b-none bg-theme-colors-color-01 w-2 h-7 z-[2]" />
              <div className="absolute top-[64px] left-[176px] rounded-t-2xl rounded-b-none bg-theme-colors-color-01 w-2 h-11 z-[2]" />
              <div className="absolute top-[42px] left-[234px] rounded-t-2xl rounded-b-none bg-theme-colors-color-01 w-2 h-[66px] z-[2]" />
              <div className="absolute top-[42px] left-[291px] rounded-t-2xl rounded-b-none bg-theme-colors-color-01 w-2 h-[66px] z-[2]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent3;
