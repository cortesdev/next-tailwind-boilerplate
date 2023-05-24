import Container from 'components/Container'
import HeroHeadline from 'components/HeroHeadline'

export default function Home() {
  return (
    <Container>
      <div className='flex flex-col items-center justify-center inset-0'>
        <HeroHeadline slides={['Typescript.', 'TailwindCss.', 'NextJs.']} />
      </div>
    </Container>
  )
}
