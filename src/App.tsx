import React, { useState } from 'react';
import StoriesList from './components/StoriesList/StoriesList';
import StoryViewer from './components/StoryViewer/StoryViewer';
import stories from './components/data/stories.json';
import './App.css';

const App: React.FC = () => {
  const [selectedStoryIndex, setSelectedStoryIndex] = useState<number | null>(null);

  return (
    <div className="app-container">
      {/* Title shifted to the left */}
      <h1 className="app-title">Instagram</h1>

      <StoriesList
        stories={stories}
        onStorySelect={(index) => setSelectedStoryIndex(index)}
      />

      {selectedStoryIndex !== null && (
        <StoryViewer
          stories={stories}
          initialIndex={selectedStoryIndex}
          onClose={() => setSelectedStoryIndex(null)}
        />
      )}
    </div>
  );
};

export default App;
