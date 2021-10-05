import React from 'react';

import { Container, Button, Dropdown, DropdownButton, Ul, Li } from './styles';

export default class App extends React.Component {
  state = {
    open: false,
  };
  handleButtonClick = () => {
    this.setState((state) => {
      return {
        open: !state.open,
      };
    });
  };
  container = React.createRef();
  state = {
    open: false,
  };

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleClickOutside = (event) => {
    if (
      this.container.current &&
      !this.container.current.contains(event.target)
    ) {
      this.setState({
        open: false,
      });
    }
  };

  render() {
    return (
      <Container>


        <DropdownButton ref={this.container}>
          <Button onClick={this.handleButtonClick}>
            ☰
          </Button>
        </DropdownButton>



        <DropdownButton ref={this.container}>
          <Button onClick={this.handleButtonClick}>
            Dropdown Button
          </Button>
          {this.state.open && (
            <Dropdown>
              <Ul>
                <Li><a  href="https://www.youtube.com/">YouTube</a></Li>
                <Li>Option 2</Li>
                <Li>Option 3</Li>
                <Li>Option 4</Li>
              </Ul>
            </Dropdown>
          )}
        </DropdownButton>
      </Container>
    );
  }
}
