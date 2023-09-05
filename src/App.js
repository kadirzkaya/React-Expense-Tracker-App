import './App.css';
import Balance from './Components/Balance';
import History from './Components/History';
import Transaction from './Components/Transaction';

function App() {
  return (
    <div className="App d-flex flex-column p-5 flex-wrap">
      <div>
        <h2 className='m-0 p-0 header'>EXPENSE TRACKER</h2>
      </div>
      <div className='d-flex justify-content-center'>
        <div className='transaction p-5 action'>
          <Transaction />
        </div>
        <div className='details p-5'>
          <Balance />
          <History />
        </div>
      </div>
    </div>
  );
}

export default App;
