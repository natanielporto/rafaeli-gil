import { GreenCard } from "@/components/GreenCard";
import { WhiteCard } from "@/components/WhiteCard";
import React from "react";

const greenText = [
  "Uma avaliação abrangente de suas habilidades e objetivos de carreira.",
  "Orientação especializada na elaboração de currículos e perfis no LinkedIn para se destacar.",
  "Treinamento personalizado para brilhar em entrevistas e apresentações pessoais.",
  "Um plano estratégico para alcançar seus objetivos de carreira, seja você um iniciante ou um profissional experiente.",
  "Assistência dedicada na busca por oportunidades de recolocação em empresas de tecnologia líderes.",
];

export const RelocationSlice = () => {
  return (
    <div>
      <WhiteCard
        orientation="left"
        title="plano de recolocação"
        cta="Inscreva-se agora"
        mainInfo="Descubra as técnicas essenciais para sua recolocação profissional."
        description="Domine as estratégias necessárias para a sua recolocação e crie um plano de carreira sólido que torne o seu CV altamente desejado no mercado de trabalho."
      />
      <GreenCard description={greenText} />
    </div>
  );
};
