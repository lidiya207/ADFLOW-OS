/**
 * Shared domain types for AdFlow OS.
 * Feature-specific types should live under `src/features/<module>/types`.
 */

export type AppModule = "agency" | "billing" | "auth";

export type PlaceholderStatus = "planned" | "in_progress" | "ready";
