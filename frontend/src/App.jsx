import Footer from "./components/footer/footer";
import Nav from "./components/nav/Nav";
import HomePage from "./pages/HomePage";
import './index.scss'
import MainRoutes from "./routes/MainRoutes";

const App = () => {
  return (
    <>
    <Nav />
      <main>
        <MainRoutes />
      </main>
    <Footer />  
    </>
  )
}

export default App
