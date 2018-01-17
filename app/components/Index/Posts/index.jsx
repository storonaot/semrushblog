import { Container } from '_shared'
import Post from './Post'
import styles from './styles'

const Posts = ({ posts }) => (
  <div className={styles.posts}>
    <Container>
      <div className={styles.postsList}>
        {posts.map(post => (
          <Post key={post.id} post={post} />
        ))}
      </div>
    </Container>
  </div>
)

export default Posts

Posts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({})).isRequired
}
