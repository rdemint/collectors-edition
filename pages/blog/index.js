import { getFiles } from '@/lib/mdxfiles'
import Container from '@/components/Container'
import Link from 'next/link'

export async function getStaticProps() {
    const posts = getFiles('blog')
    return {
        props: {
            posts
        }
    }
}

export default function BlogHome({posts}) {
    return (

        <Container>
<div className="max-w-3xl mx-auto">
            <h2 className="text-4xl tracking-tight font-medium pt-8 pb-4">All posts</h2>
            <p className="text-gray-700">Reflections on bouldering, climbing, and adventure around Lake Tahoe and beyond.</p>
            <ul role="list" className="pt-6 space-y-5">
                {posts.map(
                    (post) => (
                        <li className="border-l-2 border-accent-500 px-6 py-4 hover:border-accent-800" key={post.title}>
                            <Link href={`/blog/${post.slug}`}>
                                <a className="hover:text-gray-800">
                                    {post.title}
                                    <p className="pt-1 text-sm text-gray-600">{post.summary}</p>
                                    <div class="flex space-x-2 mt-2">
                                    {post.tags.map(
                                        (tag) => (<div className="text-xs text-gray-700" key={tag}>{tag}</div>)
                                        )}
                                    </div>
                                    <div className="text-xs text-gray-500 pt-2">{post.date}</div>
                                    
                                </a>
                            </Link>
                        </li>
                    )
                )}
                </ul>
            </div>
        </Container>
)
}