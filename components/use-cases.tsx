import * as React from "react";
import { Section } from "./ui/section";
import { Container } from "./ui/container";
import { CustomLink } from "./ui/link";
import { CATEGORIES, type Category } from "@/lib/categories";
import { CategoryBadge } from "./ui/category-badge";
import { SectionHeader } from "./ui/section-header";
import { GridLayout } from "./ui/grid-layout";

interface UseCase {
  title: string;
  description: string;
  category: Category;
  href: string;
}

const useCases: UseCase[] = [
  {
    category: CATEGORIES.COUNTRY,
    title: "Start a Job Board in Spain",
    description:
      "Target country-specific job markets with localized features, language support, and regional job categories to connect local talent with opportunities.",
    href: "#country",
  },
  {
    category: CATEGORIES.CITY,
    title: "Start a Local Job Board in Alicante",
    description:
      "Create hyper-local job boards that serve specific cities and communities, fostering stronger connections between local businesses and talent.",
    href: "#city",
  },
  {
    category: CATEGORIES.INDUSTRY,
    title: "Start Manufacturing Job Board",
    description:
      "Build industry-focused job boards that cater to specific sectors, offering specialized features and categories relevant to your chosen industry.",
    href: "#industry",
  },
  {
    category: CATEGORIES.ROLE,
    title: "Start a Job Board for Truck Drivers",
    description:
      "Launch role-specific job boards that connect specialized professionals with employers, featuring targeted job categories and requirements.",
    href: "#role",
  },
  {
    category: CATEGORIES.TECHNOLOGY,
    title: "Start Next.js Job Board",
    description:
      "Create technology-focused job boards that serve specific tech communities, with features tailored to technical recruitment and skill verification.",
    href: "#technology",
  },
  {
    category: CATEGORIES.REMOTE,
    title: "Start Remote Jobs Board",
    description:
      "Build remote-first job boards that connect distributed teams with global talent, featuring location-independent opportunities and remote work tools.",
    href: "#remote",
  },
];

const UseCaseCard = React.memo(function UseCaseCard({
  title,
  description,
  category,
  href,
}: UseCase) {
  return (
    <CustomLink
      href={href}
      className="block rounded-lg border bg-background/50 p-5 backdrop-blur-sm transition-colors hover:bg-background/80"
    >
      <div className="mb-2">
        <CategoryBadge category={category} />
      </div>
      <h3 className="mb-2 text-sm font-medium">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </CustomLink>
  );
});

export function UseCases() {
  return (
    <Section id="use-cases">
      <Container>
        <SectionHeader
          title="Launch Your Niche Job Board"
          description="Create specialized job boards for any market, location, or industry. Bordful helps you target specific niches for maximum impact."
        />
        <GridLayout>
          {useCases.map((useCase) => (
            <UseCaseCard
              key={`${useCase.category}-${useCase.title
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              {...useCase}
            />
          ))}
        </GridLayout>
      </Container>
    </Section>
  );
}
