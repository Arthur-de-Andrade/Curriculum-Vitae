import { journeyItems } from "@/data/journey";
import { Section } from "@/components/ui/section";
import { SectionHeading } from "@/components/ui/section-heading";
import { JourneyTimeline } from "@/components/journey/journey-timeline";

export function Journey() {
  return (
    <Section id="experiencia" className="section-muted journey-section">
      <SectionHeading
        kicker="Trajetória"
        title="Experiência & Formação"
        subtitle="Minha evolução profissional e acadêmica ao longo do tempo."
      />
      <JourneyTimeline items={journeyItems} />
    </Section>
  );
}
