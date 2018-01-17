import { Link } from 'react-router'
import classNames from 'classnames'
import styles from './styles'

const Button = ({ href, children, color, style, handleClick, className }) => {
  const btnClasslist = classNames({
    [className]: className,
    [styles.button]: true,
    [styles.isGhost]: color === 'ghost',
    [styles.isGreen]: color === 'green'
  })
  if (href) return <Link style={style} className={btnClasslist} to={href}>{children}</Link>
  return (<button onClick={handleClick} style={style} className={btnClasslist}>{children}</button>)
}

export default Button

Button.defaultProps = {
  href: null,
  color: 'blue',
  style: null,
  handleClick: () => {},
  className: null
}

Button.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string,
  color: PropTypes.oneOf(['ghost', 'blue', 'green']),
  style: PropTypes.shape({}),
  handleClick: PropTypes.func,
  className: PropTypes.string
}
