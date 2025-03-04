import { Link } from 'react-router-dom'
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./Error.css";

function Error() {
  return (
    
    <div className="error">
        <Header />
        <div className='error-container'>
      <span>404</span>
      <h2>Oops! La page que vous demandez n'existe pas.</h2>
      <Link to="/" className="error-link">
        Retourner sur la page d'accueil
      </Link>
      </div>
      <Footer />
    </div>
  )
}

export default Error