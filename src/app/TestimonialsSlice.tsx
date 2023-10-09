import { BiSolidQuoteLeft } from "react-icons/bi";

export const TestimonialSlice = () => {
  const testimonials = [
    {
      author: "Marta Batista",
      company: "Venica Serviços",
      title:
        "Aumentei a credibilidade do meu CV e em poucos dias consegui o meu tão esperado SIM!",
    },
    {
      author: "Maximiliano Gomes,",
      company: "Aero Verde Turismo",
      title:
        "Aumentei a credibilidade do meu CV e em poucos dias consegui o meu tão esperado SIM!",
    },
    {
      author: "Samuel Castro",
      company: "Lernerra",
      title:
        "Aumentei a credibilidade do meu CV e em poucos dias consegui o meu tão esperado SIM!",
    },
  ];

  return (
    <div className="mb-4">
      <div>
        <div className="text-white uppercase text-2xl text-center">
          O que os clientes dizem sobre nós
        </div>
        <div>
          {testimonials.map((test) => (
            <div className="text-white p-4 m-4 border" key={test.author}>
              <div className="mb-4">
                <BiSolidQuoteLeft size={54} color="#4ed107" />
              </div>
              <div className="mb-4">{test.title}</div>
              <div>
                <div> - {test.author},</div>
                <div>{test.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
