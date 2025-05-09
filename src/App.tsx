import React from "react";
import { useEffect, useState } from "react";
import type { SkipData } from "./types/SkipTypes";
import { useSkipsByLocation } from "./hooks/useSkipByLocation";
import LoadingSkeleton from "./component/LoadingSkeleton";
import ErrorDisplay from "./component/ErrorDisplay";
import SkipGrid from "./component/SkipGrid";
import SelectedSkipFooter from "./component/SelectedSkipFooter";

export default function App() {
  const [selectedSkip, setSelectedSkip] = useState<SkipData | null>(null);
  const [minLoadingElapsed, setMinLoadingElapsed] = useState(false);

  const postcode = "NR32";
  const area = "Lowestoft";

  const { data: skips, isLoading, error } = useSkipsByLocation(postcode, area);

  useEffect(() => {
    const timer = setTimeout(() => setMinLoadingElapsed(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading || !minLoadingElapsed) {
    return <LoadingSkeleton />;
  }

  if (error) {
    return <ErrorDisplay message={error.message} />;
  }

  if (!skips || skips.length === 0) {
    return (
      <ErrorDisplay
        message={`No skips available for ${postcode}${
          area ? ` in ${area}` : ""
        }.`}
        isEmpty
      />
    );
  }

  return (
    <main className="min-h-screen bg-[#121212] text-white py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto mb-32">
        <header className="text-center mb-10">
          <h1 className="text-3xl font-bold mb-2">Choose Your Skip Size</h1>
          <p className="text-gray-400">
            Select the skip size that best suits your needs
          </p>
        </header>

        <SkipGrid
          skips={skips}
          selectedSkip={selectedSkip}
          onSelect={setSelectedSkip}
        />
      </div>

      {selectedSkip && (
        <SelectedSkipFooter
          skip={selectedSkip}
          onBack={() => setSelectedSkip(null)}
        />
      )}
    </main>
  );
}
