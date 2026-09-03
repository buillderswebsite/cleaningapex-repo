interface SkeletonProps {
  className?: string;
}

export function Skeleton({ className = "" }: SkeletonProps) {
  return (
    <div
      className={`animate-pulse bg-gray-200 rounded ${className}`}
    />
  );
}

export function SkeletonText({ lines = 3, className = "" }: { lines?: number; className?: string }) {
  return (
    <div className={`space-y-3 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          className={`h-4 ${i === lines - 1 ? "w-3/4" : "w-full"}`}
        />
      ))}
    </div>
  );
}

export function SkeletonCard({ className = "" }: SkeletonProps) {
  return (
    <div className={`bg-white rounded-2xl p-6 border border-gray-100 ${className}`}>
      <Skeleton className="h-48 w-full mb-4" />
      <Skeleton className="h-6 w-3/4 mb-3" />
      <SkeletonText lines={2} />
      <Skeleton className="h-10 w-32 mt-4" />
    </div>
  );
}

export function SkeletonServiceCard({ className = "" }: SkeletonProps) {
  return (
    <div className={`bg-white rounded-2xl p-6 border border-gray-100 ${className}`}>
      <Skeleton className="h-12 w-12 rounded-xl mb-4" />
      <Skeleton className="h-6 w-2/3 mb-3" />
      <SkeletonText lines={2} />
      <div className="mt-4 space-y-2">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/5" />
      </div>
    </div>
  );
}

export function SkeletonTestimonial({ className = "" }: SkeletonProps) {
  return (
    <div className={`bg-white rounded-2xl p-6 border border-gray-100 ${className}`}>
      <div className="flex gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Skeleton key={i} className="h-5 w-5" />
        ))}
      </div>
      <SkeletonText lines={3} className="mb-6" />
      <div className="flex items-center gap-3">
        <Skeleton className="h-12 w-12 rounded-full" />
        <div>
          <Skeleton className="h-4 w-24 mb-2" />
          <Skeleton className="h-3 w-16" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonBlogCard({ className = "" }: SkeletonProps) {
  return (
    <div className={`bg-white rounded-2xl overflow-hidden border border-gray-100 ${className}`}>
      <Skeleton className="h-48 w-full" />
      <div className="p-6">
        <Skeleton className="h-4 w-24 mb-3" />
        <Skeleton className="h-6 w-full mb-2" />
        <Skeleton className="h-6 w-3/4 mb-4" />
        <SkeletonText lines={2} />
        <div className="flex items-center gap-4 mt-4">
          <Skeleton className="h-4 w-20" />
          <Skeleton className="h-4 w-16" />
        </div>
      </div>
    </div>
  );
}

export function SkeletonPriceCard({ className = "" }: SkeletonProps) {
  return (
    <div className={`bg-white rounded-2xl p-6 border border-gray-100 ${className}`}>
      <Skeleton className="h-6 w-1/2 mb-2" />
      <Skeleton className="h-10 w-2/3 mb-4" />
      <div className="space-y-3 mb-6">
        {Array.from({ length: 4 }).map((_, i) => (
          <div key={i} className="flex items-center gap-2">
            <Skeleton className="h-5 w-5 rounded" />
            <Skeleton className="h-4 flex-1" />
          </div>
        ))}
      </div>
      <Skeleton className="h-12 w-full rounded-lg" />
    </div>
  );
}

export function SkeletonForm({ className = "" }: SkeletonProps) {
  return (
    <div className={`space-y-6 ${className}`}>
      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <Skeleton className="h-4 w-20 mb-2" />
          <Skeleton className="h-12 w-full rounded-lg" />
        </div>
        <div>
          <Skeleton className="h-4 w-24 mb-2" />
          <Skeleton className="h-12 w-full rounded-lg" />
        </div>
      </div>
      <div>
        <Skeleton className="h-4 w-16 mb-2" />
        <Skeleton className="h-12 w-full rounded-lg" />
      </div>
      <div>
        <Skeleton className="h-4 w-20 mb-2" />
        <Skeleton className="h-32 w-full rounded-lg" />
      </div>
      <Skeleton className="h-14 w-full rounded-lg" />
    </div>
  );
}
