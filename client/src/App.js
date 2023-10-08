import logo from './logo.svg';
import './App.css';

function App() {
  return (
   <div>
    <form>
    <fieldset>
    <h1>
      facebook 
    </h1>
    <input class = "feild" type="text" id="username" name="Username" Placeholder="Username"></input><br></br>
    
    <br></br>
    <input class = "feild" type="text" id="pwd" name="Password" Placeholder="Password"></input><br></br><br></br>

    <input class ="login" type="button" value="login"></input><br></br><br></br>

    <a class="fpassword" href="">forgot your Password</a>
    <a class="sfacebook" href="">signup for facebook</a>
    </fieldset>
    </form>
   </div>
  );
}

export default App;
