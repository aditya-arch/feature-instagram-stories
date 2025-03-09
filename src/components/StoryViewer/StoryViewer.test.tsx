import { render, screen } from '@testing-library/react';
import StoryViewer from './StoryViewer';
import { expect } from 'chai';
import 'chai-dom';

const mockStories = [
  { id: '1', imageUrl: 'test1.jpg' },
  { id: '2', imageUrl: 'test2.jpg' }
];

test('displays initial story', () => {
  render(<StoryViewer stories={mockStories} initialIndex={0} onClose={() => {}} />);
  const image = screen.getByAltText('Story'); 
  expect(image).to.have.attr('src', 'test1.jpg'); 
});