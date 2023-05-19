import "./App.css";
import Header from "../header/header"
import Field from "../field/field"
import Button from "../button/button"
import {Component} from "react";

class User extends Component {
    constructor(props) {
      supper(props)
      this.state = {
        counter:10,
      }
    }

    clickMandler = () => {
      this.setState.counter +1
    }
}


  render() {
    const { firstName, lastName, link } = this.props

    return (
      <div className="m-50 mx-5">
      <div className="border p-3 mt-5">
        <h4>
          mening ismim - {firstName}, sharifim - {lastName}
        </h4>
        <a href={link}>Youtube kanalim</a>
        <div className="mt-3">
            <button onClick={this.clickMandler} className="btn btn-success">
                Click
            </button>
            <p>{this.this.state.counter}</p>
        </div>
      </div>
      </div>
    );
  }
}

const App = () => {
  return (
    <div>
      <User firstName="Adham" lastName="Erkinov" link="youtube.com" />
      <User firstName="Omar" lastName="abdulloh" link="google.com" />
    </div>
  );
};

// function App() {
//   return (
//     <div className="App">
//       <Header />
//       <Field />
//       <Button />
//     </div>
//   );
// }

export default App;
