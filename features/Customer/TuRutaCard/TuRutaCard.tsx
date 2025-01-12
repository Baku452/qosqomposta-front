export interface TuRutaCardProps {
  route: string;
  dayOfPickup: string;
  hourAproximate: string;
}
const TuRutaCard: React.FC<TuRutaCardProps> = ({
  dayOfPickup,
  hourAproximate,
  route,
}) => {
  return (
    <section className="mt-4 w-full rounded-lg bg-white p-10 text-center shadow-lg">
      <h3 className="font-paragraph text-2xl font-thin">Tu ruta</h3>
      <div className="mt-4 flex justify-evenly border-t-[1px] border-t-gray-300 py-4">
        <div>
          <h4 className="text-lg">Ruta</h4>
          <p className="font-titles text-3xl text-greenQ">{route}</p>
        </div>
        <div>
          <h4 className="text-lg">Día de recojo</h4>
          <p className="font-titles text-3xl text-greenQ">{dayOfPickup}</p>
        </div>
        <div>
          <h4 className="text-lg">Hora Aproximada</h4>
          <p className="font-titles text-3xl text-greenQ">{hourAproximate}</p>
        </div>
      </div>
    </section>
  );
};

export default TuRutaCard;
