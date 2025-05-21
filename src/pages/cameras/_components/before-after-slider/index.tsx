import { Spin } from 'antd';
import React, { useState, useRef, useEffect } from 'react';

interface BeforeAfterSliderProps {
  beforeImg: string;
  afterImg: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ beforeImg, afterImg }) => {
  const [loadingBefore, setLoadingBefore] = useState(true);
  const [loadingAfter, setLoadingAfter] = useState(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderX, setSliderX] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0);

  const handleMove = (e: MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;
    const container = containerRef.current.getBoundingClientRect();
    const clientX = (e instanceof MouseEvent ? e.clientX : e.touches[0].clientX) - container.left;
    const newSliderX = Math.max(0, Math.min((clientX / container.width) * 100, 100));
    setSliderX(newSliderX);
  };

  const handleDragStart = () => setIsDragging(true);
  const handleDragEnd = () => setIsDragging(false);

  // Reset loading states when image sources change
  useEffect(() => {
    setLoadingBefore(true);
  }, [beforeImg]);

  useEffect(() => {
    setLoadingAfter(true);
  }, [afterImg]);

  useEffect(() => {
    const onMove = (e: MouseEvent | TouchEvent) => {
      if (isDragging) handleMove(e);
    };
    const onUp = () => setIsDragging(false);

    window.addEventListener('mousemove', onMove);
    window.addEventListener('touchmove', onMove);
    window.addEventListener('mouseup', onUp);
    window.addEventListener('touchend', onUp);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('touchmove', onMove);
      window.removeEventListener('mouseup', onUp);
      window.removeEventListener('touchend', onUp);
    };
  }, [isDragging]);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full mx-auto aspect-video overflow-hidden rounded-2xl shadow-lg select-none"
      style={{ maxWidth: '100%' }}
      onMouseDown={handleDragStart}
      onTouchStart={handleDragStart}
      onMouseUp={handleDragEnd}
      onTouchEnd={handleDragEnd}
    >
      {/* Before Image */}
      {loadingBefore && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
          <Spin size="large" />
        </div>
      )}
      <img
        key={beforeImg}
        src={beforeImg}
        alt="Before"
        onLoad={() => setLoadingBefore(false)}
        onError={() => setLoadingBefore(false)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
          loadingBefore ? 'opacity-0' : 'opacity-100'
        }`}
      />

      {/* After Image */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderX}%` }}>
        {loadingAfter && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-black bg-opacity-50">
            <Spin size="large" />
          </div>
        )}
        <div style={{ minWidth: `${containerWidth}px` }}>
          <img
            key={afterImg}
            src={afterImg}
            alt="After"
            onLoad={() => setLoadingAfter(false)}
            onError={() => setLoadingAfter(false)}
            className={`w-full h-full object-cover transition-opacity duration-300 ${
              loadingAfter ? 'opacity-0' : 'opacity-100'
            }`}
          />
        </div>
      </div>

      {/* Divider Handle */}
      <div
        className="absolute top-0 bottom-0"
        style={{ left: `${sliderX}%`, transform: 'translateX(-50%)' }}
      >
        <div className="w-1 bg-[#FEDBA5] shadow-lg h-full relative">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-6 h-6 bg-[#FEDBA5] rounded-full border border-[#F58020] shadow flex items-center justify-center cursor-ew-resize">
            <div className="w-2 h-2 bg-[#F58020] rounded-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;
