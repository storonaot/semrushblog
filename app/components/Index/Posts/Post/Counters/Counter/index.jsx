import classNames from 'classnames'
import styles from './styles'

const Counter = ({ type, value }) => {
  return (<div className={styles[type]}>{value}</div>)
}

export default Counter
