import './App.css';
import { Route } from 'react-router-dom'

//HOC
import HomeHOC from './HOC/HomeHOC';

//Components
import HomePage from './pages/HomePage';
import DetailPage from './pages/DetailPage';
import BagPage from './pages/BagPage';

function App() {
  return (
    <>
      <HomeHOC path="/" exact component={HomePage} />
      <HomeHOC path="/detailview:id" exact component={DetailPage} />
      <HomeHOC path="/bagview" exact component={BagPage} />
    </>
  );
}

export default App;
