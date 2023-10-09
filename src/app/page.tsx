import { LandingSlice } from "./LandingSlice";
import { RelocationSlice } from "./RelocationSlice";
import { GreenBanner } from "@/components/GreenBanner";
import { LinkedinSlice } from "./LinkedinSlice";
import { CVSlice } from "./CVSlice";
import { CarreerBoostSlice } from "./CarreerBoostSlice";
import { ValueSlice } from "./ValueSlice";
import { WorldSlice } from "./WorldSlice";
import { TestimonialSlice } from "./TestimonialsSlice";
import { FinalSlice } from "./FinalSlice";

export default function Home() {
  return (
    <div className="bg-cyan-950">
      <LandingSlice />
      <RelocationSlice />
      <GreenBanner
        title="plano de recolocação"
        cta="Inscreva-se agora"
        mainInfo="Sua recolocação profissional, vinda de táticas e ideias comprovadas."
        description="esenvolva expertise nas estratégias essenciais para impulsionar sua recolocação profissional e forje um plano de carreira sólido que te transformará em um candidato altamente cobiçado pelo mercado de trabalho. Com o serviços de Plano de Recolocação, você estará preparado para alcançar seus objetivos profissionais."
      />
      <LinkedinSlice />
      <GreenBanner
        title="upgrade no seu LinkedIn"
        cta="Inscreva-se agora"
        mainInfo="Descubra as estratégias essenciais para sua recolocação profissional"
        description="Como Tech Recruiter, não apenas conecto você com oportunidades de alto nível, mas também trabalho para aprimorar sua presença no LinkedIn, destacando suas habilidades, experiências e conquistas de maneira atraente. Isso ajudará você a impressionar recrutadores e empregadores, além de posicionar o seu perfil como o de um especialista em sua área."
      />
      <CVSlice />
      <GreenBanner
        title="o cv irresistivel"
        cta="Inscreva-se agora"
        mainInfo="Em um mercado de trabalho altamente competitivo, ter um currículo  que se destaque é fundamental."
        description='Nosso serviço "CV Irresistível" é projetado para você, o profissional que deseja brilhar e alcançar seus objetivos de carreira. Criamos currículos que não apenas destacam suas habilidades e experiências, mas também contam a história única do seu sucesso profissional.'
      />
      <CarreerBoostSlice />
      <GreenBanner
        title="acelerador de carreira"
        cta="Inscreva-se agora"
        mainInfo="Descubra as estratégias essenciais para sua recolocação profissional"
        description="Uma gama abrangente de serviços para impulsionar seu crescimento profissional. Isso inclui aprimoramento do seu currículo e perfil no LinkedIn, treinamento intensivo em entrevistas, desenvolvimento de habilidades de comunicação, criação de um plano estratégico de carreira, orientação para recolocação ou mudança de emprego, desenvolvimento de competências técnicas e comportamentais específicas e acesso a mentoria personalizada."
      />
      <ValueSlice />
      <WorldSlice />
      <TestimonialSlice />
      <FinalSlice />
    </div>
  );
}
