import './App.css';
import { Fragment } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import List from './components/Member/List';
import Add from './components/Member/Add';
import Edit from './components/Member/Edit';

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route exact path="/" element={ <List/> }/>
          <Route exact path="/add" element={ <Add/> }/>
          <Route exact path="/edit/:memberId" element={ <Edit/> }/>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
