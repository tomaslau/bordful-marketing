import { siteConfig } from "@/lib/constants";
import { CustomLink } from "./ui/link";

export function ActionButtons() {
  return (
    <div className="flex flex-col gap-2 md:flex-row">
      <CustomLink href={siteConfig.links.demo} variant="button" external>
        Live Demo
      </CustomLink>
      <CustomLink href="https://github.com/tomaslau/bordful" variant="primary">
        Clone Now
      </CustomLink>
    </div>
  );
}
