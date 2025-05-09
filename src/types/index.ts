import type { SkipData } from "./SkipTypes";

export interface ErrorDisplayProps {
  message: string;
  isEmpty?: boolean;
}
export interface SelectedSkipFooterProps {
  skip: SkipData;
  onBack: () => void;
}

export interface SkipCardProps {
  skip: SkipData;
  selected: boolean;
  onSelect: (skip: SkipData) => void;
}

export interface SkipGridProps {
  skips: SkipData[];
  selectedSkip: SkipData | null;
  onSelect: (skip: SkipData) => void;
}
