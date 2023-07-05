import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Signup from './components/signup';
import Signin from './components/signin';
import Dashboard from './components/dashboard';


function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route exact path='/' element={<Signup/>}/>
        <Route path='/signin' element={<Signin/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>
      </Routes>
     </Router>
    </div>
  );
};

export default App;
