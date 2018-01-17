import Container from '_shared/Container'
import Button from '_shared/Button'
import DeleteBtn from '_shared/DeleteBtn'
import styles from './styles'

const PostFooter = ({ handleSave }) => (
  <div className={styles.footer}>
    <Container size="strait">
      <div className={styles.wrapper}>
        <DeleteBtn handleClick={() => {}}>Delete post</DeleteBtn>
        <Button handleClick={handleSave} color="green">Save</Button>
      </div>
    </Container>
  </div>
)

export default PostFooter

PostFooter.propTypes = {
  handleSave: PropTypes.func.isRequired
}
