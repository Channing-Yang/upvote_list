export type UpvoteType = {
  isSelected: boolean;
  onClick: () => void;
};

export type UpvoteListType = {
  isSelected: boolean;
  upvoteNum: number;
  onClick: () => void;
  handleAdd: () => void;
};

export type UpvoteArrayType = {
  isSelected: boolean;
  onClick: () => void;
  num: number;
};

export type UpvoteDataType = {
  isSelected: boolean;
  upvoteNum: number;
  id: number;
};