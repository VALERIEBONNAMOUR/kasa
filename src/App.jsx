import { Outlet } from 'react-router-dom';
import './Styles/index.css';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

export default function App() {
    return (
      <>
      <Header />
      <main>
      <Outlet></Outlet>
      </main>
       <Footer />
      </>
    );
  }
