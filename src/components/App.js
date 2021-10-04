import React from 'react';
import Post from './Post';

export default class App extends React.Component {
  render() {
    return (
      <>
        <h1>Titulo</h1>
        
        <Post title="testando o title"/>

        <Post title="testando o title 2"/>

        <Post title="testando o title 3"/>
      </>
    )
  }
}
