import React from 'react';
import './StoriesList.css';

export interface Story {
  id: string;
  imageUrl: string;
}

interface StoriesListProps {
  stories: Story[];
  onStorySelect: (index: number) => void;
}

const StoriesList: React.FC<StoriesListProps> = ({ stories, onStorySelect }) => {
  return (
    <div className="stories-list-container">
      {stories.map((story, index) => (
        <div
          key={story.id}
          className="story-preview"
          onClick={() => onStorySelect(index)}
        >
          <div className="story-preview-image-container">
            <img
              src={story.imageUrl}
              alt="Story preview"
              className="story-preview-image"
              loading="lazy"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default React.memo(StoriesList);
