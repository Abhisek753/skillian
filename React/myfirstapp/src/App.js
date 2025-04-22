import logo from './logo.svg';
import './App.css';
import NavbarParent from './components/Navbar';
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import ParentComponent from './components/Props/ParentComponent';
import Child from './components/Props/Child';
import Combine from './components/Props/Index';
import Dummy from './Dummy';
import Mycomponent from './components/State/Mycomponent';
import Parentcomponent from './components/PropsData/Parentcomponent';

function App() {
  let data="bled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishin"
  return (
    <div className="App">
      {/* <h2>Kusumlata</h2> */}
      {/* <NavbarParent/>
    

       <div style={{display:"flex"}}>
      <Sidebar/>
       <Home/>
       </div> */}
     {/* <Combine/>
     <Dummy discription={data}/> */}
     {/* <Mycomponent/> */}


     <Parentcomponent/>
    </div>
  );
}

export default App;
