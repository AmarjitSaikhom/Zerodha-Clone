import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <section className="not-found-section">
            <div className="not-found-container">
                <h4>404</h4>
                <h1>Kiaan couldn’t find that page</h1>
                <h5>We couldn’t find the page you were looking for. Visit <span><Link to={"/"}>Zerodha’s home page</Link></span></h5>
            </div>

        </section>
    )
}

export default NotFoundPage
