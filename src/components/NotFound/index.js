// Write your code here
import './index.css'
import ThemeContext from '../../context/ThemeContext'
import NavBar from '../Navbar'

const NotFound = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme} = value
      return (
        <div>
          <NavBar />
          <div className="footer_containernot">
            <img
              className="not_found_image"
              src="https://assets.ccbp.in/frontend/react-js/not-found-img.png "
              alt="not found"
            />

            <h1 className={`desc ${isDarkTheme ? 'dark_desc_para' : ''}`}>
              Lost Your Way
            </h1>
            <p className={`desc ${isDarkTheme ? 'dark_desc_para' : ''}`}>
              We cannot seem to find the page
            </p>
          </div>
        </div>
      )
    }}
  </ThemeContext.Consumer>
)

export default NotFound
