import { useEffect, useState  } from 'react';
import './App.css';

import Header from './components/Header'
import Main from './components/Main'
import { auth } from './services/firebase';



function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged(user => setUser(user))
  }, [])
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
