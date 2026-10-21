import Link from "next/link";

import { siteConfig } from "@/config/site";
import { Badge } from "@/components/ui/badge";

export function SiteHeader() {
  return (
    <header className="border-b border-border bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 w-full max-w-5xl items-center justify-between px-6">
        <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
          <span className="inline-flex size-7 items-center justify-center rounded-md bg-primary text-xs font-bold text-primary-foreground">
            AF
          </span>
          <span>{siteConfig.name}</span>
        </Link>
        <Badge variant="secondary">Step 1 · Setup</Badge>
      </div>
    </header>
  );
}
