import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  padding: 10px 10px;
  background: #f8f9fa;
  postion: absolute;
  bottom: 0;
  width: 100%;

  @media (max-width: 1000px) {
    padding: 30px 30px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1000px;
  margin: 0 auto;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 50px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(185px, 1fr));
  grid-gap: 10px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

const Flinks = styled.a`
  color: black;
  margin-bottom: 5px;
  font-size: 12px;
  text-decoration: none;
  &:hover {
    color: green;
    transition: 200ms ease-in;
  }
`;

const Heading = styled.p`
  font-size: 18px;
  color: black;
  margin-bottom: 10px;
  font-weight: bold;
`;

export const Footer = () => {
  return (
    <Box>
      <Container>
        <Row>
          <Column>
            <Heading>About us</Heading>
            <Flinks>Find more about us</Flinks>
          </Column>
          <Column>
            <Heading>Careers</Heading>
            <Flinks>Call us on ***</Flinks>
            <Flinks>Email us</Flinks>
          </Column>
          <Column>
            <Heading>Shops</Heading>
            <Flinks>Buy products</Flinks>
            <Flinks>Clothes</Flinks>
          </Column>
          <Column>
            <Heading>Social Media</Heading>
            <Flinks href='#'>
              <i className='fab fa-facebook-f'>
                <span style={{ marginLeft: '10px' }}>Facebook</span>
              </i>
            </Flinks>
            <Flinks href='#'>
              <i className='fab fa-instagram'>
                <span style={{ marginLeft: '10px' }}>Instagram</span>
              </i>
            </Flinks>
            <Flinks href='#'>
              <i className='fab fa-twitter'>
                <span style={{ marginLeft: '10px' }}>Twitter</span>
              </i>
            </Flinks>
            <Flinks href='#'>
              <i className='fab fa-youtube'>
                <span style={{ marginLeft: '10px' }}>Youtube</span>
              </i>
            </Flinks>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
