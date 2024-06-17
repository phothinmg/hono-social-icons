import type { FC } from "../dependencies/hono.ts";
import { Link } from "../components/Links.tsx";
import type { IconType } from "../type.ts";

export const IconGitlab: FC<{ opts?: IconType }> = ({ opts }) => {
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
        <path d="M21 14l-9 7l-9 -7l3 -11l3 7h6l3 -7z" />
      </svg>
    </Link>
  );
};
