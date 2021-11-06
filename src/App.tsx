import './App.css';
import Home from './Home';
import Result from './Result';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';

function App() {

  let [word, setWord] = useState<string>()

  return (
    <div className="App">
      <header>
        <img src="logo.png" alt="A speech bubble with a heart inside, next to it are the words 'Good Bad Words'"></img>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/result" element={<Result word={word}></Result>}></Route>
          <Route path="/" element={<Home checkWord={(wordFromHome) => setWord(wordFromHome)}></Home>}></Route>
        </Routes>
      </BrowserRouter>
      <footer>
        Made with ❤ by <a href="https://female-coders.at/">Female Coders Linz</a>
      </footer>
    </div>
  );
}

export default App;
