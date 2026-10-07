import { createContext, useContext, useMemo, useState } from 'react'
import { products } from '../data/products'

const ShopContext = createContext(null)

export function ShopProvider({ children }) {
  const [user, setUser] = useState(null)
  const [cart, setCart] = useState([])
  const [liked, setLiked] = useState([1])
  const [orders, setOrders] = useState([])
  const [toast, setToast] = useState(null)
  const [category, setCategory] = useState('All')
  const [query, setQuery] = useState('')
  const [sort, setSort] = useState('featured')

  const showToast = (message) => {
    setToast(message)
    window.clearTimeout(showToast.timer)
    showToast.timer = window.setTimeout(() => setToast(null), 3000)
  }

  const filteredProducts = useMemo(() => {
    const list = products.filter((p) =>
      (category === 'All' || p.category === category) &&
      p.name.toLowerCase().includes(query.toLowerCase())
    )
    if (sort === 'low') list.sort((a, b) => a.price - b.price)
    if (sort === 'high') list.sort((a, b) => b.price - a.price)
    if (sort === 'rating') list.sort((a, b) => b.rating - a.rating)
    return list
  }, [category, query, sort])

  const addToCart = (product) => {
    setCart((items) => {
      const found = items.find((item) => item.id === product.id)
      return found
        ? items.map((item) => item.id === product.id ? { ...item, qty: item.qty + 1 } : item)
        : [...items, { ...product, qty: 1 }]
    })
    showToast(`Added "${product.name}" to cart`)
  }

  const updateQty = (id, delta) => setCart((items) =>
    items.map((item) => item.id === id ? { ...item, qty: item.qty + delta } : item)
      .filter((item) => item.qty > 0)
  )

  const toggleLike = (id) => setLiked((current) => {
    const active = current.includes(id)
    showToast(active ? 'Removed from Wishlist' : 'Saved to Wishlist')
    return active ? current.filter((x) => x !== id) : [...current, id]
  })

  const placeOrder = ({ address, payment }) => {
    const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0)
    const order = {
      id: `#SKM-${Math.floor(100000 + Math.random() * 900000)}`,
      date: new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit' }),
      items: [...cart], total, address, payment,
    }
    setOrders((current) => [order, ...current])
    setCart([])
    showToast('🎉 Order placed successfully!')
  }

  const logout = () => {
    setUser(null); setCart([]); setOrders([])
    showToast('Signed out of SkyMart')
  }

  const value = {
    showToast,
    user, setUser, cart, liked, orders, toast,
    query, setQuery, category, setCategory, sort, setSort,
    filteredProducts, addToCart, updateQty, toggleLike, placeOrder, logout,
    cartCount: cart.reduce((sum, item) => sum + item.qty, 0),
    cartTotal: cart.reduce((sum, item) => sum + item.price * item.qty, 0),
  }
  return <ShopContext.Provider value={value}>{children}</ShopContext.Provider>
}
export const useShop = () => useContext(ShopContext)
