import { useEffect, useState } from 'react';
import { UpvoteList } from './Upvote/UpvoteList';
import { UpvoteListsData } from './Upvote/constants';
import { UpvoteDataType } from './Upvote/types';

function App() {
  const [lists, setLists] = useState<UpvoteDataType[]>(() => {
    const savedData = localStorage.getItem('upvoteLists');
    return savedData ? JSON.parse(savedData) : UpvoteListsData;
  });

  useEffect(() => {
    localStorage.setItem('upvoteLists', JSON.stringify(lists));
  }, [lists]);
  
  const handleAdd = (id: number) => () => {
    setLists(prev => {
      const newLists = prev.map(list => {
        const upvoteNum = id === list.id ? list.upvoteNum + 1 : list.upvoteNum;

        return {
          ...list,
          upvoteNum,
        }
      });

      return newLists;
    });
  };
  
  const clickUpvote = (id: number) => () => {
    setLists(prev => {
      const newLists = prev.map(list => {
        const isSelected = id === list.id ? !list.isSelected : list.isSelected;

        return {
          ...list,
          isSelected,
        }
      });

      return newLists;
    });
  };

  return (
    <div className='container'>
      <h1>Upvote Lists</h1>
      {
        lists.map((list, index) => {
          const { isSelected, upvoteNum, id } = list;

          return (
            <div key={`list_${id}`}>
              <h2>{`List ${index + 1}`}</h2>
              <UpvoteList 
                listId={id}
                isSelected={isSelected} 
                upvoteNum={upvoteNum} 
                handleAdd={handleAdd(id)}
                onClick={clickUpvote(id)}
              />
            </div>
          );
        })
      }
    </div>
  );
}

export default App;
