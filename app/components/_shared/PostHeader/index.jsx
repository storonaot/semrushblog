import Container from '_shared/Container'
import Title from '_shared/Title'
import PostStatus from '_shared/PostStatus'
import ImageUpload from '_shared/ImageUpload'
import Divider from '../Divider'
import Author from './Author'
import styles from './styles'

const PostHeader = ({ post, image, imageDelete, handleImageUpload, goBack }) => (
  <div className={styles.postHeader}>
    <Container size="strait" style={{ position: 'relative' }}>
      <div className={styles.goBack} onClick={goBack} role="button" tabIndex={0} />
      <Title h={1} bold>{post.publication.title}</Title>
      <Divider />
      <div className={styles.subTitle}>
        <Author author={post.author} />
        <PostStatus
          status={post.publication.status}
          position="relative"
        />
      </div>
      <ImageUpload
        image={image}
        imageDelete={imageDelete}
        handleImageUpload={handleImageUpload}
      />
    </Container>
  </div>
)

export default PostHeader

PostHeader.defaultProps = {
  image: null
}

PostHeader.propTypes = {
  post: PropTypes.shape({}).isRequired,
  handleImageUpload: PropTypes.func.isRequired,
  imageDelete: PropTypes.func.isRequired,
  image: PropTypes.string,
  goBack: PropTypes.func.isRequired
}
