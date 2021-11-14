import './App.css';
import Main from './Components/Main';
import { Route, Routes } from "react-router";
import PostPage from './Components/PostPage';

function App() {
  return (
    <div className="App">
      <Routes>
          <Route path="/" exact element={<Main />} />
          <Route path="/post" exact element={<PostPage />} />
        </Routes>
    </div>
  );
}

export default App;
