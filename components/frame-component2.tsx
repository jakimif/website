import type { NextPage } from "next";
import FeaturesIntro from "./features-intro";
import FrameComponent3 from "./frame-component3";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 px-4 pb-[104px] box-border max-w-full text-left text-base text-gray-400 font-dm-sans mq450:pb-11 mq450:box-border mq825:pb-[68px] mq825:box-border ${className}`}
    >
      <div className="flex-1 rounded-3xl bg-theme-colors-color-01 flex flex-row items-end justify-between py-[69px] px-[92px] box-border max-w-full gap-[20px] mq825:py-[45px] mq825:px-[23px] mq825:box-border mq1400:flex-wrap mq1400:pl-[46px] mq1400:pr-[46px] mq1400:box-border">
        <div className="h-[670px] w-[1408px] relative rounded-3xl bg-theme-colors-color-01 hidden max-w-full" />
        <FeaturesIntro
          gerenciamentoSeguroDeTran="Relatórios e análises customizaveis"
          assegureAIntegridadeEASeg="Obtenha insights poderosos e detalhados com relatórios e análises ajustáveis às suas necessidades."
          check="/check-12.svg"
          garantaASeguranaDeTodasAs="Crie relatórios adaptados aos requisitos exclusivos do seu negócio."
          check1="/check-12.svg"
          acompanheEVerifiqueCadaTr="Acesse análises profundas para uma compreensão clara dos dados financeiros."
          check2="/check-12.svg"
          mantenhaSeEmConformidadeC="Modifique e ajuste relatórios em tempo real para atender a novos cenários."
          propColor="#142249"
          propColor1="#142249"
          propBackgroundColor="#142249"
          propColor2="#142249"
          propBackgroundColor1="#142249"
          propColor3="#142249"
          propBackgroundColor2="#142249"
          propColor4="#142249"
        />
        <div className="w-[498px] rounded-3xl bg-darkslategray-300 flex flex-row items-start justify-start py-[100px] px-14 box-border min-w-[498px] max-w-full z-[1] mq825:py-[65px] mq825:px-7 mq825:box-border mq825:min-w-full mq1400:flex-1">
          <div className="flex-1 rounded-2xl bg-white box-border flex flex-col items-start justify-start py-[22px] pr-[11px] pl-[23px] relative gap-[40px] max-w-full border-[1px] border-solid border-darkgray mq450:gap-[20px]">
            <div className="self-stretch flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
              <div className="flex flex-col items-start justify-start gap-[5px]">
                <div className="relative tracking-[-0.4px] leading-[22px] inline-block min-w-[70px]">
                  Despesas
                </div>
                <div className="relative text-9xl tracking-[-0.4px] leading-[22px] font-medium text-gray-900 whitespace-nowrap mq450:text-3xl mq450:leading-[18px]">
                  R$ 250.560,0
                </div>
              </div>
              <div className="flex flex-col items-start justify-start pt-[7.5px] px-0 pb-0">
                <img
                  className="w-8 h-8 relative"
                  alt=""
                  src="/mastercard.svg"
                />
              </div>
            </div>
            <div className="w-[297px] h-px absolute !m-[0] right-[21px] bottom-[136px] box-border border-t-[1px] border-dashed border-lightgray-200" />
            <div className="w-[297px] h-px absolute !m-[0] right-[20px] bottom-[96px] box-border border-t-[1px] border-dashed border-lightgray-200" />
            <div className="w-[342px] flex flex-col items-end justify-start gap-[21px] max-w-full text-xs">
              <div className="self-stretch flex flex-row items-start justify-end pt-0 pb-[11px] pr-px pl-0 box-border max-w-full">
                <div className="flex-1 flex flex-row items-start justify-start gap-[11px] max-w-full mq450:flex-wrap">
                  <div className="relative tracking-[-0.4px] leading-[8px] inline-block min-w-[34px]">
                    R$30k
                  </div>
                  <div className="flex-1 flex flex-col items-start justify-start pt-1 px-0 pb-0 box-border min-w-[192px]">
                    <div className="self-stretch h-px relative box-border border-t-[1px] border-dashed border-lightgray-200" />
                  </div>
                </div>
              </div>
              <FrameComponent3 r20k="R$20k" r10k="R$10k" r5k="R$5k" r0="R$0" />
              <div className="w-[310px] flex flex-row items-start justify-end py-0 px-1.5 box-border">
                <div className="flex-1 flex flex-row items-start justify-between gap-[20px] mq450:flex-wrap">
                  <div className="relative tracking-[-0.4px] leading-[8px] inline-block min-w-[12px] mq450:w-full mq450:h-3">
                    10
                  </div>
                  <div className="relative tracking-[-0.4px] leading-[8px] inline-block min-w-[7px] mq450:w-full mq450:h-[7px]">
                    11
                  </div>
                  <div className="relative tracking-[-0.4px] leading-[8px] inline-block min-w-[11px] mq450:w-full mq450:h-[11px]">
                    12
                  </div>
                  <div className="relative tracking-[-0.4px] leading-[8px] inline-block min-w-[11px] mq450:w-full mq450:h-[11px]">
                    13
                  </div>
                  <div className="relative tracking-[-0.4px] leading-[8px] inline-block min-w-[11px] mq450:w-full mq450:h-[11px]">
                    14
                  </div>
                  <div className="relative tracking-[-0.4px] leading-[8px] inline-block min-w-[11px] mq450:w-full mq450:h-[11px]">
                    15
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
