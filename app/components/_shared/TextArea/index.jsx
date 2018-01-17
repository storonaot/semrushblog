import Label from '_shared/Label'
import styles from './styles'

const TextArea = ({ style, value, label, name, placeholder, handleChange }) => (
  <div className={styles.wrapper}>
    {label && <Label htmlFor={name}>{label}</Label>}
    <textarea
      placeholder={placeholder}
      name={name}
      id={name}
      className={styles.textarea}
      style={style}
      value={value}
      onChange={(e) => { handleChange(e.target.value, name) }}
    />
  </div>
)

export default TextArea

TextArea.defaultProps = {
  style: null,
  value: null,
  label: null,
  placeholder: null
}

TextArea.propTypes = {
  style: PropTypes.shape({}),
  value: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  handleChange: PropTypes.func.isRequired
}
