import Button from '_shared/Button'
import styles from './styles'

const Switcher = ({ activeValue, data, handleChange }) => {
  const getColor = val => (activeValue !== val ? 'ghost' : null)

  return (
    <div className={styles.wrapper}>
      {data.map(item => (
        <Button
          color={getColor(item.value)}
          key={item.id}
          handleClick={() => { handleChange(item.value) }}
          className={styles.switch}
        >{item.title}</Button>
      )) }
    </div>
  )
}

export default Switcher

Switcher.propTypes = {
  activeValue: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired
}
