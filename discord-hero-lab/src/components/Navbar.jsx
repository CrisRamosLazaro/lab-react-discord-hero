import discordLogo from '../assets/discord-logo-white.png'
import menuIcon from '../assets/menu-icon.png'

const Navbar = () => {

    return (
        <div className="navbar">
            <div className="nav-box">
                <img src={discordLogo} alt="Discord Logo" />
            </div>

            <div className="nav-box">
                <img src={menuIcon} alt="Menu Icon" />
            </div>

        </div>
    )
}

export default Navbar