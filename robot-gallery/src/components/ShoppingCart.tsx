import React from 'react'
import styles from './ShoppingCart.module.css'
import { FiShoppingCart } from 'react-icons/fi'

interface Props {}

interface State {
  isOpen: Boolean
}

export class ShoppingCart extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  render() {
    return (
      <div className={styles.cartContainer}>
        <button
          className={styles.button}
          onClick={() => {
            this.setState({ isOpen: !this.state.isOpen })
          }}
        >
          <FiShoppingCart />
          <span>购物车(2件)</span>
        </button>
        <div
          className={styles.cartDropDown}
          style={{ display: this.state.isOpen ? 'block' : 'none' }}
        >
          <ul>
            <li>robot 1</li>
            <li>robot 2</li>
          </ul>
        </div>
      </div>
    )
  }
}
