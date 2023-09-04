import "./style.css"
import { Cover } from "./pages/cover"
import { Header } from "./components/header"
import { Slider } from "./pages/slider/index"
import { About } from "./pages/about/index"
import { Sponsors } from "./pages/sponsors/index"
import { Contact } from "./pages/contact/index"


function App() {


  return (
    <>
    <Header/>
    <Cover/>
    <Slider/>
    <About/>
    <Sponsors/>
    <Contact/>
  

    </>
  )
}

export default App
