import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type FeaturesIntroType = {
  className?: string;
  gerenciamentoSeguroDeTran?: string;
  assegureAIntegridadeEASeg?: string;
  check?: string;
  garantaASeguranaDeTodasAs?: string;
  check1?: string;
  acompanheEVerifiqueCadaTr?: string;
  check2?: string;
  mantenhaSeEmConformidadeC?: string;

  /** Style props */
  propColor?: CSSProperties["color"];
  propColor1?: CSSProperties["color"];
  propBackgroundColor?: CSSProperties["backgroundColor"];
  propColor2?: CSSProperties["color"];
  propBackgroundColor1?: CSSProperties["backgroundColor"];
  propColor3?: CSSProperties["color"];
  propBackgroundColor2?: CSSProperties["backgroundColor"];
  propColor4?: CSSProperties["color"];
};

const FeaturesIntro: NextPage<FeaturesIntroType> = ({
  className = "",
  gerenciamentoSeguroDeTran,
  assegureAIntegridadeEASeg,
  check,
  garantaASeguranaDeTodasAs,
  check1,
  acompanheEVerifiqueCadaTr,
  check2,
  mantenhaSeEmConformidadeC,
  propColor,
  propColor1,
  propBackgroundColor,
  propColor2,
  propBackgroundColor1,
  propColor3,
  propBackgroundColor2,
  propColor4,
}) => {
  const gerenciamentoSeguroDeStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  const assegureAIntegridadeStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor1,
    };
  }, [propColor1]);

  const benefitCheckStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor,
    };
  }, [propBackgroundColor]);

  const garantaASeguranaStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor2,
    };
  }, [propColor2]);

  const benefitCheck1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor1,
    };
  }, [propBackgroundColor1]);

  const acompanheEVerifiqueStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor3,
    };
  }, [propColor3]);

  const benefitCheck2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: propBackgroundColor2,
    };
  }, [propBackgroundColor2]);

  const mantenhaSeEmConformidadeStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor4,
    };
  }, [propColor4]);

  return (
    <div
      className={`w-[520px] flex flex-col items-start justify-end pt-0 px-0 pb-[18px] box-border min-w-[520px] max-w-full text-left text-29xl text-theme-colors-color-05 font-body-16px-regular mq825:min-w-full mq1400:flex-1 ${className}`}
    >
      <div className="self-stretch flex flex-col items-start justify-start gap-[40px] max-w-full z-[1] mq825:gap-[20px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px] max-w-full">
          <h1
            className="m-0 self-stretch relative text-inherit tracking-[-2px] leading-[130%] font-medium font-inherit mq450:text-10xl mq450:leading-[37px] mq825:text-19xl mq825:leading-[50px]"
            style={gerenciamentoSeguroDeStyle}
          >
            {gerenciamentoSeguroDeTran}
          </h1>
          <div
            className="w-[407px] relative text-base leading-[170%] inline-block max-w-full"
            style={assegureAIntegridadeStyle}
          >
            {assegureAIntegridadeEASeg}
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full text-base">
          <div className="self-stretch flex flex-row items-center justify-start gap-[12px] max-w-full mq825:flex-wrap">
            <div
              className="h-6 w-6 rounded-3xl bg-theme-colors-color-05 flex flex-row items-center justify-start p-1 box-border"
              style={benefitCheckStyle}
            >
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0"
                alt=""
                src={check}
              />
            </div>
            <div
              className="flex-1 relative leading-[170%] inline-block min-w-[315px] max-w-full"
              style={garantaASeguranaStyle}
            >
              {garantaASeguranaDeTodasAs}
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[12px] max-w-full mq825:flex-wrap">
            <div
              className="h-6 w-6 rounded-3xl bg-theme-colors-color-05 flex flex-row items-center justify-start p-1 box-border"
              style={benefitCheck1Style}
            >
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0"
                alt=""
                src={check1}
              />
            </div>
            <div
              className="flex-1 relative leading-[170%] inline-block min-w-[315px] max-w-full"
              style={acompanheEVerifiqueStyle}
            >
              {acompanheEVerifiqueCadaTr}
            </div>
          </div>
          <div className="self-stretch flex flex-row items-center justify-start gap-[12px] max-w-full mq825:flex-wrap">
            <div
              className="h-6 w-6 rounded-3xl bg-theme-colors-color-05 flex flex-row items-center justify-start p-1 box-border"
              style={benefitCheck2Style}
            >
              <img
                className="h-4 w-4 relative overflow-hidden shrink-0"
                alt=""
                src={check2}
              />
            </div>
            <div
              className="flex-1 relative leading-[170%] inline-block min-w-[315px] max-w-full"
              style={mantenhaSeEmConformidadeStyle}
            >
              {mantenhaSeEmConformidadeC}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturesIntro;
