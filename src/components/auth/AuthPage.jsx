import { useState } from 'react'

export default function AuthPage({ onAuthenticate }) {
  const [signUp, setSignUp] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submit = (e) => {
    e.preventDefault()
    onAuthenticate({ name: signUp ? name : email.split('@')[0] || 'User', email })
  }

  return <main className="flex min-h-screen items-center justify-center bg-[#f8fafc] p-4">
    <section className="w-full max-w-sm rounded-3xl border border-slate-200/80 bg-white p-7 shadow-xl">
      <div className="mb-6 text-center"><div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-indigo-600 text-xl font-black text-white shadow-md shadow-indigo-200">✦</div><h1 className="mt-3 text-2xl font-black">{signUp ? 'Create Account' : 'Welcome Back'}</h1><p className="mt-1 text-xs text-slate-500">{signUp ? 'Sign up to start shopping on SkyMart' : 'Sign in to access your SkyMart store'}</p></div>
      <form onSubmit={submit} className="grid gap-3.5">
        {signUp && <Field label="Full Name"><input className="form-field-input" required value={name} onChange={e=>setName(e.target.value)} placeholder="Your full name" /></Field>}
        <Field label="Email Address"><input className="form-field-input" required type="email" value={email} onChange={e=>setEmail(e.target.value)} placeholder="name@example.com" /></Field>
        <Field label="Password"><input className="form-field-input" required type="password" minLength="4" value={password} onChange={e=>setPassword(e.target.value)} placeholder="••••••••" /></Field>
        <button className="mt-2 rounded-xl bg-slate-950 py-3 text-xs font-bold text-white shadow-md transition hover:bg-indigo-600">{signUp ? 'Create Account' : 'Sign In'}</button>
      </form>
      <p className="mt-6 text-center text-xs font-semibold text-slate-500">{signUp ? 'Already have an account?' : "Don't have an account?"}{' '}<button onClick={()=>setSignUp(v=>!v)} className="font-bold text-indigo-600 underline">{signUp ? 'Sign In' : 'Sign Up'}</button></p>
    </section>
  </main>
}
function Field({ label, children }) { return <label className="text-xs font-bold text-slate-600">{label}<span className="mt-1 block">{children}</span></label> }
