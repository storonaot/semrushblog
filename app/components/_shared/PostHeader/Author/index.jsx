import styles from './styles'

const Author = ({ author }) => (
  <div className={styles.author}>
    <div className={styles.avatar} />
    <div className={styles.name}>{author.name}</div>
  </div>
)

export default Author

Author.propTypes = {
  author: PropTypes.shape({}).isRequired
}
