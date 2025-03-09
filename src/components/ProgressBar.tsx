import React, { useEffect, useRef } from 'react';

interface ProgressBarProps {
  currentIndex: number;
  total: number;
  paused: boolean;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  currentIndex,
  total,
  paused
}) => {
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!progressRef.current) return;

    const bars = Array.from(progressRef.current.children) as HTMLElement[];
    bars.forEach((bar, index) => {
      if (index === currentIndex && !paused) {
        bar.style.width = '100%';
        bar.style.transition = 'width 5s linear';
      } else {
        bar.style.width = '0%';
        bar.style.transition = 'none';
      }
    });
  }, [currentIndex, paused]);

  return (
    <div className="progress-container" ref={progressRef}>
      {Array.from({ length: total }).map((_, index) => (
        <div key={index} className="progress-track">
          <div className="progress-bar" />
        </div>
      ))}
    </div>
  );
};

export default React.memo(ProgressBar);
