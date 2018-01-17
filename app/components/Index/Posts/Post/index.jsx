import classNames from 'classnames'
import { Title, PostStatus } from '_shared'
import { Link } from 'react-router'
import Counters from './Counters'
import styles from './styles'

const uploadImage = (photo) => {
  if (photo) return require(`../../../../images/${photo}`)
  return null
}
const getDate = publication => publication.published || `Updated: ${publication.updated}`

const Post = ({ post }) => {
  const imageUrl = image => `url(${uploadImage(image)})`
  const imageClasses = image => classNames({
    [styles.postImage]: true,
    [styles.isDefault]: !image
  })
  const imageStyles = image => ({
    backgroundImage: image ? imageUrl(image) : null
  })
  return (
    <div className={styles.post}>
      <div
        className={imageClasses(post.publication.image)}
        style={imageStyles(post.publication.image)}
      >
        <PostStatus status={post.publication.status} />
      </div>
      <div className={styles.footer}>
        <div>
          <div className={styles.top}>
            <div>{getDate(post.publication)}</div>
            <div>{post.publication.tag}</div>
          </div>
          <Link to={`/${post.id}/update`} className={styles.postLink}>
            <Title>{post.publication.title}</Title>
          </Link>
        </div>
        {post.counters && <Counters counters={post.counters} />}
      </div>
    </div>
  )
}

export default Post

Post.propTypes = {
  post: PropTypes.shape({}).isRequired
}
