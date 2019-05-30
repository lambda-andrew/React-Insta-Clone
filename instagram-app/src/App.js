import React, {Component} from 'react';
import './App.css';
import PostsPage from './components/PostContainer/PostsPage';
import withAuthenticate from './authentication/withAuthenticate';
import Login from './components/Login/Login';


const ComponentFromWithAuthenticate = withAuthenticate(PostsPage)(Login)

class App extends Component {

  constructor() {
    super()

    this.state = {
      isLoggedIn: true
    }
  }

  render() {
    return(
      <div>
        <ComponentFromWithAuthenticate />
      </div>
    )
  }
}

export default App;







// import React, {Component} from 'react';
// import './App.css';
// import dummyData from './dummy-data';

// import SearchBar from './components/SearchBar/SearchBar';
// import PostContainer from './components/PostContainer/PostContainer';

// class App extends Component {

// constructor(){
//    super();

//    this.state = {
//      dummyData: dummyData
//    }
// }


// componentDidMount(){
//    this.setState({
//      dummyData: dummyData
//    })
// }


//   render() {
//     return (
//       <div className="App" style={{width: "600px", margin: "0 auto"}} >
//         <SearchBar />
//          {
//            this.state.dummyData.map(dataContent => {
//               return (<PostContainer  dataContent={dataContent} key={dataContent.timestamp}/>)
//            })
//          }
//       </div>
//     );
//     }
// }




// export default App;

