## Social icons with links for [Hono](https://hono.dev/) Jsx (Deno Only)

**Icons are get from https://tabler.io/**

---

### Install

#### From JSR

```bash
deno add @ptm/hono-social-icons
```

```ts
import { SocialIcon } from "@ptm/hono-social-icons";
```

#### From denoland/x

```ts
import { SocialIcon } from "https://deno.land/x/hono_social_icons@0.1.1/src/mod.ts";
```

---

### Setup

#### Hono jsx runtime in deno.json.

```json
{
  "compilerOptions": {
    "jsx": "precompile",
    "jsxImportSource": "jsr:@hono/hono@^4.4.6/jsx"
  }
}
```

#### CSS link in `<head> </head>` (Optional)

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/gh/phothinmg/master-repo@main/hono-icons/sicons.css"
  type="text/css"
/>
```

**You can styled to class `.clink`**

Default Style

```css
:root {
  --clink-color: #585858;
}
html[data-theme="light"] {
  --clink-color: #585858;
}
html[data-theme="dark"] {
  --clink-color: #ababab;
}
.clink {
  color: var(--clink-color);
  text-decoration: none;
}
.clink:hover {
  color: goldenrod;
}
```

***

## [Types](https://jsr.io/@ptm/hono-social-icons@0.1.1/doc/~/SocialIcon#variable_SocialIcon)

```ts
FC<{ name: string; href: string; size?: number; stoke?: number }>;
```

***

### Example

```ts
<SocialIcon name={"github"} href={"https://github.com/--"} size={30} />
<SocialIcon name={"twitter"} href={"link_to_profile"} size={18} stoke={1.5} />
 <SocialIcon name={"discord"} href={"link_to_profile"} />
```

- name: Name of social , Required
- href: URL to social profile , Required
- size: Size of icon , Optional , default 24
- stoke: Size of stoke width , Optional , default 2 (limit =< 2)


#### Text for available icons 

- "github"
- "twitter"
- "linkedin"
- "facebook"
- "whatsapp"
- "wordpress"
- "wechat"
- "gitlab"
- "bitbucket"
- "discord"

***
