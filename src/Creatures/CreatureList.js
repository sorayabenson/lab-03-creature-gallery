import React from 'react';
import CreatureItem from './CreatureItem.js';
import creaturesArray from '../data.js';
import './Creatures.css';

class CreatureList extends React.Component {
    
    render() {

        const CreatureWrapper = creaturesArray.map(
            creature => <CreatureItem 
                key={creature.keyword}
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