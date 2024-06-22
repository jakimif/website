import type { NextPage } from "next";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: NextPage<FrameComponent6Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-center pt-0 px-5 pb-[104px] box-border max-w-full ${className}`}
    >
      <div className="flex flex-row items-start justify-center gap-[21px] max-w-full mq1400:flex-wrap">
        <div className="rounded-2xl bg-neutral-neutral-01 flex flex-row items-start justify-start py-6 px-8">
          <img
            className="h-12 w-[164px] relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src="/company-logo.svg"
          />
        </div>
        <div className="rounded-2xl bg-neutral-neutral-01 flex flex-row items-start justify-start py-6 px-8">
          <img
            className="h-12 w-[164px] relative overflow-hidden shrink-0"
            alt=""
            src="/company-logo-1.svg"
          />
        </div>
        <div className="rounded-2xl bg-neutral-neutral-01 flex flex-row items-start justify-start py-6 px-8">
          <img
            className="h-12 w-[164px] relative overflow-hidden shrink-0"
            alt=""
            src="/company-logo-2.svg"
          />
        </div>
        <div className="rounded-2xl bg-neutral-neutral-01 flex flex-row items-start justify-start py-6 px-8">
          <img
            className="h-12 w-[164px] relative overflow-hidden shrink-0"
            alt=""
            src="/company-logo-3.svg"
          />
        </div>
        <div className="rounded-2xl bg-neutral-neutral-01 flex flex-row items-start justify-start py-6 px-8">
          <img
            className="h-12 w-[164px] relative overflow-hidden shrink-0"
            alt=""
            src="/company-logo-4.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default FrameComponent6;
