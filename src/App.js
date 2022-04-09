import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './redux/index';

function App() {

  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  console.log(users);

  const { createUser } = bindActionCreators(actionCreators, dispatch)

  return (
    <div className="App">
      <button onClick={() => createUser()}> Add new user </button>
    </div>
  );
}

export default App;
