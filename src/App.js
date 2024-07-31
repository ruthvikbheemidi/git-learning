import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {addMoney} from './redux/slices/balance.slice'

function App() {
  const dispatch=useDispatch()
  const amount=useSelector((state)=>state.balance.amount);
  return (
    <div className="App">
       balance:{amount} 
    </div>
  );
}

export default App;
