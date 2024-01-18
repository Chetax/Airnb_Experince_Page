
import './App.css';
import Navbar from './Component/Navabar/Navbar';
import Hero from './Component/Hero/Hero';
import Info from './Component/Infosection/Info';
import Main from './Component/Main/Main';
function App() {
  return (
    <div className="App" style={{width:'100vw'}}>
      <Navbar/>
      <Hero/>
      <Info/>
      <Main/>
    </div>
  );
}

export default App;
