import type { PropsWithChildren } from "../dependencies/hono.ts";
import type { LinkType } from "../type.ts";
/**
 * Renders a link element with the provided href and children.
 * 
 */
export function Link({ href, children }: PropsWithChildren<LinkType>) {
  const link = href ?? "#";

  return (
    <>
      <a href={link} target="_blank" class="clink">
        {children}
      </a>
    </>
  );
}
