import React from 'react';
import Card from './Card'
import DropdownButton from './DropdownButton'


export default class App extends React.Component {
  render() {
    return (
      <>
        <DropdownButton />
        <Card />
      </>
    )
  }
}
