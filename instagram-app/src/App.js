import React from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './components/PostContainer/PostContainer';
import SearchBar from './components/SearchBar/SearchBar';

 
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
        <SearchBar />
        {this.state.data.map(item => {
          return <PostContainer data={item} key={item.timestamp}/>
        })}
      </div>
    );
  }
}

export default App;
