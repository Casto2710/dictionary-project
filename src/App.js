import logo from "./logo.svg";
import "./App.css";
import Dictionary from "./Dictionary"

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <img src={logo} className="App-logo 
        img-fluid" alt="logo" />
      </header>
      <main>
        <Dictionary defaultKeyword="Sunset"/>
      </main>
      <footer className="App-footer">
        <small>
          <a
            href="https://jolanta-studencka.netlify.app/" 
            target="_noreferrer"
            > Coded by Jolanta Studencka 
            </a>
            <br/>
             <a href="https://github.com/Casto2710/dictionary-project"
                target="_noreferrer"
                >
             and it's open-sourced on GitHub
           </a>
        </small>
        </footer>
     </div>
    </div>
  );
}


