import React from 'react';
import { UpvoteArrayType, UpvoteListType } from './types';
import { Upvote } from './Upvote';
import './style.scss';

const UpvoteArray: React.FC<UpvoteArrayType> = ({
  isSelected,
  onClick,
  num,
}) => {
  return (
    <>
      {
        Array.from({ length: num }).map((_, index) => {
          return (
            <Upvote key={index} isSelected={isSelected} onClick={onClick} />
          );
        })
      }
    </>
  );
};

export const UpvoteList: React.FC<UpvoteListType> = ({ isSelected, upvoteNum, onClick, handleAdd }) => {
  return (
    <div className='upvoteList'>
      <div className='upvoteArray'>
        <div>
          <UpvoteArray
            isSelected={isSelected}
            onClick={onClick}
            num={upvoteNum}
          />
        </div>
      </div>
      <button 
        className='create'
        onClick={handleAdd}
        aria-label='add upvote'
        data-testid='upvoteCreate'
      >
        +
      </button>
    </div>
  );
};