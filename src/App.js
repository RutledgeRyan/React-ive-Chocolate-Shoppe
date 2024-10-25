import './App.css';
import Header from './Header.js';
import CandyList from './CandyList.js';


function App() {
  const headingTitle = "React-ively Chocolate Candies"
  return (
    <div className="App">
      <Header headingText = {headingTitle}/>
      <CandyList/>
    </div>
  );
}

export default App;
