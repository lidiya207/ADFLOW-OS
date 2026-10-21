import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ModulePlaceholder } from "@/components/shared/module-placeholder";
import { siteConfig } from "@/config/site";

export default function HomePage() {
  return (
    <div className="flex flex-col gap-10">
      <section className="flex flex-col gap-4">
        <p className="text-sm font-medium text-muted-foreground">
          Advertising agency platform
        </p>
        <h1 className="max-w-2xl text-4xl font-semibold tracking-tight text-balance sm:text-5xl">
          {siteConfig.name}
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground text-pretty">
          {siteConfig.description} This repository is currently at Step 1 —
          project foundation only. Authentication, database, CRM, and billing
          features are intentionally not implemented yet.
        </p>
        <div className="flex flex-wrap gap-3 pt-2">
          <Button disabled>Launch workspace (coming soon)</Button>
          <Button variant="outline" disabled>
            View docs (coming soon)
          </Button>
        </div>
      </section>

      <Separator />

      <section className="flex flex-col gap-4">
        <div className="flex flex-col gap-1">
          <h2 className="text-xl font-semibold tracking-tight">Platform modules</h2>
          <p className="text-sm text-muted-foreground">
            Modular boundaries for upcoming workstreams.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2">
          <ModulePlaceholder
            title={siteConfig.modules.agency}
            description="CRM, onboarding, campaigns, tasks, and reporting for agency teams."
            status="planned"
          />
          <ModulePlaceholder
            title={siteConfig.modules.billing}
            description="Pricing, invoices, subscriptions, and Stripe-powered payments."
            status="planned"
          />
        </div>
      </section>
    </div>
  );
}
