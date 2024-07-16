import Navbar from './component/Navbar/Navbar.js';
import Header from './component/Header/Header.js';
import About from './component/About/About.js';
import Clients from './component/Clients/Clients.js';
import Options from './component/Options/Options.js';
import Services from './component/Services/Services.js';
import Call from './component/Call/Call.js';
import Portfolio from './component/Portfolio/Portfolio.js';
import Count from './component/Count/Count.js';
import Customers from './component/Customers/Customers.js';
import Team from './component/Team/Team.js';
import Contact from './component/Contactus/Contact.js';
import Footer from './component/Footer/Footer.js';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Clients />
      <Options />
      <Services />
      <Call />
      <Portfolio />
      <Count />
      <Customers />
      <Team />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
