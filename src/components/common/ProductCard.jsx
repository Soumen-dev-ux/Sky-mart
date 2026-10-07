import { Heart, Star } from 'lucide-react'
import { money } from '../../utils/formatCurrency'

export default function ProductCard({ product, liked, onLike, onAdd, onView }) {
  return <article className="product-card group flex flex-col justify-between rounded-2xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
    <div>
      <div className="relative mb-3 aspect-square overflow-hidden rounded-xl bg-slate-100">
        <img src={product.image} alt={product.name} className="product-image h-full w-full object-cover" />
        <span className="absolute left-2 top-2 rounded-md bg-white/95 px-2 py-1 text-[9px] font-black shadow">{product.badge}</span>
        <button aria-label="Wishlist" onClick={() => onLike(product.id)} className="absolute right-2 top-2 grid h-8 w-8 place-items-center rounded-full bg-white/90 text-slate-600 shadow-sm hover:text-rose-500">
          <Heart size={15} fill={liked ? 'currentColor' : 'none'} className={liked ? 'text-rose-500' : ''} />
        </button>
      </div>
      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">{product.category}</p>
      <button onClick={() => onView(product)} className="mt-0.5 text-left text-sm font-extrabold text-slate-900 transition hover:text-indigo-600">{product.name}</button>
      <div className="mt-1 flex items-center gap-1 text-xs text-slate-500"><Star size={13} fill="currentColor" className="text-amber-400" /><b>{product.rating}</b> ({product.reviews})</div>
    </div>
    <div className="mt-4 flex items-center justify-between border-t pt-3">
      <div><b className="text-base text-slate-950">{money(product.price)}</b><del className="ml-1.5 text-xs text-slate-400">{money(product.oldPrice)}</del></div>
      <button onClick={() => onAdd(product)} className="rounded-lg bg-slate-950 px-3.5 py-1.5 text-xs font-bold text-white transition hover:bg-indigo-600">Add</button>
    </div>
  </article>
}
