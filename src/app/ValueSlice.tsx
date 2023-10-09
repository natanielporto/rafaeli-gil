import Image from "next/image";
import Photo from "../../public/assets/photo1.jpg";

export const ValueSlice = () => {
  return (
    <div className="mb-4">
      <div>
        <Image src={Photo} alt="Foto Rafaeli Gil" />
      </div>
      <div className="bg-lightGreen mt-4 p-8">
        <div className="text-lg ">
          Ajudamos você a se concentrar no que é realmente importante para
          expandir sua carreira:
        </div>
        <div className="border my-4"></div>
        <div className="text-2xl uppercase font-bold">
          Um perfil traçado você já tem. Agora vamos em busca do seu melhor
          perfil profissional possível.
        </div>
      </div>
    </div>
  );
};
