import styles from './styles'

const Label = ({ children, htmlFor }) => (
  <label htmlFor={htmlFor} className={styles.label}>{children}</label>
)

export default Label

Label.propTypes = {
  children: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired
}
