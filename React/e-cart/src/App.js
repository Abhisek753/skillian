import logo from './logo.svg';
import './App.css';
import GlobalRoute from './routes/GlobalRoute';
import { useTheme } from './context/ThemeContext';

function App() {
    const {theme}=useTheme()
  return (
    <div className={`App ${theme=="dark"?'bg-black text-white':"bg-white text-black"}`}>
      <GlobalRoute/>
    </div>
  );
}

export default App;
