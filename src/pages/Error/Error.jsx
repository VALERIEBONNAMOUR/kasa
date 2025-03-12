import { Link } from 'react-router-dom'
import "./Error.css";

function Error() {
  return (
    
    <div className="error">
        <div className='error-container'>
      <span>404</span>
      <h2>Oops! La page que vous demandez n'existe pas.</h2>
      <Link to="/" className="error-link">
        Retourner sur la page d'accueil
      </Link>
      </div>
    </div>
  )
}

export default Error