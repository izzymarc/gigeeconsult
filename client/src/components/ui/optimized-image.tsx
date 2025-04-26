import { useEffect, useState, useRef } from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  blur?: boolean;
  onLoad?: () => void;
}

export function OptimizedImage({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  blur = true,
  onLoad,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (priority) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: '200px', // Start loading the image when it's 200px from viewport
        threshold: 0.01,
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [priority]);

  const handleImageLoad = () => {
    setIsLoaded(true);
    if (onLoad) onLoad();
  };

  const imgStyle = {
    objectFit: 'cover',
    transition: 'filter 0.3s ease, opacity 0.3s ease',
    filter: isLoaded || !blur ? 'blur(0)' : 'blur(10px)',
    opacity: isLoaded ? 1 : 0.5,
  } as React.CSSProperties;

  const containerStyle: React.CSSProperties = {
    ...(width && height ? { aspectRatio: `${width}/${height}` } : {})
  };

  return (
    <div
      ref={imgRef}
      className={`overflow-hidden ${className}`}
      style={containerStyle}
    >
      {isInView && (
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          style={imgStyle}
          onLoad={handleImageLoad}
          loading={priority ? 'eager' : 'lazy'}
        />
      )}
      {!isInView && (
        <div
          style={{
            width: '100%',
            height: '100%',
            backgroundColor: '#f1f1f1',
          }}
        />
      )}
    </div>
  );
}