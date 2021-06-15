import './index.css';
import Logo from './logo.png';
import LogoSvg from './logo.svg';

//components
import Counter from './components/Counter';

const App = () => {
  return (
    <>
      <h1>Mbuthia React TypeScript Template</h1>
      <h1>
        {process.env.NODE_ENV} : {process.env.name}
      </h1>
      <img src={Logo} alt="React Logo" width="500" height="500" />
      <img src={LogoSvg} alt="React Logo" width="500" />
      <Counter />
    </>
  );
};

export default App;
