import { Link } from "../components/Links.tsx";
import type { FC } from "../dependencies/hono.ts";
import type { IconType } from "../type.ts";

export const IconWordpress: FC<{ opts?: IconType }> = ({ opts }) => {
  const link = opts?.href ?? "#";
  const size = opts?.size ?? 24;
  const stoke = opts?.stokeWidth ?? 2;

  return (
    <Link href={link}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        strokeWidth={stoke}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M9.5 9h3" />
        <path d="M4 9h2.5" />
        <path d="M11 9l3 11l4 -9" />
        <path d="M5.5 9l3.5 11l3 -7" />
        <path d="M18 11c.177 -.528 1 -1.364 1 -2.5c0 -1.78 -.776 -2.5 -1.875 -2.5c-.898 0 -1.125 .812 -1.125 1.429c0 1.83 2 2.058 2 3.571z" />
        <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
      </svg>
    </Link>
  );
};
