import React from 'react';

class Dropdown extends React.Component {

    render() {

        return ( 
            <select
            className="creatureSelect"
            value={this.state.currentValue}
            onChange={this.props.handelChange}
            >
                {
                this.props.options.map(
                optionItem => <option 
                value={optionItem}>{optionItem}</option>)
                }
                
            </select>
            );
    }
}

export default Dropdown;