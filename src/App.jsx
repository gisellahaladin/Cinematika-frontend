import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <div className='bg-gradient-to-l from-slate-900 via-neutral-900 to-pink-700'>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;