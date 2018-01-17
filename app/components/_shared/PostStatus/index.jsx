import classNames from 'classnames'
import styles from './styles'

const colors = {
  'needs editing': '#c40cbe',
  'waiting for review': '#eaae3d',
  'under review': '#4192ce',
  draft: '#333333',
  approved: '#60a141',
  published: '#ffffff',
  rejected: '#da4239'
}

const infoText = 'Reason: Your article quality is of low value or the topic has been covered extensively already.'
const Info = () => (
  <span
    data-tip={infoText}
    data-place="right"
    className={styles.info}
    data-class={styles.infoHint}
  />
)

const PostStatus = ({ status, position }) => {
  const classList = classNames({
    [styles.status]: true,
    [styles.isAbsolute]: position === 'absolute'
  })

  return (
    <div
      className={classList}
      style={{
        backgroundColor: colors[status],
        color: status === 'published' ? '#493535' : '#fff',
        position
      }}
    >{status}{status === 'rejected' && <Info />} </div>
  )
}

export default PostStatus

PostStatus.defaultProps = {
  position: 'absolute'
}

PostStatus.propTypes = {
  status: PropTypes.string.isRequired,
  position: PropTypes.string
}
