import type { NextPage } from "next";

export type GroupComponentType = {
  className?: string;
};

const GroupComponent: NextPage<GroupComponentType> = ({ className = "" }) => {
  return (
    <div
      className={`h-[178px] flex-[0.8272] rounded-2xl bg-white box-border flex flex-col items-start justify-start pt-4 pb-[149px] pr-[11px] pl-[15px] gap-[32.8px] min-w-[105px] text-left text-lg text-gray1-100 font-sf-pro border-[1px] border-solid border-gray-300 mq450:flex-1 ${className}`}
    >
      <div className="w-[162px] h-[178px] relative rounded-2xl bg-white box-border hidden border-[1px] border-solid border-gray-300" />
      <div className="self-stretch flex flex-row items-start justify-between gap-[20px]">
        <div className="relative tracking-[-0.4px] leading-[13px] font-medium inline-block min-w-[61px] z-[1]">
          Dec’23
        </div>
        <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0 text-sm text-gray-600">
          <div className="h-2.5 relative tracking-[-0.4px] leading-[22px] inline-block min-w-[43px] z-[1]">
            See All
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-start justify-start py-0 pr-2.5 pl-1.5 text-center text-5xl text-gray-700">
        <div className="flex-1 flex flex-col items-end justify-start pt-[35.2px] pb-[30.3px] pr-[26px] pl-[25px] relative gap-[10px]">
          <div className="w-full h-full absolute !m-[0] top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full max-h-full z-[1] flex items-center justify-center">
            <img
              className="w-full h-full overflow-hidden z-[1] object-contain absolute left-[0px] top-[-3px] [transform:scale(1.115)]"
              alt=""
              src="/ring-1.svg"
            />
          </div>
          <div className="flex flex-row items-start justify-end py-0 pr-1.5 pl-[7px]">
            <b className="w-[53px] relative tracking-[-0.4px] leading-[17px] inline-block min-w-[53px] z-[2] mq450:text-lgi mq450:leading-[22px]">
              48%
            </b>
          </div>
          <div className="self-stretch relative text-sm tracking-[-0.4px] leading-[6px] text-gray-400 z-[2]">
            <p className="[margin-block-start:0] [margin-block-end:10.13px]">
              Remaining
            </p>
            <p className="m-0">Budget</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupComponent;
