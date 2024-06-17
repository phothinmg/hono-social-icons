import { Link } from "../components/Links.tsx";
import type { FC } from "../dependencies/hono.ts";
import type { IconType } from "../type.ts";

export const IconBitbucket: FC<{ opts?: IconType }> = ({ opts }) => {
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
        <path d="M3.648 4a.64 .64 0 0 0 -.64 .744l3.14 14.528c.07 .417 .43 .724 .852 .728h10a.644 .644 0 0 0 .642 -.539l3.35 -14.71a.641 .641 0 0 0 -.64 -.744l-16.704 -.007z" />
        <path d="M14 15h-4l-1 -6h6z" />
      </svg>
    </Link>
  );
};
