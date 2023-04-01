import React, { useState } from 'react';
import './App.scss';
import Buttons from './components/buttons';
import Table from './components/table';

function App() {
  const [anySelectRow, setAnySelectRow] = useState(false);

  return (
    <div className="App" >
      <Table setAnySelectRow={setAnySelectRow} />
      <Buttons anySelectRow={anySelectRow}/>
    </div>
  );
}

export default App;
