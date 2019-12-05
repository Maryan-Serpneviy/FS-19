import React from 'react';
import './App.css';
import Pagination from './Pagination'

class App extends React.Component {
  state = {
    page: null
  }

  onPageChange = event => {
    this.setState({ page: event.target.innerText })
  }

  render() {
    return (
      <div className="App">
        <h1>React pagination</h1>
        <Pagination 
          total={42} /* required */
          perPage={5} /* optional with 5 by default */
          page={this.state.page} /* optional with 1 by default */
          onPageChange={this.onPageChange}
        />
      </div>
    );
  }
}

export default App;
