import React, { useState, useEffect, useCallback } from 'react';
import './StoryViewer.css';
import ProgressBar from '../ProgressBar';
import { Story } from '../StoriesList/StoriesList';

interface StoryViewerProps {
  stories: Story[];
  initialIndex: number;
  onClose: () => void;
}

const StoryViewer: React.FC<StoryViewerProps> = ({
  stories,
  initialIndex,
  onClose
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [paused, setPaused] = useState(false);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % stories.length);
  }, [stories.length]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + stories.length) % stories.length);
  }, [stories.length]);

  const handleKeyPress = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'Escape') onClose();
    },
    [handleNext, handlePrev, onClose]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  useEffect(() => {
    if (paused) return;
    const timer = setTimeout(handleNext, 5000);
    return () => clearTimeout(timer);
  }, [currentIndex, paused, handleNext]);

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX } = e;
    const screenWidth = window.innerWidth;
    if (clientX < screenWidth / 3) {
      handlePrev();
    } else if (clientX > (2 * screenWidth) / 3) {
      handleNext();
    } else {
      onClose();
    }
  };

  return (
    <div className="story-viewer-overlay open" onClick={handleOverlayClick}>
      <div className="story-viewer-content">
        {/* Close button in top-right corner */}
        <button className="close-button" onClick={onClose}>
          &times;
        </button>

        <ProgressBar currentIndex={currentIndex} total={stories.length} paused={paused} />

        <div className="story-image-container">
          <img
            src={stories[currentIndex].imageUrl}
            alt="Story"
            className="story-image"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          />
        </div>
      </div>
    </div>
  );
};

export default React.memo(StoryViewer);
