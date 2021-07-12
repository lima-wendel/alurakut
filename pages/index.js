import MainGrid from './src/components/MainGrid'
import Box from '..src/components/Box'

//const Title = styled.h1`
//  font-size: 50px;
//  color: ${({ theme }) => theme.colors.primary};
//`

function ProfileSidebar(propriedades) {
  return (
    <Box>
      <img src={ `https://github.com/${propriedades.githubUser}.png` } style={{ borderRadius: '8px' }} />
   </Box>
  )
}

export default function Home() {
  const githubUser = 'lima-wendel';

  return (
  <MainGrid>
    <div className="profileArea" style={{ gridArea: 'profileArea' }}>

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
