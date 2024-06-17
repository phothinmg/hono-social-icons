import type { FC } from "../dependencies/hono.ts";
import { Link } from "../components/Links.tsx";
import type { IconType } from "../type.ts";

export const IconWhatsapp: FC<{ opts?: IconType }> = ({ opts }) => {
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
        className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
        <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
      </svg>
    </Link>
  );
};
