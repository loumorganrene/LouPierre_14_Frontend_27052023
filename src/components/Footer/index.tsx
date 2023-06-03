import wealthHealthLogo from '../../assets/wealthHealthLogo.jpg'
import '../Footer/Footer.scss'

function Footer() {
  return (
    <footer className="footer">
      <a href={wealthHealthLogo}>
        <img className="footer-img" src={wealthHealthLogo} alt="Logo de Wealth Health" />
      </a>
    </footer>
  )
}

export default Footer