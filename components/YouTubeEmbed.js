export default function YouTubeEmbed ({embedUrl}) {
    if (embedUrl != null && embedUrl != undefined) {
        return (
            <>
                <div id="xs-s-iframe" className="md:hidden">
                    <iframe width={300} height={300*9/16} src={`https://www.youtube.com/embed/${embedUrl}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div id="md-iframe" className="hidden md:block">
                    <iframe width="560" height="315" src={`https://www.youtube.com/embed/${embedUrl}`} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </>
        )
    }
}