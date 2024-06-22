import type { NextPage } from "next";
import Content2 from "./content2";

export type FrameComponent8Type = {
  className?: string;
};

const FrameComponent8: NextPage<FrameComponent8Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-row items-start justify-end pt-0 px-4 pb-[131px] box-border max-w-full text-left text-29xl text-white font-body-16px-regular mq450:pb-[55px] mq450:box-border mq1125:pb-[85px] mq1125:box-border ${className}`}
    >
      <div className="flex-1 flex flex-row items-start justify-start relative max-w-full">
        <img
          className="h-[877px] w-[1436px] absolute !m-[0] top-[-676px] right-[-16px] overflow-hidden shrink-0 object-cover"
          alt=""
          src="/bg@2x.png"
        />
        <div className="flex-1 rounded-3xl bg-theme-colors-color-02 overflow-hidden flex flex-col items-start justify-start py-[120px] px-[92px] box-border max-w-full z-[1] mq450:pt-[51px] mq450:pb-[51px] mq450:box-border mq825:py-[78px] mq825:px-[23px] mq825:box-border mq1400:pl-[46px] mq1400:pr-[46px] mq1400:box-border">
          <div className="self-stretch flex flex-col items-start justify-start gap-[56px] max-w-full mq825:gap-[28px]">
            <h1 className="m-0 w-[600px] relative text-inherit tracking-[-2px] leading-[130%] font-medium font-inherit inline-block max-w-full mq450:text-10xl mq450:leading-[37px] mq825:text-19xl mq825:leading-[50px]">
              Onboarding e KYC de Usuários
            </h1>
            <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[24px] max-w-full text-13xl text-neutral-neutral-03">
              <Content2
                fi2879282="/fi-2879282.svg"
                cadastroSimplificado="Cadastro Simplificado"
                faciliteAIntegraoDeNovosC="Facilite a integração de novos clientes com um processo de onboarding intuitivo."
              />
              <Content2
                fi2879282="/fi-8591029.svg"
                cadastroSimplificado="Verificação Rigorosa"
                faciliteAIntegraoDeNovosC="Assegure a conformidade regulatória com procedimentos KYC precisos e detalhados."
              />
              <Content2
                fi2879282="/fi-10486795.svg"
                cadastroSimplificado="Processo Rápido"
                faciliteAIntegraoDeNovosC="Reduza o tempo de verificação com automação e validação em tempo real."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent8;
