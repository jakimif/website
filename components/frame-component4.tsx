import type { NextPage } from "next";
import GroupComponent from "./group-component";
import TransactionTypes from "./transaction-types";

export type FrameComponent4Type = {
  className?: string;
};

const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end py-0 px-4 box-border max-w-full text-left text-lg text-gray1-100 font-sf-pro ${className}`}
    >
      <div className="flex-1 rounded-3xl bg-theme-colors-color-02 flex flex-row items-end justify-between pt-[69px] px-[92px] pb-[54px] box-border max-w-full gap-[20px] mq825:pt-[45px] mq825:px-[23px] mq825:pb-[35px] mq825:box-border mq1400:flex-wrap mq1400:pl-[46px] mq1400:pr-[46px] mq1400:box-border">
        <div className="h-[670px] w-[1408px] relative rounded-3xl bg-theme-colors-color-02 hidden max-w-full" />
        <div className="w-[498px] flex flex-col items-start justify-end pt-0 px-0 pb-[15px] box-border min-w-[498px] max-w-full mq825:min-w-full mq1400:flex-1">
          <div className="self-stretch rounded-3xl bg-palegreen flex flex-row items-start justify-start p-14 box-border max-w-full z-[1] mq825:py-9 mq825:px-7 mq825:box-border">
            <div className="flex-1 rounded-2xl bg-white box-border flex flex-col items-start justify-start py-[22px] px-[23px] gap-[16px] max-w-full border-[1px] border-solid border-darkgray mq450:pt-5 mq450:pb-5 mq450:box-border">
              <div className="self-stretch flex flex-row items-start justify-start gap-[15px] mq450:flex-wrap">
                <GroupComponent />
                <TransactionTypes />
              </div>
              <div className="self-stretch flex flex-row items-start justify-start gap-[15px] mq450:flex-wrap">
                <TransactionTypes />
                <GroupComponent />
              </div>
            </div>
          </div>
        </div>
        <div className="w-[520px] flex flex-col items-start justify-start gap-[40px] min-w-[520px] max-w-full z-[1] text-29xl text-white font-body-16px-regular mq825:gap-[20px] mq825:min-w-full mq1400:flex-1">
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full">
            <h1 className="m-0 self-stretch relative text-inherit tracking-[-2px] leading-[130%] font-medium font-inherit mq450:text-10xl mq450:leading-[37px] mq825:text-19xl mq825:leading-[50px]">
              Auditoria Instantânea de Transações
            </h1>
            <div className="w-[407px] relative text-base leading-[170%] inline-block max-w-full">
              Mantenha a integridade e a conformidade das suas operações com
              transações completamente auditáveis e transparentes
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full text-base">
            <div className="self-stretch flex flex-row items-center justify-start gap-[12px] max-w-full mq825:flex-wrap">
              <div className="h-6 w-6 rounded-3xl bg-theme-colors-color-01 flex flex-row items-center justify-start p-1 box-border">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0"
                  alt=""
                  src="/check-9.svg"
                />
              </div>
              <div className="flex-1 relative leading-[170%] inline-block min-w-[315px] max-w-full">
                Monitore cada transação para garantir a rastreabilidade
                completa.
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[12px] max-w-full mq825:flex-wrap">
              <div className="h-6 w-6 rounded-3xl bg-theme-colors-color-01 flex flex-row items-center justify-start p-1 box-border">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0"
                  alt=""
                  src="/check-9.svg"
                />
              </div>
              <div className="flex-1 relative leading-[170%] inline-block min-w-[315px] max-w-full">
                Atenda às exigências regulatórias com um sistema de auditoria
                robusto e confiável.
              </div>
            </div>
            <div className="self-stretch flex flex-row items-center justify-start gap-[12px] max-w-full mq825:flex-wrap">
              <div className="h-6 w-6 rounded-3xl bg-theme-colors-color-01 flex flex-row items-center justify-start p-1 box-border">
                <img
                  className="h-4 w-4 relative overflow-hidden shrink-0"
                  alt=""
                  src="/check-9.svg"
                />
              </div>
              <div className="flex-1 relative leading-[170%] inline-block min-w-[315px] max-w-full">
                Acesse um histórico detalhado de todas as operações para
                auditorias internas e externas.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
