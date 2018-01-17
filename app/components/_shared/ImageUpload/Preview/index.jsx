import classNames from 'classnames'
import styles from './styles'

const Preview = ({ image, deleteImage, type, title, hasLogo, autoUpload }) => {
  const previewStyles = {
    backgroundImage: image ? `url(${image})` : null
  }
  const deleteBtnClassList = classNames({
    [styles.deleteBtn]: true,
    [styles.isSocial]: type === 'social'
  })
  const logo = hasLogo ? <span className={styles.logo} /> : null
  return (
    <div className={styles.preview} style={previewStyles}>
      {(image && !autoUpload) && (
        <div
          className={deleteBtnClassList}
          onClick={deleteImage}
          role="button"
          tabIndex={0}
        />
      )}
      {type === 'publication' && (
        <div className={styles.hint}>This area will not be displayed on the post page</div>
      )}
      {(type === 'social' && (title || hasLogo) && autoUpload) && (
        <div className={styles.autoTitle}>{title}{logo}</div>
      )}
    </div>
  )
}

export default Preview

Preview.defaultProps = {
  deleteImage: null,
  image: null,
  hasLogo: false,
  title: null
}

Preview.propTypes = {
  image: PropTypes.string,
  deleteImage: PropTypes.func,
  type: PropTypes.oneOf(['publication', 'social']).isRequired,
  title: PropTypes.string,
  hasLogo: PropTypes.bool,
  autoUpload: PropTypes.bool.isRequired
}
