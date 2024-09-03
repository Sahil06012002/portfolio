import Link from 'next/link'
export default function Navbar()
{
    return <header className='border-b-2 border-border mb-2'>
        <div className="container py-5 flex justify-between text-white text-xl font-medium">
            <div>
            <a className="hover:border-b-4 border-purple text-2xl" href="/">Home</a>
            </div>
            <div>
            <ul className="flex gap-5">
                <li className="hover:border-b-4 border-purple">Skills</li>
                <li className="hover:border-b-4 border-purple"><Link href="/projects">Projects</Link></li>
                <li className="hover:border-b-4 border-purple">About Me</li>
            </ul>
            </div>
        </div>
    </header>
}