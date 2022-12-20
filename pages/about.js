import Image from 'next/image'

export default function About() {
    return (
                <div className="flex justify-center max-w-3xl mx-auto bg-white">
                <div class="prose">
                    <Image src="/crown_jewel20_2mb.jpg" height="432px" width="768" alt="A man rock climbing a large boulder." placeholder="blur" blurDataURL="/crown_jewel20_small_blur.jpg"/>
                    <div className='px-10'>
                        <h2 className="text-slate-800">About me</h2>
                        <p>I have been climbing since 2012, and am now based in the Tahoe area.  I love bouldering and multi-pitch climbing, so naturally the tall and adventurous boulders blend the best of both worlds.</p>
                        <p>Go send it!</p>
                    </div>
                </div>
                </div>
        
    )
}