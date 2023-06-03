import { Link } from 'react-router-dom'
import ErrorImg from '../../assets/404.svg'
import '../Error/Error.scss'

function Error() {

    return (
            <div className="errorMsg">
                <img src={ErrorImg} alt='404' />
                <p>Oups! La page que vous demandez n'existe pas.</p>
                <p className="home_link">
                    <Link to="/">Retourner sur la page d’accueil</Link>
                </p>
            </div>
    )
}

export default Error
