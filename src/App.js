import './App.css';
import Navbar from './component/Navbar'
import{
  BrowserRouter,
  Route,
  Routes,
  Navigate
}from 'react-router-dom'
import Formhook from './component/Formhook';
import About from './component/About';
import Center from './component/Center';
import Contactus from './component/Contactus';
import ClickCounter from './component/ClickCounter';
import HoverCounter from './component/HoverCounter';
import Moviedata from './component/Moviedata';

function App() {
  return(
    <>
    <BrowserRouter>
    {/* <Navbar/> */}
      <Routes>
        <Route path='/' element={<Navbar/>}>
          <Route index element={<Center />}/>
          <Route path='form/:id' element={<Formhook/>}/>
          <Route exact path='about/:id/:name' element={<About/>}/>
          <Route exact path='apidata/' element={<Moviedata/>}/>
        </Route>
        <Route path='contactus/' element={<Contactus/>}/>
        {/* navigate to home when no match route(url) happen */}
        <Route path='*' element={<Navigate to="/" />}/>
      </Routes>
      <ClickCounter name="extra props"/>
      <HoverCounter/>
    </BrowserRouter>
    </>
  )
}
export default App;
