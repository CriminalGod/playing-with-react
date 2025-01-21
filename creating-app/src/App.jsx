const greeting = <span>Hey React::</span>;

const title = (
  <h1>
    {greeting}
    The Title
  </h1>
);

const SubTitle = () => <h2>The SubTitle</h2>;

const App = () => (
  <div>

    {title}
    <SubTitle />
    {SubTitle()}
    
    <div>Something in div. Caculating 100 + 400 = {100 + 400}</div>
  </div>
);

export default App;


