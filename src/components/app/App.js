import "./App.css";
import Header from "../header/header"
import Field from "../field/field"
import Button from "../button/button"
import Component from "react";

class User extends Component {
  render() {
    const { firstName, lastName, link } = this.props

    return (
      <div>
        <h1>
          mening ismim - {firstName}, sharifim - {lastName}
        </h1>
        <a href={link}>Youtube kanalim</a>
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
