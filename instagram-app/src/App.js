import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
 
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: dummyData
    }
  }

  render() {
    return(
      <div className='App'>
        {this.state.data.map(item => {
          return <PostContainer data={item} key={item.username}/>
        })}
      </div>
    );
  }
}

export default App;
