import React, { useState, useRef, useEffect } from 'react';

interface BeforeAfterSliderProps {
  beforeImg: string;
  afterImg: string;
}

const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({ beforeImg, afterImg }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderX, setSliderX] = useState(50); // percentage
  const [isDragging, setIsDragging] = useState(false);
  const [containerWidth, setContainerWidth] = useState(0); // for dynamic min-width

  const handleMove = (e: MouseEvent | TouchEvent) => {
    if (!containerRef.current) return;
    const container = containerRef.current.getBoundingClientRect();
    const clientX = (e instanceof MouseEvent ? e.clientX : e.touches[0].clientX) - container.left;
    const newSliderX = Math.max(0, Math.min((clientX / container.width) * 100, 100));
    setSliderX(newSliderX);
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  const handleDragEnd = () => {
    setIsDragging(false);
  };

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

  // Track container width
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
      className="relative w-full mx-auto aspect-video overflow-hidden rounded-2xl shadow-lg select-none "
      style={{ maxWidth: '100%' }} // override fixed max-w-3xl
      onMouseDown={handleDragStart}
      onTouchStart={handleDragStart}
      onMouseUp={handleDragEnd}
      onTouchEnd={handleDragEnd}
    >
      {/* Before Image */}
      <img src={beforeImg} alt="Before" className="absolute inset-0 w-full h-full object-cover" />

      {/* After Image */}
      <div
        className="absolute inset-0 overflow-hidden "
        style={{ width: `${sliderX}%` }}
      >
        <div style={{ minWidth: `${containerWidth}px` }} className="">
          <img src={afterImg} alt="After" className="w-full h-full object-cover" />
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
