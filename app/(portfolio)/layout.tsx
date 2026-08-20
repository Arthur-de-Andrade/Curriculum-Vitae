import "../../style.css";

import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { FeedbackLink } from "@/components/layout/feedback-link";

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="portfolio-site">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
      <FeedbackLink />
    </div>
  );
}
