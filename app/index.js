import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Dashboard from './components/Dashboad';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Dashboard />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
);