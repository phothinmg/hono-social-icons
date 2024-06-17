import type { FC } from "./hono.ts";
import { icons } from "./iconsArray.ts";

/**
 * SocialIcon component
 * @param name - Name of the social icon
 * @param href - Link to the social media page
 * @param size - Size of the icon (optional)
 * @param stoke - Stroke width of the icon (optional)
 * @returns JSX.Element
 */
export const SocialIcon: FC<{
  name: string;
  href: string;
  size?: number;
  stoke?: number;
}> = ({ name, href, size = 24, stoke = 2 }) => {
  const f = icons.find((i) => i.name === name);
  const ia = f?.svgs ?? [];

  return (
    <a href={href} target="_blank" class="clink">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth={stoke}
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        {ia.map((i) => i)}
      </svg>
    </a>
  );
};
