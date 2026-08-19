import { feedbackUrl } from "@/data/portfolio";

export function FeedbackLink() {
  return (
    <a
      className="floating-feedback-btn"
      href={feedbackUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Enviar feedback"
    >
      <i className="fas fa-comment-dots" aria-hidden="true" />
      <span className="btn-text">Feedback</span>
    </a>
  );
}
