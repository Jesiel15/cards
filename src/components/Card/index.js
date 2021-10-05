import React from 'react';
import { Container, ContainerBody, Card, Text, BoxText, Image } from './styles';
import ahri from '../../images/AhriFliperama.jpg'
import ezreal from '../../images/EzrealFliperama.jpg'
import cait from '../../images/CaitFliperama.jpg'


export default class App extends React.Component {

  render() {
    return (
      <Container>
        <Text fontSize={40}>Cards</Text>
        <ContainerBody>

          <Card>
            <Image src={ezreal} />
            <BoxText>
              <Text fontSize={20}>Nome: Ezreal</Text>
              <Text fontSize={12}>Sobrenome: Fliperama</Text>
            </BoxText>
          </Card>

          <Card>
            <Image src={ahri} />
            <BoxText>
              <Text fontSize={20}>Nome: Ahri</Text>
              <Text fontSize={12}>Sobrenome: Fliperama</Text>
            </BoxText>
          </Card>

          <Card>
            <Image src={cait} />
            <BoxText>
              <Text fontSize={20}>Nome: Caitlyn</Text>
              <Text fontSize={12}>Sobrenome: Fliperama</Text>
            </BoxText>
          </Card>

        </ContainerBody>
      </Container>
    )
  }
}
