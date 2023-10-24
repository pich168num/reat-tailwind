import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <p>Logo</p>
      <Profile />
    </>
  );
}

export default App;

// simple function component
export function Profile(){
  return(
    <img
      style={{width: 300}}
      src='https://eduport.webestica.com/assets/images/courses/4by3/07.jpg'
    />
  );
}
