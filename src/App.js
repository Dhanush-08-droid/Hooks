// import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Home from './Pages/Home'
// import Layout from './Layout'
// import About from './Pages/About'
// import Contact from './Pages/Contact'

// export default function App() {
//   return (
//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Layout />}>
//           <Route index element={<Home />} />
//           <Route path="about" element={<About />} />
//           <Route path="contact" element={<Contact />} />
//         </Route>
//       </Routes>
//     </BrowserRouter>
//   )
// }

// import React from 'react'
// import Basics from './Events/Basics'
// import Counter from './Counter'

// export default function App() {
//   return (
//     <div><Basics/>
//     <Counter/>
//     </div>
//   )
// }
import React from 'react'
import Counter from './Counter'
import Effect from './Effect'
import Reducer from './Reducer'
import Footer from './Footer'
import Callback from './Callback'
export default function App() {
  return (
    <div><Counter/>
    <Effect/>
    <Reducer/>  <Callback/>
    <Footer/>
  
    </div>
  )
}
