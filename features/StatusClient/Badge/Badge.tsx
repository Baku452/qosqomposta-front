export interface BadgeProps {
  icon: React.ReactNode;
  header: string;
  content: string;
}
const Badge: React.FC<BadgeProps> = ({ icon, header, content }) => {
  return (
    <section className="flex gap-3 items-center">
      <div className="rounded-full bg-greenQ bg-opacity-20 w-14 h-14 flex items-center justify-center">
        {icon}
      </div>
      <div>
        <header>
          <h3 className="font-normal font-paragraph">{header}</h3>
        </header>
        <p className="font-semibold">{content}</p>
      </div>
    </section>
  );
};

export default Badge;
