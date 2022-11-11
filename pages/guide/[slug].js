import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from "next-mdx-remote"
import { getFileData, getPaths } from "@/lib/mdxfiles"
import Container from '@/components/Container'
import RegLang from '@/components/docs/RegLang'
import ReportLang from '@/components/docs/ReportLang'
import Qdoc from '@/components/docs/Qdoc'
import QdocList from '@/components/docs/QdocList'
import Subtask from '@/components/docs/Subtask'
import Qlink from '@/components/docs/QLink'
import SidebarLayout from "@/components/layouts/SidebarLayout"

export async function getStaticPaths() {
    const paths = getPaths('docs')
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps(context) {
    const { slug } = context.params
    const source = getFileData('docs', slug)
    const { content, data } = matter(source)
    const mdxSource = await serialize(content)

    return {
        props: {
            mdxSource,
            frontMatter: data
        }
    }
}

export default function DocPage({ mdxSource, frontMatter }) {
    const components = { RegLang, QdocList, ReportLang, Qdoc, Qlink, Subtask }
    return (
        
        <SidebarLayout>
        <div className="flex flex-col max-w-7xl px-4">
            <h1 className="text-4xl max-w-3xl text-center pt-8 pb-4 border-b-2 border-rose-200">{frontMatter.title}</h1>
            <div className="prose pt-8">
                <MDXRemote {...mdxSource} components={components}/>
            </div>
        </div>
        </SidebarLayout>
    )
}