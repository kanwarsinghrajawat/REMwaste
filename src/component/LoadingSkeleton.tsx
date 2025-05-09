import React from "react";
const LoadingSkeleton = () => {
  return (
    <main className="min-h-screen bg-[#121212] text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mb-32">
        <header className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">Choose Your Skip Size</h1>
          <p className="text-gray-400">
            Select the skip size that best suits your needs
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="w-full rounded-md bg-[#252525] p-6 animate-pulse"
            >
              <div className="skeleton rounded-md w-full h-48 mb-4" />

              <div className="flex items-center justify-between mb-2">
                <div className="skeleton rounded w-1/3 h-6" />
                <div className="skeleton rounded-full w-16 h-6" />
              </div>

              <div className="space-y-2">
                <div className="skeleton rounded w-2/3 h-4" />
                <div className="skeleton rounded w-1/2 h-4" />
              </div>

              <div className="skeleton rounded w-full h-10 mt-6" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};
export default LoadingSkeleton;
