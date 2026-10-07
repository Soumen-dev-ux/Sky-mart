export default function Toast({ message }) {
  if (!message) return null
  return <div className="animate-toast-in fixed bottom-4 right-4 z-[100] rounded-xl bg-slate-900 px-4 py-2.5 text-xs font-bold text-white shadow-xl">{message}</div>
}
