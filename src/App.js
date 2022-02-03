import logo from './logo.svg';
import './App.css';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import MinHeightTextarea from './components/MinHeightTextarea';

function App() {
  return (
    <div className="App">
      <ResponsiveAppBar />
      <MinHeightTextarea />
    </div>
  );
}

export default App;
