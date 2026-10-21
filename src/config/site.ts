export const siteConfig = {
  name: "AdFlow OS",
  description:
    "Production-grade operations and billing platform for advertising agencies.",
  url: process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000",
  modules: {
    agency: "Agency Operations",
    billing: "Billing Platform",
  },
} as const;
