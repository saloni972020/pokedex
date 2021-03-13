import { useState, useRef, useEffect } from "react";
import Shimmer from "./Shimmer";

const LazyImage = (imageProps) => {
  const [shouldLoad, setShouldLoad] = useState(false);
  const placeholderRef = useRef(null);

  useEffect(() => {
    if (!shouldLoad && placeholderRef.current) {
      const observer = new IntersectionObserver(([{ intersectionRatio }]) => {
        if (intersectionRatio > 0 || (imageProps && imageProps.src)) {
          setShouldLoad(true);
        }
      });
      observer.observe(placeholderRef.current);
      return () => observer.disconnect();
    }
  }, [shouldLoad, placeholderRef]);

  return shouldLoad ? (
    <img {...imageProps} />
  ) : (
    <div className="img-placeholder" ref={placeholderRef}>
      <Shimmer type="img" />
    </div>
  );
};
export default LazyImage;
