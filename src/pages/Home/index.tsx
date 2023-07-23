import heroImgXL from '../../assets/img/cytonn-photography-n95VMLxqM2I-u_1200.jpg'
import heroImgL from '../../assets/img/cytonn-photography-n95VMLxqM2I-u_992.jpg'
import heroImgM from '../../assets/img/cytonn-photography-n95VMLxqM2I-u_768.jpg'
import heroImgS from '../../assets/img/cytonn-photography-n95VMLxqM2I-u_576.jpg'
import heroImgXS from '../../assets/img/cytonn-photography-n95VMLxqM2I-u_360.jpg'

import wealthHealthLogo from '../../assets/wealthHealthLogo.svg'
import '../Home/Home.scss'

function Home() {
  return (
    <main>
      <h2>Bienvenue</h2>
      <div className='main-hero'>
        <img
          loading='lazy'
          className='main-hero-img'
          srcSet={`${heroImgL} 992w,
                   ${heroImgM} 768w,
                   ${heroImgS} 576w,
                   ${heroImgXS} 360w,`}
          sizes="(max-width: 992px) 992px,
                 (max-width: 768px) 768px,
                 (max-width: 576px) 576px,
                 (max-width: 360px) 360px,
                 1200px"
          src={heroImgXL} alt='A handshake between two collegues' />
      </div>
      <div className='main-company'>
        <img loading='lazy' src={wealthHealthLogo} alt='The Wealth Health company logo' />
      </div>
    </main>
  )
}

export default Home