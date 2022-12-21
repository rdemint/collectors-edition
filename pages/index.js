import Head from 'next/head'
import Hero from "@/components/Hero"
import Link from 'next/link'
import Container from '../components/Container'
import { CheckBadgeIcon } from '@heroicons/react/24/solid'

export default function Home() {

    const criteria = [
        { name: "height", details: "Height is a requirement.  Danger is not. 15-30ft is the sweet spot. By definition, lowballs are never collectors edition." },
        { name: "setting", details: "The view, the landscape, and surroundings including any road noise." },
        { name: "movement", details: "A variety of movement and techniques is a plus." },
        { name: "rock quality", details: "The texture and shape of the holds.  Too sharp or extremely polished is a deal breaker." },
        { name: "aesthetics", details: "The color and patterns in the rock as well as the overall shape and positioning of the boulder." }
    ]
 
  return (
    <div>
      <Head>
        <title>Raines Demint</title>
        <meta name="description" content="Boulders worth collecting" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center">
              <Hero />
              <div id="CTA-container" className="flex flex-col space-y-8 mt-12 items-center w-full">
              <div className="flex flex-col items-center" >
                <Link href="/boulders" >
                  <a className="rounded-md border border-slate-700 px-4 py-2 w-48 text-center text-slate-300 bg-slate-800 hover:shadow-md">Featured Boulders</a>
                </Link>
                  <p className="text-gray-500 px-4">What I&apos;ve found notable and my consensus on grades and quality.</p>
              </div>                                                                    
              <div className="flex flex-col items-center" >
                <Link href="/blog">
                  <a  className="rounded-md border border-slate-700 px-4 py-2 w-48 text-center text-slate-300 bg-slate-800 hover:shadow-md">Blog</a>
                </Link>
                  <p className="text-gray-500 ">Expanded and freeform thoughts.</p>
              </div>      
              </div>
              <div className="my-6 px-6 max-w-3xl space-y-4">
                  <p className="text-zinc-700">Ever since I began cutting my teeth on Mt. Lemmon in Southern Arizona, looking for and developing boulders,
                      I&apos;ve developed an appreciation for just how rare some boulders really are.<br/> <br/> These rare, usually &apos;four star&apos; boulders are not four times better than one star boulders, but maybe 10 or 100 times better. It has become my mission to seek out these boulders, which I have come to call collectors edition.</p>
                      
                  <p className="text-zinc-700">Seeking out what I deemed to be collectors edition has led me over many miles.  Here I reflect and share about these adventures, which are now mostly based around the greater Tahoe area.
                  </p>
              </div>
              <Container>
                  <h3 className="text-2xl text-center">What makes a collectors edition boulder?</h3>
                  {criteria.map((c) => (
                      <div key={c.name} className="flex items-center space-x-6 h-24 m-4 bg-slate-50 rounded-xl px-4">
                          <CheckBadgeIcon className="text-slate-800 h-8 w-8 flex-none bg-yellow-400 rounded-xl"/>
                          <div>
                            <h4 className="text-slate-700 font-medium">{c.name}</h4>
                            <p className="text-zinc-600 tracking-tight">{c.details}</p>
                          </div>
                        </div>
                    ))
                  }
              </Container>
              <div className="my-6 px-6 max-w-3xl space-y-4">
                  <p className="text-zinc-700">I&apos;ve climbed many overrated and underrated boulders in the Tahoe and greater Sierras. I suppose I&apos;ll throw yet another opinion into the mix!</p>
              </div>

          </main>
      </div>

    )
}
