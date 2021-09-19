export const addItemToCart = (cartItems, cartItemToAdd) => {
  const existingCartItemIndex = cartItems.findIndex(
    (cartItem) => cartItem.id === cartItemToAdd.id
  )

  if (existingCartItemIndex >= 0) {
    const item = cartItems[existingCartItemIndex]
    cartItems[existingCartItemIndex] = {
      ...item,
      quantity: item.quantity + 1,
    }
  } else {
    cartItems.push({ ...cartItemToAdd, quantity: 1 })
  }
  return [...cartItems]
}

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  console.log(cartItemToRemove)
  const existingCartItemIndex = cartItems.findIndex(
    (cartItem) => cartItem.id === cartItemToRemove.id
  )
  if (!existingCartItemIndex < 0) return cartItems

  const item = cartItems[existingCartItemIndex]
  if (item.quantity <= 1) {
    cartItems.splice(existingCartItemIndex, 1)
  } else {
    cartItems[existingCartItemIndex] = {
      ...item,
      quantity: item.quantity - 1,
    }
  }
  return [...cartItems]
}
