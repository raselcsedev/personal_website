import { ProjectCardSkeleton } from "@/components/projects/ProjectCardSkeleton";
import { Skeleton } from "@/components/ui/skeleton";

/** Route-level loading UI with skeleton placeholders */
export default function Loading() {
  return (
    <div className="min-h-screen pt-32 pb-20 px-4 sm:px-6 max-w-6xl mx-auto animate-pulse">
      <div className="max-w-3xl space-y-6 mb-20">
        <Skeleton className="h-8 w-40 rounded-full" />
        <Skeleton className="h-16 w-full" />
        <Skeleton className="h-16 w-4/5" />
        <Skeleton className="h-6 w-2/3" />
        <div className="flex gap-3">
          <Skeleton className="h-11 w-28" />
          <Skeleton className="h-11 w-32" />
          <Skeleton className="h-11 w-36" />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, i) => (
          <ProjectCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
