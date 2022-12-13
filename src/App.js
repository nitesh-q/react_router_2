import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componets/pages/Home";
import About from "./componets/pages/About";
import Contact from "./componets/pages/Contact";
import Layout from "./componets/Layout";
import Post from "./componets/pages/Post";
import PostLayout from "./componets/PostLayout";
import PostDetail from "./componets/pages/PostDetail";


function App() {
  
  return (
    <>
    
      <BrowserRouter>
        <Routes>
          {/*<Route path="/" element={<h1>hello router </h1>}/> */}
          <Route path="/" element={<Layout/>}>
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
              <Route path="post" element={<PostLayout/>}>
                <Route path=":category" element={<PostDetail/>}/>
                <Route index element={<Post/>}/>
              </Route>
            <Route index element={<Home/>}/>
          </Route>
         
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
