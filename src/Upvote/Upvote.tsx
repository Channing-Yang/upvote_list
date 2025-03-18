import React from 'react';
import { UpvoteType } from './types';
import { 
  DEFAULT_ARROW_COLOR, 
  DEFAULT_BUTTON_COLOR, 
  SELECTED_ARROW_COLOR, 
  SELECTED_BUTTON_COLOR 
} from './constants';

export const Upvote: React.FC<UpvoteType> = ({ isSelected, onClick }) => {
  const backgroundColor = isSelected ? SELECTED_BUTTON_COLOR : DEFAULT_BUTTON_COLOR;
  const arrowColor = isSelected ? SELECTED_ARROW_COLOR : DEFAULT_ARROW_COLOR;

  return (
    <button 
      className='upvote'
      onClick={onClick} 
      style={{
        backgroundColor,
      }}
      aria-label='upvote'
      data-testid='upvoteButton'
    >
      <svg 
        width='24' 
        height='24' 
        viewBox='0 0 24 24' 
        fill='none' 
        xmlns='http://www.w3.org/2000/svg'
      >
        <path 
          d='M12 4L4 20H20L12 4Z' 
          data-testid='upvoteArrow'
          fill={arrowColor}
        />
      </svg>
    </button>
  );
};