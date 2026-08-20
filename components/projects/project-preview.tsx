import Image from "next/image";

import type { Project } from "@/types/portfolio";

interface ProjectPreviewProps {
  project: Project;
  decorative?: boolean;
  priority?: boolean;
}

export function ProjectPreview({ project, decorative = false, priority = false }: ProjectPreviewProps) {
  const label = decorative ? undefined : project.preview.alt;

  if (project.preview.type === "image" && project.preview.src) {
    return (
      <div
        className={`project-preview-image${project.slug === "developer-portfolio" ? " project-preview-image-portfolio" : ""}`}
      >
        <div className="project-preview-image-frame">
          <Image
            src={project.preview.src}
            alt={decorative ? "" : project.preview.alt}
            fill
            priority={priority}
            sizes="(max-width: 640px) 100vw, 340px"
          />
        </div>
        <span className="project-preview-image-label">Preview real</span>
      </div>
    );
  }

  return (
    <div className="project-preview-abstract" role="img" aria-label={label}>
      <div className="abstract-preview-header">
        <span>TRABALHO PROFISSIONAL</span>
        <span>PRIVADO</span>
      </div>
      <div className="abstract-preview-title">
        <strong>FATURAMENTO</strong>
      </div>
      <div className="abstract-preview-grid" aria-hidden="true">
        <span className="abstract-preview-line abstract-preview-line-one" />
        <span className="abstract-preview-line abstract-preview-line-two" />
        <span className="abstract-preview-node abstract-preview-node-one" />
        <span className="abstract-preview-node abstract-preview-node-two" />
        <span className="abstract-preview-node abstract-preview-node-three" />
        <span className="abstract-preview-node abstract-preview-node-four" />
      </div>
      <div className="abstract-preview-footer">
        <span>SOFTWARE CORPORATIVO</span>
        <span>CÓDIGO NÃO PÚBLICO</span>
      </div>
    </div>
  );
}
