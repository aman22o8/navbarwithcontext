// Write your code here
// Write your code here
import './index.css'
import ThemeContext from '../../context/ThemeContext'
import NavBar from '../Navbar'

const About = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div>
          <NavBar />
          <div
            className={`footer_container_a ${isDarkTheme ? 'darktheme_a' : ''}`}
          >
            <img
              src={
                isDarkTheme
                  ? 'https://assets.ccbp.in/frontend/react-js/about-dark-img.png'
                  : 'https://assets.ccbp.in/frontend/react-js/about-light-img.png'
              }
              alt="about"
            />
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default About
