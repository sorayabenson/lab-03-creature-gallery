import './App.css';
import React from 'react';
import creaturesArray from './data.js';
import CreatureHeader from './Header/Header.js';
import CreatureList from './Creatures/CreatureList.js';
import Dropdown from './Dropdown.js';

export default class App extends React.Component {
  state = {
    keyword: '',
    horns: '',
  }

handleKeywordChange = (e) => {
  this.setState({
    keyword: e.target.value
  })
}

handleHornsChange = (e) => {
  this.setState({
    horns: Number(e.target.value)
  })
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
                <Dropdown
                  currentValue={this.state.keyword}
                  handelChange={this.handleKeywordChange}
                  options={['addax', 'chameleon', 'dragon', 'lizard', 'markhor', 'mouflon', 'narwhal', 'rhino', 'triceratops', 'unicorn', 'unilego']}
                />
                

                # of horns:
                <Dropdown 
                  currentValue={this.state.horns}
                  handelChange={this.handleHornsChange}
                  options={[1, 2, 3, 100]}
                />

              </form>

          </div>

        </main>

      </div>
    )
  }
}