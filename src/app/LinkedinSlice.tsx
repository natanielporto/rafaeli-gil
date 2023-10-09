import { GreenCard } from "@/components/GreenCard";
import { WhiteCard } from "@/components/WhiteCard";

const greenText = [
  "As palavras-chave que mais interessam na hora do recrutamento.",
  "Como capitalizar suas experiências e mostrar o seu melhor lado em seu perfil.",
  "Chame a atenção de quem realmente importa com o currículo certo, feito para o momento certo.",
  "Aprenda a ser a sua melhor versão para encontrar o melhor trabalho desejado.",
];

export const LinkedinSlice = () => {
  return (
    <div>
      <WhiteCard
        orientation="right"
        title="upgrade no seu LinkedIn"
        cta="Inscreva-se agora"
        mainInfo="Tudo o que precisa para ter um perfil de destaque para os recrutadores."
        description="Vou te ensinar a ter um LinkedIn ESTRATÉGICO, desde como estruturar os campos de maneira acertiva, melhor forma para desenvolver o networking atẽ como escrever conteũdos de destaque."
      />
      <GreenCard description={greenText} />
    </div>
  );
};
