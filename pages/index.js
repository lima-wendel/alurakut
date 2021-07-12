import styled from 'styled-components'

//const Title = styled.h1`
//  font-size: 50px;
//  color: ${({ theme }) => theme.colors.primary};
//`

const Box = styled.div`    
  background: #ffffff;
  broder-radius: 8px;
`;
//Box maiúsculo pq é um componente e não uma tag

const MainGrid = styled.main`
  width: 100%;
  grid-gap: 10px;
  padding: 16px;
  margin-left: auto;
  margin-right: auto;
  max-width: 500px;
  .profileArea {
    display: none;
    @media(min-width: 860px) {
      display: block;
    }
  }

  @media(min-width: 860px) {
    max-width: 1110px;
    display: grid;
    grid-template-areas: "profileArea welcomeArea profileRelationsArea";
    grid-template-columns: 160px 1fr 312px;
}
`;


export default function Home() {
  return (
  <MainGrid>
    <div className="profileArea" style={{ gridArea: 'profileArea' }}>
      <Box>
       <img src="https://github.com/lima-wendel.png"></img>
      </Box>
    </div>
    <div className="welcomeArea" style={{ gridArea: 'welcomeArea' }}>
      <Box >
        Comunidades
      </Box>
    </div>
    <div className="profileRelationsArea" style={{ gridArea: 'profileRelationsArea' }}>
      <Box>
        Bem vindo
      </Box>
    </div>
  </MainGrid>
  )
}
