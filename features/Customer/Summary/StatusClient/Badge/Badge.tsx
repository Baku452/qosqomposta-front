export interface BadgeProps {
  icon: React.ReactNode;
  header: string;
  content: string;
}
const Badge: React.FC<BadgeProps> = ({ icon, header, content }) => {
  return (
    <section className="flex items-center gap-3">
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-greenQ bg-opacity-20">
        {icon}
      </div>
      <div>
        <header>
          <h3 className="font-paragraph text-lg font-normal">{header}</h3>
        </header>
        <p className="font-semibold capitalize">{content}</p>
      </div>
    </section>
  );
};

export default Badge;
