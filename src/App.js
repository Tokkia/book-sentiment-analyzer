/*this is the root component of the application
contains the main structure of the app / the routing logic!
renders everything else*/
import './App.css';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
