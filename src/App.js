import './App.css';
import creaturesArray from './data.js';
import CreatureHeader from './Header/Header.js';
import CreatureList from './Creatures/CreatureList.js';
// import CreatureMain from './Main/Main.js';


function App() {
  return (
    <div className="App">
      
      <CreatureHeader />

      <main className="creatureMain">

        <div className="creatureGallery">
              
              <CreatureList />

        </div>

        <div className="creatureFilter">
            <h1>creature filter here</h1>
        </div>

      </main>

    </div>
  );
}

export default App;
