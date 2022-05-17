import './App.css';
import login from './Component/login';
import userName from './Component/userName';
import password from './Component/password';
import button from './Component/button';

function App() {
  return (
    <div className="App">
    <div className = 'login'> {login()} </div>
        <div className = 'input'> {userName()} </div>
        <div className = 'input'> {password()} </div>
        <div className = 'btn'> {button()} </div>
    </div>
  );
}

export default App;
