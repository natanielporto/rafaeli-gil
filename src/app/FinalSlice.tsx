import Image from "next/image";
import Logo from "../../public/assets/rafa-gil-logo-white.png";

export const FinalSlice = () => {
  return (
    <div>
      <div className="w-[100%] h-[100%] relative">
        <Image
          src="https://plus.unsplash.com/premium_photo-1661740258370-67d4a99c154d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80"
          alt="Mapa do mundo"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
      <div className="p-8">
        <div>
          <div className="text-2xl uppercase text-lightGreen font-bold text-center">
            Vamos trabalhar, acredito em você!
          </div>
        </div>
        <div>
          <Image
            src={Logo}
            alt="Logo Rafaeli Gil, um R e um G"
            className="scale-[.5]"
          />
          <div className="text-lightGreen flex flex-col items-center pb-4">
            <span>Tel. (12) 99621-1534</span>
            <span>e-mail: rafagil@gmail.com</span>
            <span>Social: @rafagil</span>
          </div>
        </div>
      </div>
    </div>
  );
};
