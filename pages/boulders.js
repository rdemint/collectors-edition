import Image from 'next/image'
import StarsBar from '../components/StarsBar'

export default function Boulders({boulders}) {
    return (
        <div className='flex justify-center border px-10'>
            <div className="flex flex-col max-w-3xl">
                <h2 className="text-2xl text-zinc-800 my-2">A list of all climbed boulders in the database</h2>
                {boulders.map((boulder)=> (
                    
                    <div key={boulder.name} className="border flex space-x-4">
                        <div className='w-36 h-24'>
                            <Image src={boulder.imageUrl} width="270" height="180"/>
                        </div>
                        <div class="flex flex-col">
                            <div className='font-medium'>{boulder?.name}</div>
                            <div className='text-gray-700'>{boulder?.cebGrade}</div>
                            <div className="text-gray-500">{boulder.area?.name}</div>
                            <StarsBar earnedStars={boulder.guidebookStars} totalStars={4} />
                        </div>
                    </div>
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
        useCdn: true,
    })
    const query = '*[_type == "boulder"]{..., area->, "imageUrl": image.asset->url}'
    const boulders = await client.fetch(query) 
    return {
    props: {boulders}
 }
}