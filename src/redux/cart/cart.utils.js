export const addItemToCard = (cartItems, cartItemToAdd) => {
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
