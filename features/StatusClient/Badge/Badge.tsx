export interface BadgeProps {
  icon: React.ReactNode;
  header: string;
  content: string;
}
const Badge: React.FC<BadgeProps> = ({ icon, header, content }) => {
  return (
    <section className="flex">
      <div className="rounded-full bg-greenQ">{icon}</div>
      <div>
        <header>
          <h3 className="font-normal font-paragraph">{header}</h3>
        </header>
        <p>{content}</p>
      </div>
    </section>
  );
};

export default Badge;
