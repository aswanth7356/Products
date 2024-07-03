import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Productlist from './pages/Productlist';
import SingleView from './pages/SingleView';
import PageNotFounf from './pages/PageNotFounf';

function App() {
  return (
    <div className="App">
      <Header/>

      <Routes>          
        <Route path='/' element={<Productlist/>} ></Route>                            
        <Route path='/View/:id' element={<SingleView/>} ></Route>   
        <Route path='/*' element={<PageNotFounf/>}></Route>
      </Routes>

      <Footer/>
    </div>
  );
}

export default App;





// <Routes>
// ---------
// App.jsx il  Routes nte akathanu redirect avendathellam kodukkendath

// <Routes>                                      
//   <Productlist/>
//   <SingleView/>
// </Routes>


// <Route path='/*'    --->  universal path  (localhost il wrong name kodthal Page Not Found enna page lek povan)