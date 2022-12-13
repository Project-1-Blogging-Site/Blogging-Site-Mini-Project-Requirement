import {BrowserRouter,Routes,Route } from 'react-router-dom'
import './App.css';
import CreateAuthor from './AuthorComponents/CreateAuthor'
import LoginAuthor from './AuthorComponents/LoginAuthor';
function App() {
  return (
    <div >
      <div >
      <BrowserRouter>
      <Routes>
<Route path='/register' element={<CreateAuthor/>} />
<Route path='/login' element={<LoginAuthor/>} />

      </Routes>
      
      </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
