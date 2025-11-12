import "./openAccount.scss"
import Button from "../button/button"
import { Link } from "react-router-dom"

const OpenAccount = () => {
  return (
    <section className="openAccount">
      <div className="openAccount-container">
        <h2>Open a Zerodha account</h2>
        <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
        <Button className='btn' to="/signup">Sign up for free</Button>
      </div>
    </section>
  )
}

export default OpenAccount
