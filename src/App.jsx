import './styles/App.css'
import Header from './components/Header';
import GeneralInfoCard from './components/GeneralInfoCard';

function App() {
  return (
    <div className="app-container">
      <div className="input-container">
        <Header />
        <GeneralInfoCard />
      </div>
      
      <div className="cv-container">
      </div>
    </div>
  )
}

export default App
