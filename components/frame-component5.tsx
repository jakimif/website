import type { NextPage } from "next";
import FeaturesIntro from "./features-intro";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: NextPage<FrameComponent5Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end py-0 px-4 box-border max-w-full text-left text-29xl text-theme-colors-color-05 font-body-16px-regular ${className}`}
    >
      <div className="flex-1 rounded-3xl bg-theme-colors-color-03 flex flex-row items-end justify-between py-[69px] px-[92px] box-border max-w-full gap-[20px] mq825:py-[45px] mq825:px-[23px] mq825:box-border mq1400:flex-wrap mq1400:justify-center mq1400:pl-[46px] mq1400:pr-[46px] mq1400:box-border">
        <div className="h-[670px] w-[1408px] relative rounded-3xl bg-theme-colors-color-03 hidden max-w-full" />
        <FeaturesIntro
          gerenciamentoSeguroDeTran="Gerenciamento seguro de transações"
          assegureAIntegridadeEASeg="Assegure a integridade e a segurança nas transações financeiras com nossa solução de gerenciamento."
          check="/check-6.svg"
          garantaASeguranaDeTodasAs="Garanta a segurança de todas as transações com tecnologia de ponta."
          check1="/check-6.svg"
          acompanheEVerifiqueCadaTr="Acompanhe e verifique cada transação em tempo real para evitar fraudes."
          check2="/check-6.svg"
          mantenhaSeEmConformidadeC="Mantenha-se em conformidade com todas as regulamentações e padrões financeiros."
        />
        <div className="w-[498px] rounded-3xl bg-saddlebrown flex flex-col items-center justify-start py-[92px] px-5 box-border min-w-[498px] max-w-full z-[1] text-center text-xl text-neutral-neutral-02 mq825:pt-[60px] mq825:pb-[60px] mq825:box-border mq825:min-w-full mq1400:flex-1">
          <div className="w-[319px] rounded-2xl bg-white flex flex-col items-center justify-start p-6 box-border gap-[17px]">
            <div className="flex flex-col items-center justify-start gap-[16px]">
              <h2 className="m-0 relative text-inherit leading-[170%] font-medium font-inherit inline-block min-w-[93px] mq450:text-base mq450:leading-[27px]">
                Transferir
              </h2>
              <div className="flex flex-col items-center justify-start gap-[8px] text-base">
                <div className="relative leading-[170%] inline-block min-w-[39px]">
                  Valor
                </div>
                <div className="relative text-21xl tracking-[-1.5px] leading-[120%] font-medium whitespace-nowrap text-neutral-neutral-03 mq450:text-5xl mq450:leading-[29px] mq825:text-13xl mq825:leading-[38px]">
                  <span>R$150.</span>
                  <span className="text-neutral-neutral-02">00</span>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-center justify-start gap-[8px] text-left text-xs">
              <div className="self-stretch rounded-lg flex flex-col items-start justify-start py-2.5 px-[15px] border-[1px] border-solid border-darkslategray-200">
                <div className="self-stretch flex flex-row items-center justify-start gap-[16px] mq450:flex-wrap">
                  <img
                    className="h-10 w-10 relative rounded-[50%] object-contain"
                    alt=""
                    src="/ellipse-1@2x.png"
                  />
                  <div className="flex-1 flex flex-col items-start justify-center min-w-[119px]">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[8px] mq450:flex-wrap">
                      <img
                        className="h-4 w-4 relative overflow-hidden shrink-0"
                        alt=""
                        src="/hicon--linear--send-2.svg"
                      />
                      <div className="flex-1 relative leading-[170%] inline-block min-w-[49px]">
                        Enviar para
                      </div>
                    </div>
                    <div className="relative text-base leading-[170%] font-medium text-neutral-neutral-03 inline-block min-w-[120px]">
                      Joana Areantes
                    </div>
                  </div>
                </div>
              </div>
              <div className="self-stretch rounded-lg flex flex-col items-start justify-start py-2.5 px-[15px] border-[1px] border-solid border-darkslategray-200">
                <div className="self-stretch flex flex-row items-center justify-start gap-[16px] mq450:flex-wrap">
                  <img
                    className="h-8 w-8 relative"
                    alt=""
                    src="/mastercard.svg"
                  />
                  <div className="flex-1 flex flex-col items-start justify-center min-w-[124px]">
                    <div className="self-stretch flex flex-row items-center justify-start gap-[8px] mq450:flex-wrap">
                      <img
                        className="h-4 w-4 relative overflow-hidden shrink-0"
                        alt=""
                        src="/hicon--linear--card-1.svg"
                      />
                      <div className="flex-1 relative leading-[170%] inline-block min-w-[105px]">
                        Master Card 2560 36**
                      </div>
                    </div>
                    <div className="relative text-base leading-[170%] font-medium text-neutral-neutral-03 inline-block min-w-[98px] whitespace-nowrap">
                      R$12.536,00
                    </div>
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

export default FrameComponent5;
