import './App.css';
import { Fragment } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import ListCard from './components/listCard';
import CreateCard from './components/createCard';
import EditCard from './components/editCard';

function App() {
  return (
    <Fragment>
      <Router>
        <Routes>
          <Route exact path='/' element={ <ListCard/> }/>
          <Route exact path='/create' element={ <CreateCard/> }/>
          <Route exact path='/edit' element={ <EditCard/> }/>
        </Routes>
      </Router>
    </Fragment>
  );
}

export default App;
