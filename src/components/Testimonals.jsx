import Card from "./Card";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    position: "CEO at Acme Corp",
    content:
      "The team at Sepnoty truly understands our needs. Their resources have empowered our product development team to innovate faster.",
  },
  {
    id: 2,
    name: "Jane Smith",
    position: "Marketing Director at TechWave",
    content:
      "Sepnoty has been a valuable partner. Their resources helped us streamline our operations and improve efficiency across the board.",
  },
  {
    id: 3,
    name: "Alice Johnson",
    position: "Product Manager at InnovateX",
    content:
      "The team at Sepnoty truly understands our needs. Their resources have empowered our product development team to innovate faster.",
  },
  {
    id: 4,
    name: "Michael Brown",
    position: "Founder at GreenTech",
    content:
      "Sepnoty has been a valuable partner. Their resources helped us streamline our operations and improve efficiency across the board.",
  },
  {
    id: 5,
    name: "Michael Brown",
    position: "Founder at GreenTech",
    content:
      "Sepnoty has been a valuable partner. Their resources helped us streamline our operations and improve efficiency across the board.",
  },
];

const Testimonals = () => {
  return (
    <>
      {testimonials.map((t) => {
        return <Card name={t.name} content={t.content} key={t.id} />;
      })}
    </>
  );
};

export default Testimonals;
