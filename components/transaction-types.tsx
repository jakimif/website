import type { NextPage } from "next";

export type TransactionTypesType = {
  className?: string;
};

const TransactionTypes: NextPage<TransactionTypesType> = ({
  className = "",
}) => {
  return (
    <div
      className={`flex-1 flex flex-col items-start justify-start gap-[12px] min-w-[105px] text-center text-2xs text-gray1-100 font-sf-pro ${className}`}
    >
      <div className="self-stretch rounded-2xl bg-white flex flex-row items-start justify-start pt-5 pb-[18px] pr-[13px] pl-3.5 gap-[10.1px] border-[1px] border-solid border-gray-300">
        <div className="h-[41.7px] w-[41.7px] relative">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] box-border w-full h-full border-[0px] border-solid border-gray-100" />
          <div className="absolute top-[0px] left-[0px] w-full h-full">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] box-border w-full h-full z-[1] border-[0px] border-solid border-yellowgreen" />
            <div className="absolute top-[13.6px] left-[7.9px] tracking-[-0.42px] leading-[15px] font-medium inline-block min-w-[25px] z-[2]">
              69%
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0 text-left text-xs text-gray-500">
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <div className="w-[76px] h-2 relative tracking-[-0.4px] leading-[22px] inline-block">
              Entertainment
            </div>
            <div className="self-stretch h-[11px] relative leading-[22px] font-medium flex items-center whitespace-nowrap text-sm text-gray-400">
              <span className="[line-break:anywhere]">
                <span className="tracking-[1.6px]">$</span>
                <span className="text-base tracking-[-0.4px] text-gray-900">
                  1,536.56
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch rounded-2xl bg-white flex flex-row items-start justify-start pt-5 pb-[18px] pr-[13px] pl-3.5 gap-[10.1px] border-[1px] border-solid border-gray-300">
        <div className="h-[41.7px] w-[41.7px] relative">
          <div className="absolute top-[0px] left-[0px] rounded-[50%] box-border w-full h-full border-[0px] border-solid border-gray-100" />
          <div className="absolute top-[0px] left-[0px] w-full h-full">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] box-border w-full h-full z-[1] border-[0px] border-solid border-yellowgreen" />
            <div className="absolute top-[13.6px] left-[7.9px] tracking-[-0.42px] leading-[15px] font-medium inline-block min-w-[25px] z-[2]">
              40%
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start justify-start pt-[4.5px] px-0 pb-0 text-left text-xs text-gray-500">
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px]">
            <div className="w-[78px] h-2 relative tracking-[-0.4px] leading-[22px] inline-block">
              Transportation
            </div>
            <div className="self-stretch h-[11px] relative leading-[22px] font-medium inline-block whitespace-nowrap text-sm text-gray-400">
              <span className="tracking-[1.6px]">$</span>
              <span className="text-base tracking-[-0.4px] text-gray-900">
                2,914.00
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionTypes;
