// Write your code here
import {Link} from 'react-router-dom'
import './index.css'
import ThemeContext from '../../context/ThemeContext'

const NavBar = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const toggleclicked = () => {
        toggleTheme()
      }

      return (
        <div className={`nav_container ${isDarkTheme ? 'darktheme' : ''}`}>
          <img
            src={
              isDarkTheme
                ? 'https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png'
                : 'https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png'
            }
            alt="website logo"
            className="logo"
          />
          <ul className="list_item">
            <li>
              <Link className="links" to="/">
                <h1 className={`heading ${isDarkTheme ? 'dark_desc' : ''}`}>
                  Home
                </h1>
              </Link>
            </li>
            <li>
              <Link className="links" to="/about">
                <h1 className={`heading ${isDarkTheme ? 'dark_desc' : ''}`}>
                  About
                </h1>
              </Link>
            </li>
          </ul>
          <button
            data-testid="theme"
            onClick={toggleclicked}
            type="button"
            className="btn"
          >
            <img
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
              }
              alt="theme"
              className="btn_logo"
            />
          </button>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NavBar
