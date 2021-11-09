import styles from './Robot.module.css'
import { StateContext } from '../AppState'
import { withAddToCart } from './AddToCart'

export interface RobotProp {
  id: number
  name: string
  email: string
  store: StateContext
  addToCart: (id: number, name: string) => void
}

const Robot: React.FC<RobotProp> = ({ id, name, email, store, addToCart }) => {
  return (
    <div className={styles.cardContainer}>
      <img src={`https://robohash.org/${id}`} alt="robot" />
      <h2>{name}</h2>
      <p>{email}</p>
      <p>作者：{store.state.name}</p>
      <button onClick={() => addToCart(id, name)}>加入购物车</button>
    </div>
  )
}

export default withAddToCart(Robot)
