import logo from './logo.svg';
import './App.css';
import Button from "./components/Button";
import "./components/Button.css";



const rot13 = (str) => {
  let strRot13 = "";
  str.split("").forEach(c => {
    let ascii = c.charCodeAt(0);
    if(65 <= ascii && ascii <= 90)
      strRot13 += String.fromCharCode(65 + ((ascii - 65) + 13) % 26);
    else if(97 <= ascii && ascii <= 122)
      strRot13 += String.fromCharCode(97 + ((ascii - 97) + 13) % 26);
    else
      strRot13 += c;
  });
  return strRot13;
}

const App = () => {
  return (
    <div className="App">
      <h1>Welcome to Rot13!</h1>
      <textarea name="" id="rot13-text" cols="30" rows="10"></textarea>
      <Button text="Rot13" onClick={() => {
        let rot13area = document.querySelector("#rot13-text");
        rot13area.value = rot13(rot13area.value);
      }}></Button>
    </div>
  );
}

export default App;
