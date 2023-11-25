import React, {useState} from 'react'

import MyLists from './components/MyLists';
import ListCreationHeader from './components/ListCreationHeader';

const App = () => {

  const [myLists, setMyLists] = useState([]);

  const sendListToMyList = (listInfo) => {
    setMyLists(myLists.concat(listInfo));
  }

  return (
    <div className="App px-2 py-4">
      <h1 className="text-6xl text-blue-500 font-sans">Lists</h1>
      <ListCreationHeader sendListToMyList={sendListToMyList} />
      <MyLists myLists={myLists} />
    </div>
  );
}

export default App;
