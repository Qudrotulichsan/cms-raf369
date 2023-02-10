import logo from './logo.svg';
import './App.css';
import Header from '../src/components/Header';
import Menu from '../src/components/Menu';
import Dashboard from '../src/components/Dashboard';
import Footer from '../src/components/Footer';

function App() {
  return (
    <div class="wrapper">
      <Header />
      <Menu />
      <Dashboard />
      <Footer />
    </div>
  );
}

export default App;
