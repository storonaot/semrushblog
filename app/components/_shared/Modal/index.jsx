import styles from './styles'

const Modal = ({ children, handelClose }) => (
  <div className={styles.overlay}>
    <div className={styles.modal}>
      <div
        className={styles.close}
        onClick={handelClose}
        role="button"
        tabIndex={0}
      />
      {children}
    </div>
  </div>
)

export default Modal

Modal.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node
  ]).isRequired,
  handelClose: PropTypes.func.isRequired
}
