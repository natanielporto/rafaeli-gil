import Image from "next/image";

export const WorldSlice = () => {
  return (
    <div className="">
      <div className="bg-lightGreen p-8">
        <div className="text-center text-2xl">Lugares que alcançamos</div>
        <div className="text-center">
          Recolocação de candidatos pelo mundo: Canadá, EUA, Portugal, entre
          outros.
        </div>
      </div>
      <div className="w-[100%] h-[100%] relative">
        <Image
          src="https://plus.unsplash.com/premium_photo-1681488098851-e3913f3b1908?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1280&q=80"
          alt="Mapa do mundo"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "100%", height: "auto" }}
        />
      </div>
    </div>
  );
};
