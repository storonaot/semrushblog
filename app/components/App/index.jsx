import { Header } from '_shared'

const App = ({ children }) => (
  <div>
    <Header />
    {children}
  </div>
)

App.propTypes = {
  children: PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.node),
    React.PropTypes.node
  ]).isRequired
}

export default App
