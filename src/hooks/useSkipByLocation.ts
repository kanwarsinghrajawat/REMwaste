import { useState, useEffect, useRef } from "react";
import type { SkipData } from "../types/SkipTypes";
import { API_BASE_URL, SKIPS_BY_LOCATION_PATH } from "../constants";

interface UseSkipsByLocationResult {
  data: SkipData[] | null;
  isLoading: boolean;
  error: Error | null;
}

export function useSkipsByLocation(
  postcode: string,
  area: string = ""
): UseSkipsByLocationResult {
  const [data, setData] = useState<SkipData[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const abortControllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!postcode) {
      setData(null);
      return;
    }
    abortControllerRef.current?.abort();
    const controller = new AbortController();
    abortControllerRef.current = controller;
    const params = new URLSearchParams({ postcode, area });
    const url = `${API_BASE_URL}${SKIPS_BY_LOCATION_PATH}?${params.toString()}`;

    const fetchSkips = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(url, { signal: controller.signal });
        if (!response.ok) {
          throw new Error(
            `API error: ${response.status} ${response.statusText}`
          );
        }
        const result = (await response.json()) as SkipData[];
        setData(result);
      } catch (err: unknown) {
        if ((err as Error).name !== "AbortError") {
          setError(err as Error);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchSkips();

    return () => {
      controller.abort();
    };
  }, [postcode, area]);

  return { data, isLoading, error };
}
