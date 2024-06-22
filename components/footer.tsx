import type { NextPage } from "next";

export type FooterType = {
  className?: string;
};

const Footer: NextPage<FooterType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[104px] box-border max-w-full text-left text-29xl text-neutral-neutral-03 font-body-16px-regular mq825:pb-[68px] mq825:box-border ${className}`}
    >
      <div className="w-[1224px] flex flex-col items-start justify-start gap-[56px] max-w-full mq825:gap-[28px]">
        <h1 className="m-0 w-[496px] relative text-inherit tracking-[-2px] leading-[130%] font-medium font-inherit inline-block max-w-full mq450:text-10xl mq450:leading-[37px] mq825:text-19xl mq825:leading-[50px]">
          <p className="m-0">See Common</p>
          <p className="m-0">Question and Answer</p>
        </h1>
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full text-xl">
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[390px] max-w-full mq825:min-w-full">
            <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full">
              <div className="self-stretch rounded-2xl bg-neutral-neutral-01 flex flex-row items-center justify-between p-4 box-border max-w-full gap-[20px]">
                <h2 className="m-0 w-96 relative text-inherit leading-[170%] font-semibold font-inherit inline-block shrink-0 max-w-[calc(100%_-_44px)] mq450:text-base mq450:leading-[27px]">
                  How secure is my financial data on your platform?
                </h2>
                <img
                  className="h-6 w-6 relative overflow-hidden shrink-0"
                  alt=""
                  src="/remove-circle.svg"
                />
              </div>
              <div className="self-stretch relative text-base leading-[170%] text-neutral-neutral-02">
                We take the security and privacy of your financial data very
                seriously. Our platform employs industry-standard encryption
                protocols to safeguard your information during transmission and
                storage.
              </div>
            </div>
            <div className="self-stretch rounded-2xl bg-neutral-neutral-01 flex flex-row items-center justify-between p-4 box-border max-w-full gap-[20px]">
              <h2 className="m-0 w-[432px] relative text-inherit leading-[170%] font-semibold font-inherit inline-block shrink-0 max-w-[calc(100%_-_44px)] mq450:text-base mq450:leading-[27px]">
                Can I use your Financial Management Software on multiple
                devices?
              </h2>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/add-circle.svg"
              />
            </div>
            <div className="self-stretch rounded-2xl bg-neutral-neutral-01 flex flex-row items-center justify-between py-8 px-4 box-border max-w-full gap-[20px]">
              <h2 className="m-0 w-[432px] relative text-inherit leading-[170%] font-semibold font-inherit inline-block shrink-0 max-w-[calc(100%_-_44px)] mq450:text-base mq450:leading-[27px]">
                What happens if I forget my password?
              </h2>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/add-circle.svg"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start gap-[16px] min-w-[390px] max-w-full mq825:min-w-full">
            <div className="self-stretch rounded-2xl bg-neutral-neutral-01 flex flex-row items-center justify-between p-4 box-border max-w-full gap-[20px]">
              <h2 className="m-0 w-[432px] relative text-inherit leading-[170%] font-semibold font-inherit inline-block shrink-0 max-w-[calc(100%_-_44px)] mq450:text-base mq450:leading-[27px]">
                Can I customize the categories for my expenses and income?
              </h2>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/add-circle.svg"
              />
            </div>
            <div className="self-stretch rounded-2xl bg-neutral-neutral-01 flex flex-row items-center justify-between p-4 box-border max-w-full gap-[20px]">
              <input
                className="w-[432px] [border:none] [outline:none] font-semibold font-body-16px-regular text-xl bg-[transparent] h-[68px] relative leading-[170%] text-neutral-neutral-03 text-left inline-block max-w-[calc(100%_-_44px)] p-0 mq450:text-base mq450:leading-[27px]"
                placeholder="Are there any hidden fees in your pricing plans?"
                type="text"
              />
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/add-circle.svg"
              />
            </div>
            <div className="self-stretch rounded-2xl bg-neutral-neutral-01 flex flex-row items-center justify-between p-4 box-border max-w-full gap-[20px]">
              <h2 className="m-0 w-[432px] relative text-inherit leading-[170%] font-semibold font-inherit inline-block shrink-0 max-w-[calc(100%_-_44px)] mq450:text-base mq450:leading-[27px]">
                How secure is my financial data within the platform?
              </h2>
              <img
                className="h-6 w-6 relative overflow-hidden shrink-0"
                alt=""
                src="/add-circle.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
