import { CustomLink } from "./ui/link";
import { Icon } from "./ui/icon";
import { siteConfig } from "@/lib/constants";

export function SiteLogo() {
  return (
    <CustomLink href="/" className="flex items-center gap-2">
      <Icon
        className="text-foreground"
        width="20"
        height="20"
        viewBox="0 0 500 500"
      >
        <rect x="248" y="25" width="221" height="285" className="fill-muted" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M15.6904 127.167C5.64356 137.211 0 150.839 0 165.048V446.428C0 476.013 23.9846 500 53.5714 500H334.953C349.161 500 362.788 494.354 372.833 484.309L484.309 372.833C494.357 362.788 500 349.161 500 334.952V53.5714C500 23.9868 476.016 0 446.428 0H165.047C150.839 0 137.212 5.64578 127.167 15.6904L15.6904 127.167ZM250 281.503C250 287.947 255.223 293.169 261.667 293.169H381.118C407.636 293.169 428.126 286.547 442.59 273.307C457.054 260.067 464.286 243.273 464.286 222.922C464.286 207.472 459.585 193.987 450.183 182.464C440.782 170.693 428.849 163.339 414.385 160.396C426.679 156.965 437.046 150.465 445.483 140.904C454.161 131.095 458.501 118.099 458.501 101.916C458.501 82.5456 451.51 66.7333 437.527 54.4739C423.787 41.966 403.778 35.7143 377.502 35.7143H261.667C255.223 35.7143 250 40.9372 250 47.3807V281.503Z"
          className="fill-foreground"
        />
      </Icon>
      <span className="text-sm font-medium">{siteConfig.name}</span>
    </CustomLink>
  );
}
