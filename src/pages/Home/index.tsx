import heroImg from '../../assets/img/cytonn-photography-n95VMLxqM2I-unsplash.jpg'
import wealthHealthLogo from '../../assets/wealthHealthLogo.jpg'
import '../Home/Home.scss'

function Home() {
  return (
    <main>
      <h2>Bienvenue</h2>
      <div className='main-hero'>
        <img className='main-hero-img' src={heroImg} alt='A handshake between two collegues' />
      </div>
      <div className='main-company'>
        <img src={wealthHealthLogo} alt='The Wealth Health company logo' />
      </div>
    </main>
  )
}

export default Home