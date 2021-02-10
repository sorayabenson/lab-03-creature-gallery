import React from 'react';
import CreatureItem from './CreatureItem.js';
import './Creatures.css';

class CreatureList extends React.Component {
    
    render() {

        const CreatureWrapper = this.props.filteredCreatures.map( //eslint-disable-line
            creature => <CreatureItem 
                key={creature.title}
                creatureProp={creature} />)
        
        return ( 
            <ul
            className="creatureWrapper">
                {CreatureWrapper}
            </ul>
            );
    }
}

export default CreatureList;