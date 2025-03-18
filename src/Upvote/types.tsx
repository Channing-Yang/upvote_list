export type UpvoteType = {
  isSelected: boolean;
  onClick: () => void;
};

export type UpvoteListType = {
  listId: number;
  isSelected: boolean;
  upvoteNum: number;
  onClick: () => void;
  handleAdd: () => void;
};

export type UpvoteArrayType = {
  listId: number;
  isSelected: boolean;
  onClick: () => void;
  num: number;
};

export type UpvoteDataType = {
  isSelected: boolean;
  upvoteNum: number;
  id: number;
};