import styles from './styles'

const Search = ({ placeholder, value, handleReset, handleChange, name }) => (
  <div className={styles.search}>
    <input
      className={styles.field}
      type="text"
      value={value}
      placeholder={placeholder}
      onChange={(e) => { handleChange(e.target.value) }}
      name={name}
    />
    {value &&
      (<div
        role="button"
        tabIndex={0}
        onClick={handleReset}
        className={styles.resetBtn}
      />)
    }
  </div>
)

export default Search

Search.defaultProps = {
  placeholder: 'Search...',
  value: '',
  name: 'search'
}

Search.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  handleReset: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string
}
