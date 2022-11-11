import { Highlight } from 'react-instantsearch-hooks-web'
import Link from 'next/link'

export default function SearchHit({ hit }) {
  return (
    <article className="m-2 border border-gray-200 p-2">
        <Link href={`/docs/${hit.slug}`}>
          <a className="hover:text-gray-600">
            <Highlight attribute="title" hit={hit} />
            <p className="pt-1 text-gray-600 text-sm">{hit.summary}</p>
            <div class="flex space-x-2">
                {hit.tags.map(
                    (tag) => (
                        <>
                        <Highlight attribute="tags" hit={hit} />
                        
                       </>
                      )
                )}
            </div>
          </a>
        </Link>
    </article>
  )
}
