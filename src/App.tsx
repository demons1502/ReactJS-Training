import { useEffect, useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import Counter from './components/Clock';

function App() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timerID = setInterval(() => {
      setCounter((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timerID);
    };
  }, []);

  if (counter > 2) return <h1>{counter}</h1>;

  return <Counter />;
}

export default App;
