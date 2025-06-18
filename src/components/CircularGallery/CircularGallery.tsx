import React, { useState, useEffect, useRef } from 'react';
import './CircularGallery.css';

export interface CircularGalleryProps {
  items: Array<{
    image: string;
    text: string;
  }>;
  bend?: number;
  textColor?: string;
  borderRadius?: number;
  onItemClick?: (index: number) => void;
}

export default function CircularGallery({ 
  items, 
  textColor = '#ffffff',
  borderRadius = 0.1,
  onItemClick
}: CircularGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startRotation, setStartRotation] = useState(0);

  const handleStart = (clientX: number) => {
    setIsDragging(true);
    setStartX(clientX);
    setStartRotation(rotation);
  };

  const handleMove = (clientX: number) => {
    if (!isDragging) return;
    const delta = (clientX - startX) * 0.25; // Further reduced sensitivity for smoother rotation with larger radius
    setRotation(startRotation + delta);
  };

  const handleEnd = () => {
    setIsDragging(false);
  };

  const handleClick = (index: number) => {
    if (onItemClick) {
      onItemClick(index);
    }
  };

  // Calculate radius based on window width
  const radius = Math.min(window.innerWidth * 0.6, 1500); // Reduced to 60% of window width, max 1500px to bring cards closer

  return (
    <div 
      ref={containerRef} 
      className="circular-gallery-container"
      onMouseDown={(e) => handleStart(e.clientX)}
      onMouseMove={(e) => handleMove(e.clientX)}
      onMouseUp={handleEnd}
      onMouseLeave={handleEnd}
      onTouchStart={(e) => handleStart(e.touches[0].clientX)}
      onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      onTouchEnd={handleEnd}
    >
      <div 
        className="gallery-items-container"
        style={{
          transform: `rotateY(${rotation}deg)`,
          transition: isDragging ? 'none' : 'transform 0.5s ease-out'
        }}
      >
        {items.map((item, index) => {
          const angle = (index / items.length) * 360;
          
          return (
            <div
              key={index}
              className="gallery-item"
              style={{
                transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                '--text-color': textColor,
                '--border-radius': `${borderRadius * 100}%`,
                width: '400px',
                height: '300px',
                marginLeft: '-200px',
                marginTop: '-150px',
              } as React.CSSProperties}
              onClick={() => handleClick(index)}
            >
              <img src={item.image} alt={item.text} />
              <div className="item-text">{item.text}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
} 