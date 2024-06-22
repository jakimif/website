import type { NextPage } from "next";

export type FrameComponent10Type = {
  className?: string;
};

const FrameComponent10: NextPage<FrameComponent10Type> = ({
  className = "",
}) => {
  return (
    <header
      className={`self-stretch flex flex-row items-start justify-center pt-0 pb-[82px] pr-[52px] pl-5 box-border max-w-full text-center text-base text-neutral-neutral-03 font-body-16px-regular mq1400:pr-[26px] mq1400:box-border ${className}`}
    >
      <div className="w-[1187.9px] flex flex-row items-start justify-between gap-[20px] max-w-full">
        <div className="w-[105.9px] flex flex-col items-start justify-start pt-1.5 px-0 pb-0 box-border">
          <img
            className="self-stretch h-10 relative max-w-full overflow-hidden shrink-0 object-cover"
            loading="lazy"
            alt=""
            src="/group-163134@2x.png"
          />
        </div>
        <div className="w-[734px] flex flex-row items-start justify-start gap-[50px] shrink-0 max-w-full mq825:gap-[25px]">
          <div className="flex-1 flex flex-col items-start justify-start pt-[12.5px] px-0 pb-0 box-border max-w-full">
            <div className="self-stretch flex flex-row items-start justify-start gap-[11.5px]">
              <div className="flex-1 relative leading-[170%]">Início</div>
              <div className="h-[19.5px] flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0 box-border">
                <div className="w-px h-[13px] relative box-border border-r-[1px] border-solid border-darkslategray-100" />
              </div>
              <div className="flex-1 relative leading-[170%]">Soluções</div>
              <div className="h-[19.5px] flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0 box-border">
                <div className="w-px h-[13px] relative box-border border-r-[1px] border-solid border-darkslategray-100" />
              </div>
              <div className="flex-1 relative leading-[170%]">Features</div>
              <div className="h-[19.5px] flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0 box-border">
                <div className="w-px h-[13px] relative box-border border-r-[1px] border-solid border-darkslategray-100" />
              </div>
              <div className="flex-1 relative leading-[170%] inline-block min-w-[80px]">
                Resources
              </div>
              <div className="h-[19.5px] flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0 box-border">
                <div className="w-px h-[13px] relative box-border border-r-[1px] border-solid border-darkslategray-100" />
              </div>
              <div className="flex-1 relative leading-[170%]">Pricing</div>
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-3 px-6 bg-theme-colors-color-02 w-[188px] rounded-9xl flex flex-row items-start justify-start box-border gap-[8px]">
            <div className="flex-1 relative text-base leading-[28px] font-body-16px-regular text-white text-center inline-block min-w-[108px] whitespace-nowrap">
              Fale conosco
            </div>
            <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
              <img
                className="w-6 h-6 relative overflow-hidden shrink-0"
                alt=""
                src="/east.svg"
              />
            </div>
          </button>
        </div>
      </div>
    </header>
  );
};

export default FrameComponent10;
