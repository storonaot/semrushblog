import { render } from 'react-dom'
import { Router, hashHistory } from 'react-router'
import routes from './routes'
import '../stylesheets'

render(
  <Router history={hashHistory} routes={routes} />,
  document.getElementById('root')
)
