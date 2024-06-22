import type { NextPage } from "next";

export type GlobalPresenceType = {
  className?: string;
};

const GlobalPresence: NextPage<GlobalPresenceType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[104px] box-border max-w-full text-left text-13xl text-neutral-neutral-03 font-body-16px-regular mq825:pb-[68px] mq825:box-border ${className}`}
    >
      <div className="w-[1224px] flex flex-row items-start justify-center gap-[24px] max-w-full mq1125:flex-wrap">
        <div className="flex-1 flex flex-col items-start justify-start pt-[18.5px] px-0 pb-0 box-border min-w-[294px] max-w-full text-29xl">
          <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full mq450:gap-[20px]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
              <h1 className="m-0 self-stretch relative text-inherit tracking-[-2px] leading-[130%] font-medium font-inherit mq450:text-10xl mq450:leading-[37px] mq825:text-19xl mq825:leading-[50px]">
                A management platform to help you succeed
              </h1>
              <div className="w-[345px] relative text-base leading-[170%] text-neutral-neutral-02 inline-block max-w-full">
                Simplify your workforce's time management with our intuitive HR
                Management.
              </div>
            </div>
            <button className="cursor-pointer [border:none] py-3 px-6 bg-theme-colors-color-02 w-[168px] rounded-9xl flex flex-row items-start justify-start box-border whitespace-nowrap hover:bg-steelblue">
              <div className="flex-1 relative text-base leading-[28px] font-body-16px-regular text-white text-center">
                Book a Demo
              </div>
            </button>
          </div>
        </div>
        <div className="flex-[0.8776] rounded-3xl bg-theme-colors-color-01 flex flex-col items-start justify-start p-6 box-border gap-[24px] min-w-[294px] max-w-full mq450:pt-5 mq450:pb-5 mq450:box-border mq450:flex-1">
          <div className="flex flex-row items-start justify-start py-0 px-[63px] mq450:pl-5 mq450:pr-5 mq450:box-border">
            <div className="relative tracking-[-1px] leading-[45px] font-medium mq450:text-lgi mq450:leading-[27px] mq825:text-7xl mq825:leading-[36px]">
              160+ countries
            </div>
          </div>
          <form className="m-0 self-stretch overflow-hidden flex flex-col items-start justify-start pt-0 px-0 pb-1.5 box-border gap-[8px] max-w-full">
            <div className="ml-[-88px] w-[472px] flex flex-row items-start justify-start gap-[8px] max-w-[138%] shrink-0 mq825:flex-wrap">
              <div className="flex-1 rounded-lg bg-white flex flex-row items-start justify-start p-2 box-border gap-[8px] min-w-[88px] max-w-[112px]">
                <img
                  className="self-stretch w-8 relative rounded-sm max-h-full overflow-hidden shrink-0 object-contain min-h-[24px]"
                  alt=""
                  src="/gw--guineabissau@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="self-stretch relative text-xs leading-[170%] font-body-16px-regular text-gray-900 text-left">
                    Argentina
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-lg bg-white flex flex-row items-start justify-start p-2 box-border gap-[8px] min-w-[88px] max-w-[112px]">
                <img
                  className="self-stretch w-8 relative rounded-sm max-h-full overflow-hidden shrink-0 object-contain min-h-[24px]"
                  alt=""
                  src="/gw--guineabissau@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="self-stretch relative text-xs leading-[170%] font-body-16px-regular text-gray-900 text-left">
                    Guinea
                  </div>
                </div>
              </div>
              <button className="cursor-pointer [border:none] p-2 bg-white flex-1 rounded-lg flex flex-row items-start justify-start box-border gap-[8px] min-w-[88px] max-w-[112px]">
                <img
                  className="self-stretch w-8 relative rounded-sm max-h-full overflow-hidden shrink-0 object-contain min-h-[24px]"
                  alt=""
                  src="/gbsct--scotland@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="self-stretch relative text-xs leading-[170%] font-body-16px-regular text-gray-900 text-left">
                    Scotland
                  </div>
                </div>
              </button>
              <div className="flex-1 rounded-lg bg-white flex flex-row items-start justify-start p-2 box-border gap-[8px] min-w-[88px] max-w-[112px]">
                <img
                  className="self-stretch w-8 relative rounded-sm max-h-full overflow-hidden shrink-0 object-contain min-h-[24px]"
                  alt=""
                  src="/ec--ecuador@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="self-stretch relative text-xs leading-[170%] font-body-16px-regular text-gray-900 text-left">
                    Ecuador
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-[-19px] w-[432px] flex flex-row items-start justify-start gap-[8px] max-w-[126%] shrink-0 mq450:flex-wrap">
              <div className="rounded-lg bg-white flex flex-row items-start justify-start p-2 gap-[8px]">
                <img
                  className="self-stretch w-8 relative rounded-sm max-h-full overflow-hidden shrink-0 object-contain min-h-[24px]"
                  alt=""
                  src="/europe@2x.png"
                />
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="relative text-xs leading-[170%] font-body-16px-regular text-gray-900 text-left inline-block min-w-[42px]">
                    Europe
                  </div>
                </div>
              </div>
              <button className="cursor-pointer [border:none] p-2 bg-white flex-1 rounded-lg flex flex-row items-start justify-start box-border gap-[8px] min-w-[62px]">
                <img
                  className="self-stretch w-8 relative rounded-sm max-h-full overflow-hidden shrink-0 object-contain min-h-[24px]"
                  alt=""
                  src="/br--brazil@2x.png"
                />
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="relative text-xs leading-[170%] font-body-16px-regular text-gray-900 text-left inline-block min-w-[32px]">
                    Brazil
                  </div>
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-2 bg-white rounded-lg flex flex-row items-start justify-start gap-[8px]">
                <img
                  className="self-stretch w-8 relative rounded-sm max-h-full overflow-hidden shrink-0 object-contain min-h-[24px]"
                  alt=""
                  src="/ro--romania@2x.png"
                />
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="relative text-xs leading-[170%] font-body-16px-regular text-gray-900 text-left inline-block min-w-[51px]">
                    Romania
                  </div>
                </div>
              </button>
              <div className="flex-1 rounded-lg bg-white flex flex-row items-start justify-start p-2 box-border gap-[8px] min-w-[70px]">
                <img
                  className="self-stretch w-8 relative rounded-sm max-h-full overflow-hidden shrink-0 object-contain min-h-[24px]"
                  alt=""
                  src="/vn--vietnam@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="self-stretch h-5 relative text-xs leading-[170%] font-body-16px-regular text-gray-900 text-left inline-block">
                    Romania
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[435px] flex flex-row items-start justify-start gap-[8px] max-w-[127%] shrink-0 mq450:flex-wrap">
              <button className="cursor-pointer [border:none] p-2 bg-white rounded-lg flex flex-row items-start justify-start gap-[8px]">
                <img
                  className="self-stretch w-8 relative rounded-sm max-h-full overflow-hidden shrink-0 object-contain min-h-[24px]"
                  alt=""
                  src="/ca--canada@2x.png"
                />
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="relative text-xs leading-[170%] font-body-16px-regular text-gray-900 text-left inline-block min-w-[46px]">
                    Canada
                  </div>
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-2 bg-white rounded-lg flex flex-row items-start justify-start gap-[8px]">
                <img
                  className="self-stretch w-8 relative rounded-sm max-h-full overflow-hidden shrink-0 object-contain min-h-[24px]"
                  alt=""
                  src="/be--belgium@2x.png"
                />
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="relative text-xs leading-[170%] font-body-16px-regular text-gray-900 text-left inline-block min-w-[49px]">
                    Belgium
                  </div>
                </div>
              </button>
              <button className="cursor-pointer [border:none] p-2 bg-white flex-1 rounded-lg flex flex-row items-start justify-start box-border gap-[8px] min-w-[60px]">
                <img
                  className="self-stretch w-8 relative rounded-sm max-h-full overflow-hidden shrink-0 object-contain min-h-[24px]"
                  alt=""
                  src="/cu--cuba@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="self-stretch relative text-xs leading-[170%] font-body-16px-regular text-gray-900 text-left">
                    Cuba
                  </div>
                </div>
              </button>
              <div className="flex-1 rounded-lg bg-white flex flex-row items-start justify-start p-2 box-border gap-[8px] min-w-[73px]">
                <img
                  className="self-stretch w-8 relative rounded-sm max-h-full overflow-hidden shrink-0 object-contain min-h-[24px]"
                  alt=""
                  src="/ar--argentina@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="self-stretch h-5 relative text-xs leading-[170%] font-body-16px-regular text-gray-900 text-left inline-block">
                    Argentina
                  </div>
                </div>
              </div>
            </div>
            <div className="ml-[-64px] w-[444px] flex flex-row items-start justify-start gap-[8px] max-w-[130%] shrink-0 mq450:flex-wrap">
              <div className="flex-1 rounded-lg bg-white flex flex-row items-start justify-start p-2 box-border gap-[8px] min-w-[73px]">
                <img
                  className="self-stretch w-8 relative rounded-sm max-h-full overflow-hidden shrink-0 object-contain min-h-[24px]"
                  alt=""
                  src="/mm--myanmar@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="self-stretch relative text-xs leading-[170%] font-body-16px-regular text-gray-900 text-left">
                    Myanmar
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-lg bg-white flex flex-row items-start justify-start p-2 box-border gap-[8px] min-w-[68px]">
                <img
                  className="self-stretch w-8 relative rounded-sm max-h-full overflow-hidden shrink-0 object-contain min-h-[24px]"
                  alt=""
                  src="/ky--cayman-islands@2x.png"
                />
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="relative text-xs leading-[170%] font-body-16px-regular text-gray-900 text-left inline-block min-w-[49px]">
                    Cayman
                  </div>
                </div>
              </div>
              <div className="rounded-lg bg-white flex flex-row items-start justify-start p-2 gap-[8px]">
                <img
                  className="self-stretch w-8 relative rounded-sm max-h-full overflow-hidden shrink-0 object-contain min-h-[24px]"
                  alt=""
                  src="/qa--qatar@2x.png"
                />
                <div className="flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="relative text-xs leading-[170%] font-body-16px-regular text-gray-900 text-left inline-block min-w-[35px]">
                    Qatar
                  </div>
                </div>
              </div>
              <div className="flex-1 rounded-lg bg-white flex flex-row items-start justify-start p-2 box-border gap-[8px] min-w-[73px]">
                <img
                  className="self-stretch w-8 relative rounded-sm max-h-full overflow-hidden shrink-0 object-contain min-h-[24px]"
                  alt=""
                  src="/hn--honduras@2x.png"
                />
                <div className="flex-1 flex flex-col items-start justify-start pt-0.5 px-0 pb-0">
                  <div className="self-stretch relative text-xs leading-[170%] font-body-16px-regular text-gray-900 text-left">
                    Honduras
                  </div>
                </div>
              </div>
            </div>
          </form>
          <div className="self-stretch relative text-base leading-[170%] text-center">
            Putting our customers at the heart of everything we do, we strive.
          </div>
        </div>
        <div className="flex-[0.8776] rounded-3xl bg-theme-colors-color-02 flex flex-col items-start justify-start p-6 box-border gap-[24px] min-w-[294px] max-w-full text-white mq450:pt-5 mq450:pb-5 mq450:box-border mq450:flex-1">
          <div className="flex flex-row items-start justify-start py-0 px-[35px]">
            <h1 className="m-0 relative text-inherit tracking-[-1px] leading-[45px] font-medium font-inherit mq450:text-lgi mq450:leading-[27px] mq825:text-7xl mq825:leading-[36px]">
              12M secured users
            </h1>
          </div>
          <img
            className="self-stretch h-[190px] relative max-w-full overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/frame-814.svg"
          />
          <div className="self-stretch relative text-base leading-[170%] text-neutral-neutral-01 text-center">
            Putting our customers at the heart of everything we do, we strive.
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalPresence;
