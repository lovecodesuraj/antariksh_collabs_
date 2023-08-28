import { Link, Routes, Route } from 'react-router-dom';
import BlogPost from './BlogPost';
import BlogPost2 from './BlogPost2';


function Blogpages() {
  const data = [
    {
      title: "blog1",
      linkTo: "/BlogPost",
    },
    {
      title: "blog2",
      linkTo: "/BlogPost2",
    }
  ];
  
  <Routes>
    <Route path='/BlogPost' element={<BlogPost/>}/>
    <Route path='/BlogPost2' element={<BlogPost2/>}/>
  </Routes>
  return (
    <>
      {
        data.map((item,index) => {
          console.log(item);
          return (
            <Link to={item.linkTo}>
              <h1>title:{item.title}</h1>
            </Link>
          );
        })
      }
    </>
  );
}

export default Blogpages;
