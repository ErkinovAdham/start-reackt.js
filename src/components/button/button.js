const Button = () => {
    const user = false;
    const login = "login";
  
    return <button>{user ? "logout" : login}</button>;
  };

  export default Button