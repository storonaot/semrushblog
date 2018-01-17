import Label from '_shared/Label'
import styles from './styles'

const TextField = ({ value, label, name, placeholder, handleChange }) => (
  <div className={styles.wrapper}>
    {label && <Label htmlFor={name}>{label}</Label>}
    <input
      className={styles.field}
      id={name}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={(e) => { handleChange(e.target.value, name) }}
    />
  </div>
)

export default TextField

TextField.defaultProps = {
  value: null,
  label: null,
  placeholder: null
}

TextField.propTypes = {
  value: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func.isRequired
}
