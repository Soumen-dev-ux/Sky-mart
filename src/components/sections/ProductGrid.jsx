import ProductCard from '../common/ProductCard'
export function ProductGrid({ products, liked, onLike, onAdd, onView }) { return <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">{products.map(p=><ProductCard key={p.id} product={p} liked={liked.includes(p.id)} onLike={onLike} onAdd={onAdd} onView={onView}/>)}</div> }
