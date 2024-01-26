import {BrowserRouter,Routes,Route} from "react-router-dom"

import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Layout from "./Layout"
import Service from "./pages/Service"
import Counter from "./Counter"
import Effect from "./Effect"
import Reducer from "./Reducer"
import Callback from "./Callback"

export default function App(){
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout/>}>

        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="service" element={<Service/>}/>
        <Route path="counter" element={<Counter/>}/>
        <Route path="effect" element={<Effect/>}/>
        <Route path="reducer" element={<Reducer/>}/>
        <Route path="callback" element={<Callback/>}/>
        

      </Route>
      </Routes>
      </BrowserRouter>
  )
}

// import React from 'react'
// import Basic from './Events/Basic'
// import Counter from './useState/Counter'

// export default function App() {
//   return (
//     <div>
//       <Basic/>
//       <Counter/>
//       </div>
//   )
// }
