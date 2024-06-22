import type { NextPage } from "next";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <footer
      className={`self-stretch rounded-tl-3xl rounded-tr-2xl rounded-b-none bg-theme-colors-color-01 flex flex-row items-end justify-center py-20 px-5 box-border min-h-[629px] max-w-full mt-[-250px] text-left text-base text-neutral-neutral-03 font-body-16px-regular mq450:pt-20 mq450:pb-[52px] mq450:box-border ${className}`}
    >
      <div className="h-[629px] w-[1440px] relative rounded-tl-3xl rounded-tr-2xl rounded-b-none bg-theme-colors-color-01 hidden max-w-full" />
      <div className="w-[1224px] flex flex-row items-start justify-between max-w-full gap-[20px] z-[1] mq1125:flex-wrap mq1125:justify-center">
        <div className="w-72 flex flex-col items-start justify-start gap-[55px] mq450:gap-[27px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
            <img
              className="w-[99.3px] h-10 relative object-contain"
              loading="lazy"
              alt=""
              src="/group-163133@2x.png"
            />
            <div className="self-stretch relative leading-[170%]">
              Comece a construir seu hub de insights com análises leves.
            </div>
          </div>
          <div className="flex flex-row items-start justify-start gap-[16px]">
            <img
              className="h-[28.1px] w-[28.1px] relative overflow-hidden shrink-0 min-h-[28px]"
              loading="lazy"
              alt=""
              src="/fi-2175193.svg"
            />
            <img
              className="h-[28.1px] w-[28.1px] relative overflow-hidden shrink-0 min-h-[28px]"
              loading="lazy"
              alt=""
              src="/fi-5969020.svg"
            />
            <img
              className="h-[28.1px] w-[28.1px] relative overflow-hidden shrink-0 min-h-[28px]"
              loading="lazy"
              alt=""
              src="/fi-12105338.svg"
            />
            <input
              className="m-0 h-[28.1px] w-[28.1px] relative overflow-hidden shrink-0 min-h-[28px]"
              type="checkbox"
            />
            <img
              className="h-[28.1px] w-[28.1px] relative overflow-hidden shrink-0 min-h-[28px]"
              loading="lazy"
              alt=""
              src="/fi-5968991.svg"
            />
          </div>
        </div>
        <div className="w-[488px] flex flex-row items-start justify-start gap-[88px] max-w-full mq450:flex-wrap mq825:gap-[44px]">
          <div className="flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[78px]">
            <div className="self-stretch relative leading-[170%] font-medium">
              Products
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch relative leading-[170%]">
                Features
              </div>
              <div className="self-stretch relative leading-[170%]">
                Integrations
              </div>
              <div className="self-stretch relative leading-[170%]">FAQs</div>
              <div className="self-stretch relative leading-[170%]">
                Resources
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[78px]">
            <div className="self-stretch relative leading-[170%] font-medium">
              Company
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch relative leading-[170%]">About</div>
              <div className="self-stretch relative leading-[170%]">Blogs</div>
              <div className="self-stretch relative leading-[170%]">
                Careers
              </div>
              <div className="self-stretch relative leading-[170%]">
                Contact
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[20px] min-w-[78px]">
            <div className="self-stretch relative leading-[170%] font-medium">
              Legal
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px]">
              <div className="self-stretch relative leading-[170%]">
                Privacy
              </div>
              <div className="self-stretch relative leading-[170%]">
                Conditions
              </div>
              <div className="self-stretch relative leading-[170%]">FAQs</div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent;
