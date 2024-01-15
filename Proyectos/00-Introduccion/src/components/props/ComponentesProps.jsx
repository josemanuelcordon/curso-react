const Card = (props) => {
  const { title, description, bgColor } = props;
  return (
    <div className={`p-4 rounded-md shadow-md ${bgColor}`}>
      <h2 className="text-x1 font-bold">{title}</h2>
      <p className="mt-2">{description}</p>
    </div>
  );
};

export const ComponentesProps = () => {
  return (
    <div className="flex justify-center items-center h-screen gap-4">
      <Card
        title="Tarjeta1"
        description="contenido tarjeta1"
        bgColor="bg-green-200"
      ></Card>
      <Card
        title="Tarjeta1"
        description="contenido tarjeta1"
        bgColor="bg-sky-200"
      ></Card>
    </div>
  );
};

export default ComponentesProps;
