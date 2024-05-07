import './App.css';
import MainContent from './components/main-content/MainContent';
import Navigation from './components/navigation/Navigation';

function App() {
    return (
        <div className='appStyle'>
            <Navigation/>
            <MainContent/>
        </div>
    );
}

export default App;
