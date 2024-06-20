import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Events from "./pages/Events"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import BottomNav from "./Components/BottomNav"
import Gallery from "./pages/Gallery"
import TopButton from "./Components/TopButton"
import BookButton from "./Components/BookButton"
import ChatButton from "./Components/ChatButton"


function App() {

  return (
    <>
      <div>
        <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/home" element={<Home/>}/>
          <Route path="/events" element={<Events/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
        </Routes>
        <BottomNav/>
        <Footer/>
        <BookButton/>
        <ChatButton/>
        <TopButton/>
      </div>

    </>
  )
}

export default App
