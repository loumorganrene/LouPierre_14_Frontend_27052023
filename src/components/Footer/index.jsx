import wealthHealthLogo from '../../assets/wealthHealthLogo.jpg'
import '../Footer/Footer.scss'

function Footer() {
  return (
    <footer className="footer">
      <a href={wealthHealthLogo}>
        <img src={wealthHealthLogo} alt="Logo de Wealth Health" />
      </a>
      <p className="footer-text">Copyright 2020 Wealth Health</p>
    </footer>
  )
}

export default Footer