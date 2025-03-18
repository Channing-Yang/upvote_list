import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { UpvoteList } from '../UpvoteList';
import { 
  DEFAULT_ARROW_COLOR, 
  DEFAULT_BUTTON_COLOR, 
  SELECTED_ARROW_COLOR, 
  SELECTED_BUTTON_COLOR 
} from '../constants';

describe('<UpvoteList />', () => {
  it('calls onClick props when Upvote is clicked', () => {
    const mockClickUpvote = jest.fn();
    const { getByTestId } = render(
      <UpvoteList 
        isSelected={false}
        upvoteNum={1}
        handleAdd={jest.fn()}
        onClick={mockClickUpvote}
      />
    );

    const upvoteButton = getByTestId('upvoteButton');

    fireEvent.click(upvoteButton);

    expect(mockClickUpvote).toHaveBeenCalledTimes(1);
  });

  it('calls handleAdd props when add button is clicked', () => {
    const mockClickUpvote = jest.fn();
    const { getByTestId } = render(
      <UpvoteList 
        isSelected={false}
        upvoteNum={1}
        handleAdd={mockClickUpvote}
        onClick={jest.fn()}
      />
    );
    const upvoteCreate = getByTestId('upvoteCreate');

    fireEvent.click(upvoteCreate);

    expect(mockClickUpvote).toHaveBeenCalledTimes(1);
  });

  it('has Upvote showing the correct color', () => {
    const { getByTestId, rerender } = render(
      <UpvoteList 
        isSelected={false}
        upvoteNum={1}
        handleAdd={jest.fn()}
        onClick={jest.fn()}
      />
    );
    const upvoteButton = getByTestId('upvoteButton');
    const upvoteArrow = getByTestId('upvoteArrow');

    expect(upvoteButton).toHaveStyle(`background-color: ${DEFAULT_BUTTON_COLOR}`);
    expect(upvoteArrow).toHaveAttribute('fill', DEFAULT_ARROW_COLOR);

    rerender(
      <UpvoteList 
        isSelected={true}
        upvoteNum={1}
        handleAdd={jest.fn()}
        onClick={jest.fn()}
      />
    );

    expect(upvoteButton).toHaveStyle(`background-color: ${SELECTED_BUTTON_COLOR}`);
    expect(upvoteArrow).toHaveAttribute('fill', SELECTED_ARROW_COLOR);
  });
});
