import React from 'react';
import { render, screen } from '@testing-library/react';
import StoriesList from './StoriesList';
import { expect } from 'chai';


const mockStories = [
  { id: '1', imageUrl: 'test1.jpg' },
  { id: '2', imageUrl: 'test2.jpg' }
];

test('renders story previews', () => {
  render(<StoriesList stories={mockStories} onStorySelect={() => {}} />);
  const images = screen.getAllByRole('img');
  expect(images).to.have.lengthOf(2); 
});