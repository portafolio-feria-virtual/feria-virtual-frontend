interface TitleProps {
  title: string;
  body: string;
}

export const Title = ({ title, body }: TitleProps) => {
  return (
    <div className="w-fit mb-8">
      <div className="text-xs font-semibold mb-2 bg-green-500 text-white px-4 py-2 rounded-full w-fit">
        {title}
      </div>

      <h3>Bienvenido(a) a</h3>
      <h1>
        <strong className="font-inter font-black">Maipo</strong> Grande
      </h1>

      <p className="text-gray-600/80">{body}</p>
    </div>
  );
};
