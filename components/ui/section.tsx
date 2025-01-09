import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const sectionVariants = cva("", {
  variants: {
    variant: {
      default: "bg-background",
      secondary: "bg-secondary/50 backdrop-blur-sm",
    },
    padding: {
      default: "py-16",
      hero: "pt-32 pb-16",
    },
  },
  defaultVariants: {
    variant: "default",
    padding: "default",
  },
});

interface SectionProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof sectionVariants> {}

export function Section({
  className,
  variant,
  padding,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(sectionVariants({ variant, padding, className }))}
      {...props}
    >
      {children}
    </section>
  );
}
