import './App.css';
import React from 'react';
import creaturesArray from './data.js';
import CreatureHeader from './Header/Header.js';
import CreatureList from './Creatures/CreatureList.js';

export default class App extends React.Component {
  state = {
    keyword: '',
    horns: '',
  }

  render() {
    const filteredCreatures = creaturesArray.filter((creature) => {
      
      // if no keyword or horns are selected
      if (!this.state.keyword && !this.state.horns) return true;

      // if there is a keyword selected but no horns 
      if (this.state.keyword && !this.state.horns) {
        if (creature.keyword === this.state.keyword) return true;
      }

      // if there is horns selected but no keyword
      if (this.state.horns && !this.state.keyword) {
        if (creature.horns === this.state.horns) return true;
      }

      // if there is both keyword and horns selected
      if (this.state.keyword && this.state.horns) {
        if (creature.keyword === this.state.keyword && creature.horns === this.state.horns) return true;
      }

      return false;
    });
  
    return (
      <div className="App">
        
        <CreatureHeader />

        <main className="creatureMain">

          <div className="creatureGallery">
                
                <CreatureList filteredCreatures={filteredCreatures}/>

          </div>

          <div className="creatureFilter">
              <form className="creatureForm">
                pick some cuties:
                <select
                  className="creatureSelect"
                  value={this.state.keyword}
                  onChange={(e) => {
                    this.setState({
                      keyword: e.target.value
                    })
                  }}
                >
                  <option value="">all</option>
                  <option value="addax">addax</option>
                  <option value="chameleon">chameleon</option>
                  <option value="dragon">dragon</option>
                  <option value="lizard">lizard</option>
                  <option value="markhor">markhor</option>
                  <option value="mouflon">mouflon</option>
                  <option value="narwhal">narwhal</option>
                  <option value="rhino">rhino</option>
                  <option value="triceratops">triceratops</option>
                  <option value="unicorn">unicorn</option>
                  <option value="unilego">unilego</option>
                </select>

                # of horns:
                <select
                  className="creatureSelect"
                  value={this.state.horns}
                  onChange={(e) => {
                    this.setState({
                      horns: Number(e.target.value)
                    })
                  }}
                >
                  <option value="">all</option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="100">100</option>
                </select>

              </form>

          </div>

        </main>

      </div>
    )
  }
}