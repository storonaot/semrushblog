import styles from './styles'

const DeleteBtn = ({ children, handleClick }) => (
  <button className={styles.deleteBtn} onClick={handleClick}>
    <span className={styles.content}>{children}</span>
  </button>
)

export default DeleteBtn

DeleteBtn.propTypes = {
  children: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired
}
