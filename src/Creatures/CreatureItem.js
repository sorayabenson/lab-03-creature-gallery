import React from 'react';
import './Creatures.css';

class CreatureItem extends React.Component {
    render () {
        return (
            <li className="creatureLi">
                <img alt={this.props.creatureProp.description} src={this.props.creatureProp.url} />
                <h3 className="name">{this.props.creatureProp.title}</h3>
                <p className="creatureDescription">{this.props.creatureProp.description}</p>
            </li>
        )
    }

}

// key={this.keyword}

export default CreatureItem;