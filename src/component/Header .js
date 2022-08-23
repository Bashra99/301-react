import React from 'react';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            titleName : "Horned Beasts"
        }
    }
    render() {
        return (
            <header >
                <p>{this.state.titleName}</p>
            </header>
        )
    }
}

export default Header;
