const Header = () => {
    const getText = () => {
      return (
        <div>
          <h1>Hello Adham</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            accusantium maxime rerum temporibus aliquid quidem? Excepturi,
            quibusdam! Blanditiis, veniam eos.
          </p>
        </div>
      );
    };
  
    return <div>{getText()}</div>;
  };
  export default Header