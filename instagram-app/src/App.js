import React from 'react';
import PostPage from './components/PostContainer/PostPage';
import Login from './components/Login/Login';
import withAuthenticate from './authentication/withAuthenticate';

const ComponentFromWithAuthenticate = withAuthenticate(PostPage)(Login);

export default class App extends React.Component {
  
  render() {
    return(
      <div className='App'>
        <ComponentFromWithAuthenticate />
      </div>
    );
  }
}

