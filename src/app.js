import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { List, Search } from './components';

class App extends Component {
    render() {
        return (
            <div>
                <Search />
                <List />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('#app'));