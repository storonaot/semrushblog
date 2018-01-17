import styles from './styles'

const CheckBox = ({ label, id, checked, name, handleChange, style }) => (
  <div style={style}>
    <input
      type="checkbox"
      id={id || name}
      name={name}
      checked={checked}
      onChange={(e) => { handleChange(e.target.checked, name) }}
    />
    {label && <label htmlFor={id || name} className={styles.label}>{label}</label>}
  </div>
)

export default CheckBox

CheckBox.defaultProps = {
  label: null,
  id: null,
  style: null
}

CheckBox.propTypes = {
  label: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  style: PropTypes.shape({})
}
