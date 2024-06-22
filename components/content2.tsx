import type { NextPage } from "next";

export type Content2Type = {
  className?: string;
  fi2879282?: string;
  cadastroSimplificado?: string;
  faciliteAIntegraoDeNovosC?: string;
};

const Content2: NextPage<Content2Type> = ({
  className = "",
  fi2879282,
  cadastroSimplificado,
  faciliteAIntegraoDeNovosC,
}) => {
  return (
    <div
      className={`flex-1 rounded-3xl bg-white flex flex-col items-start justify-start py-16 px-6 box-border gap-[12px] min-w-[294px] max-w-full text-left text-13xl text-neutral-neutral-03 font-body-16px-regular mq450:pt-[42px] mq450:pb-[42px] mq450:box-border ${className}`}
    >
      <div className="self-stretch flex flex-col items-center justify-center py-0 px-[13px] gap-[32px] mq450:gap-[16px]">
        <div className="rounded-2xl bg-theme-colors-color-01 flex flex-row items-start justify-center p-4">
          <img
            className="h-12 w-12 relative overflow-hidden shrink-0"
            loading="lazy"
            alt=""
            src={fi2879282}
          />
        </div>
        <h1 className="m-0 relative text-inherit tracking-[-1px] leading-[45px] font-medium font-inherit mq450:text-lgi mq450:leading-[27px] mq825:text-7xl mq825:leading-[36px]">
          {cadastroSimplificado}
        </h1>
      </div>
      <div className="self-stretch relative text-base leading-[170%] text-neutral-neutral-02 text-center">
        {faciliteAIntegraoDeNovosC}
      </div>
    </div>
  );
};

export default Content2;
