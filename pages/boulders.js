import Image from 'next/image'
import StarsBar from '../components/StarsBar'
import YouTubeEmbed from '@/components/YouTubeEmbed'
import { gradeList } from '@/lib/gradeList'
import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/24/solid'
import { PortableText } from '@portabletext/react'
import { CheckBadgeIcon } from '@heroicons/react/20/solid'

export default function Boulders({boulders}) {
    return (
            <div className="w-full flex flex-col items-center">
                <div className="max-w-3xl flex flex-col items-center px-2">
                        <h2 className="text-2xl text-zinc-800 my-2 text-center">A list of all climbed boulders in the database</h2>
                        <div className="my-6 px-6 space-y-4">
                            <p className="text-zinc-700">I am stuck on the idea that the four star scale is really insufficient to differentiate the wide range of quality in the wild.  I offer my take here in a special CEB seven star scale, too.</p>
                        </div>
                        {boulders.map((boulder)=> (
                            <>
                                <div id="boulder-card" key={boulder.name} className="relative border border-slate-200 bg-slate-50 rounded-xl p-2 flex flex-col my-2">
                                    { boulder.isCollectorsEdition ? 
                                    <CheckBadgeIcon className="absolute left-1 top-1 z-10 text-slate-800 h-8 w-8 flex-none bg-yellow-400 rounded-xl"/>
                                    : <></>
                                    }
                                    <div className="flex flex-col items-center md:flex-row space-x-4">
                                        <div>
                                            <Image src={boulder.imageUrl} width={560} height={560*9/16}/>
                                        </div>
                                        <div class="flex flex-col">
                                            <div className='font-medium'>{boulder?.name}</div>
                                            <div className="text-gray-500">{boulder.area?.name}</div>
                                            <div className='flex my-2'>
                                                <div className="flex flex-col w-24">
                                                    <div className="w-24 text-gray-600">Guidebook</div>
                                                </div>
                                                <div className="flex flex-col">
                                                    <StarsBar earnedStars={boulder.guidebookStars} totalStars={4} />
                                                    <div className='text-slate-700'>{boulder?.guidebookGrade}</div>
                                                </div>

                                            </div>

                                            <div className="flex my-2">
                                                <div className="flex flex-col w-24">
                                                    <div className="w-24 text-gray-600">CEB</div>
                                                </div>
                                                <div className="flex flex-col">
                                                    <StarsBar earnedStars={boulder.cebStars} totalStars={7} />
                                                    <div className='text-slate-700'>{boulder?.cebGrade}</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="pt-4">
                                    <Disclosure>
                                        {({open}) => (
                                            <>
                                                <Disclosure.Button className="flex w-full rounded-lg justify-between px-4 py-2 text-left text-sm font-medium focus:outline-none focuse-visible:ring">
                                                    <span className="text-slate-600">Details</span>
                                                    <ChevronUpIcon className={`${ open ? 'rotate-180 transform' : ''} h-5 w-5 text-slate-500`} />
                                                </Disclosure.Button>
                                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm prose">
                                                    <div className="flex">
                                                        <div className="w-36">Collectors Edition?</div>
                                                        <div>{boulder.isCollectorsEdition ? "Yes" : "No"}</div>
                                                    </div>
                                                    <div></div>
                                                    <div className="">
                                                        <PortableText value={boulder.summary} />
                                                    </div>
                                                    <YouTubeEmbed embedUrl={boulder.video.split("=")[1]}/>
                                                </Disclosure.Panel>
                                            </>
                                        )}
                                    </Disclosure>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
            </div>
    )

    
}

export async function getStaticProps(context) {
    const sanityClient = require('@sanity/client')
    const client = sanityClient({
        projectId: 'l3anu4mj',
        dataset: 'production',
        apiVersion: '2021-10-21',
        useCdn: false,
    })
    const query = '*[_type == "boulder"]{..., area->, "imageUrl": image.asset->url}'
    var boulders = await client.fetch(query) 
    boulders.sort((a, b) => {
        if (gradeList.indexOf(a.cebGrade) < gradeList.indexOf(b.cebGrade)) {
            return -1
        }
        if (gradeList.indexOf(a.cebGrade) > gradeList.indexOf(b.cebGrade)) {
            return 1
        }
        else {
            return 0
        }
    })

    return {
        props: {boulders}
    }
}