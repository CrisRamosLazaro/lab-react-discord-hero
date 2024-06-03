import Button from "./Button"
import Navbar from "./Navbar"

const Hero = () => {

    return (
        <div className="hero">
            <Navbar />
            <div className="main-space">
                <div className="content">
                    <h1>IMAGINE A PLACE...</h1>
                    <p>...where you can belong to a school club, gaming group or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and talk more often.</p>
                    <Button buttonClass="button-light" text={"Download for Mac"} />
                    <Button buttonClass="button-dark" text={"Open Discord in your browser"} />
                </div>
            </div>
        </div>
    )

}

export default Hero