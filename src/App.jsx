import './styles/App.css'
import Header from './components/Header';
import ContactCard from './components/ContactCard';

function App() {
  return (
    <div className="app-container">
      <div className="input-container">
        <Header />
        <ContactCard/>
      </div>
      
      <div className="cv-container">
      </div>
    </div>
  )
}

export default App
