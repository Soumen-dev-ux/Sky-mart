import { useState } from 'react'
import { useShop } from './context/ShopContext'
import { products } from './data/products'
import AuthPage from './components/auth/AuthPage'
import Header from './components/layout/Header'
import MobileMenu from './components/layout/MobileMenu'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import TrustBar from './components/sections/TrustBar'
import DealsSection from './components/sections/DealsSection'
import ShopSection from './components/sections/ShopSection'
import CartDrawer from './components/modals/CartDrawer'
import CheckoutModal from './components/modals/CheckoutModal'
import WishlistModal from './components/modals/WishlistModal'
import AccountModal from './components/modals/AccountModal'
import ProductDetailModal from './components/modals/ProductDetailModal'
import Toast from './components/common/Toast'

export default function App() {
  const shop = useShop()
  const [mobileOpen,setMobileOpen]=useState(false), [cartOpen,setCartOpen]=useState(false), [checkoutOpen,setCheckoutOpen]=useState(false), [wishlistOpen,setWishlistOpen]=useState(false), [accountOpen,setAccountOpen]=useState(false), [selected,setSelected]=useState(null)
  if (!shop.user) return <AuthPage onAuthenticate={(data)=>{shop.setUser(data);shop.showToast?.(`Welcome, ${data.name}!`)}} />
  return <div id="top" className="min-h-screen bg-[#f8fafc] text-slate-900">
    <Header onMenu={()=>setMobileOpen(true)} onWishlist={()=>setWishlistOpen(true)} onAccount={()=>setAccountOpen(true)} onCart={()=>setCartOpen(true)}/>
    {mobileOpen&&<MobileMenu user={shop.user} likedCount={shop.liked.length} onClose={()=>setMobileOpen(false)} onWishlist={()=>setWishlistOpen(true)} onLogout={shop.logout}/>} 
    <Hero user={shop.user} onView={setSelected}/><TrustBar/>
    <DealsSection products={products} liked={shop.liked} onLike={shop.toggleLike} onAdd={shop.addToCart} onView={setSelected}/>
    <ShopSection products={shop.filteredProducts} category={shop.category} setCategory={shop.setCategory} sort={shop.sort} setSort={shop.setSort} liked={shop.liked} onLike={shop.toggleLike} onAdd={shop.addToCart} onView={setSelected}/>
    <Footer onLogout={shop.logout}/>
    {cartOpen&&<CartDrawer cart={shop.cart} count={shop.cartCount} total={shop.cartTotal} onClose={()=>setCartOpen(false)} onQty={shop.updateQty} onCheckout={()=>{setCartOpen(false);setCheckoutOpen(true)}}/>}
    {checkoutOpen&&<CheckoutModal user={shop.user} total={shop.cartTotal} onClose={()=>setCheckoutOpen(false)} onPlace={(details)=>{shop.placeOrder(details);setCheckoutOpen(false)}}/>}
    {wishlistOpen&&<WishlistModal liked={shop.liked} onClose={()=>setWishlistOpen(false)} onAdd={shop.addToCart} onLike={shop.toggleLike}/>} 
    {accountOpen&&<AccountModal user={shop.user} orders={shop.orders} onClose={()=>setAccountOpen(false)} onLogout={()=>{setAccountOpen(false);shop.logout()}}/>}
    {selected&&<ProductDetailModal product={selected} onClose={()=>setSelected(null)} onAdd={shop.addToCart}/>}<Toast message={shop.toast}/>
  </div>
}
