import Link from 'next/link'

export default function Header() {

return(
    <div className="flex shadow-lg items-center justify-between p-6">
        <Link href="/#">
            <a className="text-slate-800">
                <span className="text-yellow-700">C.</span>
                <span className="text-emerald-700">E.</span>
                <span className="text-sky-600">B.</span>
            </a>
        </Link>
        <section className="flex space-x-5 text-slate-700">
            <Link href="/blog">
                <a  className="px-3 py-1 hover:text-primary-900 hover:underline underline-offset-8 decoration-accent-900">Blog</a>
            </Link>
            <Link href="/about">
                <a className="px-3 py-1 hover:text-primary-900 hover:underline underline-offset-8 decoration-accent-900">About</a>
            </Link>
        </section>
        </div>
)
}