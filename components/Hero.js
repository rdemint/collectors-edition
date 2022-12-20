import Image from 'next/image'

export default function Hero() {
    return (
        <div className="shadow-inner bg-slate-50 items-center w-full md:flex">
            <div
                className="px-4 mx-8"
            >
                    
                    <h2
                        
                    className="py-4 text-slate-700 font-lg text-5xl">Boulders worth
                    <span
                        
                        className="bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-500 text-transparent"> collecting</span></h2>
                    <p className="py-4 text-slate-600 font-md text-base">reflections on bouldering around Tahoe and the greater Sierra.</p>
            </div>
            <div className="md:w-2/3">
            <Image src="/crown_jewel20_2mb.jpg" height="432px" width="768" alt="A man rock climbing a large boulder." placeholder="blur" blurDataURL="/crown_jewel20_small_blur.jpg"/>
            </div>
        </div>
)
}