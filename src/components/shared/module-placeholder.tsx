import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { PlaceholderStatus } from "@/types";

type ModulePlaceholderProps = {
  title: string;
  description: string;
  status?: PlaceholderStatus;
};

const statusLabel: Record<PlaceholderStatus, string> = {
  planned: "Planned",
  in_progress: "In progress",
  ready: "Ready",
};

export function ModulePlaceholder({
  title,
  description,
  status = "planned",
}: ModulePlaceholderProps) {
  return (
    <Card>
      <CardHeader className="gap-2">
        <div className="flex items-center justify-between gap-3">
          <CardTitle>{title}</CardTitle>
          <Badge variant="outline">{statusLabel[status]}</Badge>
        </div>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-muted-foreground">
          Implementation intentionally deferred past Step 1.
        </p>
      </CardContent>
    </Card>
  );
}
