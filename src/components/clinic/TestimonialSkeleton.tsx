import React from "react";

const TestimonialSkeleton = () => {
  return (
    <div
      className="relative flex-shrink-0 rounded-2xl overflow-hidden bg-gray-200 animate-pulse"
      style={{
        width: "clamp(150px, 20vw, 210px)",
        aspectRatio: "9 / 16",
        boxShadow: "0 6px 28px rgba(0,0,0,0.06)",
      }}
    >
      {/* Skeleton for bottom info */}
      <div className="absolute bottom-0 left-0 right-0 p-4 space-y-2">
        {/* Stars skeleton */}
        <div className="flex gap-0.5">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="w-3 h-3 bg-gray-300 rounded-full" />
          ))}
        </div>
        {/* Name skeleton */}
        <div className="h-4 w-24 bg-gray-300 rounded" />
        {/* Designation skeleton */}
        <div className="h-3 w-16 bg-gray-300 rounded" />
      </div>
    </div>
  );
};

export default TestimonialSkeleton;
