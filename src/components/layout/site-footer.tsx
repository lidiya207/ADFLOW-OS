import { siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6 text-sm text-muted-foreground">
        <p>
          &copy; 2026 {siteConfig.name}
        </p>
        <p>Agency operations + billing foundation</p>
      </div>
    </footer>
  );
}
