import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import CreateAuthor from './AuthorComponents/CreateAuthor'
import LoginAuthor from './AuthorComponents/LoginAuthor';
import GetBlog from './BlogComponents/GetBlog';
import CreateBlog from './BlogComponents/CreateBlog';
import UpdateBlog from './BlogComponents/UpdateBlog';
//import GetBlogsByQuery from './BlogComponents/GetBlogsByQuery';

import DeleteBlog from './BlogComponents/DeleteBlog';
function App() {
  return (
    <div >
      <div >
        <BrowserRouter>
          <Routes>
            <Route path='/register' element={<CreateAuthor />} />
            <Route path='/login' element={<LoginAuthor />} />

            <Route path='/' element={<GetBlog />} />
            <Route path='/createBlog' element={<CreateBlog />} />

            <Route path='/updateBlog'>
              <Route path=':blogId' element={<UpdateBlog />} />
            </Route>

          {/* <Route path='/getBlogs' element={<GetBlogsByQuery />} /> */}

          <Route path='/deleteBlog/:blogId' element={<DeleteBlog />} />


          </Routes>

        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
