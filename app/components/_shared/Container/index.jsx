import classNames from 'classnames'
import styles from './styles'

const Container = ({ children, size, style }) => {
  const classList = classNames({
    [styles.container]: true,
    [styles.isStrait]: size === 'strait'
  })

  return (
    <div className={classList} style={style}>
      {children}
    </div>
  )
}

export default Container

Container.defaultProps = {
  size: 'regular',
  style: null
}

Container.propTypes = {
  size: PropTypes.oneOf(['regular', 'strait']),
  children: PropTypes.oneOfType([PropTypes.node]).isRequired,
  style: PropTypes.shape({})
}
