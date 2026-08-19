interface SectionHeadingProps {
  kicker: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({
  kicker,
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="section-heading">
      <span className="section-kicker">{kicker}</span>
      <h2 className="section-title">{title}</h2>
      {subtitle ? <p className="section-subtitle">{subtitle}</p> : null}
    </div>
  );
}
