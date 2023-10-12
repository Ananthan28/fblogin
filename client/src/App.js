import logo from './logo.svg';
import './App.css';
import MyButton from './component/button';

function App() {
  return (
    <div>
      <div class="top">
    <img src="https://static.xx.fbcdn.net/rsrc.php/yI/r/4aAhOWlwaXf.svg"></img>
    <form>
    <fieldset>
      <p>Log in to Facebook</p>
    <input class = "feild" type="text" id="username" name="Email address or Phone number" Placeholder="Email address or Phone number"></input><br></br>
    
    <br></br>
    <input class = "feild" type="text" id="pwd" name="Password" Placeholder="Password"></input><br></br><br></br>

    <input class ="login" type="button" value="login"></input><br></br><br></br>

    <a class="fpassword" href="">forgot your Password? .</a> &nbsp;
    <a class="sfacebook" href="">signup for facebook</a>
    </fieldset>
    </form>
    </div>
    <div>
      
    </div>
   </div>
  );
}

export default App;
