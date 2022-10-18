import logo from './logo.svg';
import './App.css';

const Hello = (props) => {
  return(
    <code>Hello {props.friend}, my name is {props.name}!</code>
  )
}

const Footer = () => {
  return (
    <div>
        Starter app created by <a href='https://github.com/kroncatti'> kroncatti</a>
    </div>
  )
}



const App = () => {
  const friendEnglish = "my friend"
  const friendFrench = "mon ami"
  const friendGerman = "mein Freund"
  const name = "Kaleb"

  return (
    <div className="App">
      <header className="App-header">
        <Hello friend={friendEnglish} name={name}/>
        <Hello friend={friendFrench} name={name}/>
        <Hello friend={friendGerman} name={name}/>
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
