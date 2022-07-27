import './App.css';
import Header from './components/Header';
import About from './components/About/About';
import TechStack from './components/TechStack/TechStack';
import Work from './components/Work/Work';
import Resume from './components/Resume/Resume';

function App() {
    return (<>
        <Header/>
        <About/> 
        <TechStack/>
        <Work/>
        <Resume/>

    </>);
}

export default App;
