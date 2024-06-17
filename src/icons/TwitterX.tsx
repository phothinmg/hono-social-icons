import type { FC } from "../dependencies/hono.ts";
import { Link } from "../components/Links.tsx";
import type { IconType } from "../type.ts";
/**
 * Renders an icon for Twitter X.
 *
 *
 */
export const IconTwitterX: FC<{ opts?: IconType }> = ({ opts }) => {
  const link = opts?.href ?? "#";
  const size = opts?.size ?? 24;
  const stoke = opts?.stokeWidth ?? 2;
  return (
    <Link href={link}>
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
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 4l11.733 16h4.267l-11.733 -16z" />
        <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
      </svg>
    </Link>
  );
};
/**
 * Renders an icon for Twitter X Filled.
 */
export const IconTwitterXFilled: FC<{ opts?: IconType }> = ({ opts }) => {
  const link = opts?.href ?? "#";
  const size = opts?.size ?? 24;
  return (
    <Link href={link}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M8.267 3a1 1 0 0 1 .73 .317l.076 .092l4.274 5.828l5.946 -5.944a1 1 0 0 1 1.497 1.32l-.083 .094l-6.163 6.162l6.262 8.54a1 1 0 0 1 -.697 1.585l-.109 .006h-4.267a1 1 0 0 1 -.73 -.317l-.076 -.092l-4.276 -5.829l-5.944 5.945a1 1 0 0 1 -1.497 -1.32l.083 -.094l6.161 -6.163l-6.26 -8.539a1 1 0 0 1 .697 -1.585l.109 -.006h4.267z" />
      </svg>
    </Link>
  );
};
