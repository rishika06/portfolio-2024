import { useState } from "react";

const useSeeMore = (initialVisibleCount) => {
  const [visibleCount, setVisibleCount] = useState(initialVisibleCount);
  const [isExpanded, setIsExpanded] = useState(false);

  const toggle = (totalCount) => {
    if (isExpanded) {
      setVisibleCount(initialVisibleCount);
    } else {
      setVisibleCount(totalCount);
    }
    setIsExpanded(!isExpanded);
  };

  return { visibleCount, isExpanded, toggle };
};

export default useSeeMore;
