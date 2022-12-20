
export default function StarsBar ({earnedStars, totalStars}) {

    console.log(totalStars)
    let earnedStarsArr = [];
    for (let i=0; i < earnedStars; i++) {
        earnedStarsArr.push(i)
    }

    let totalStarsArr = [];
    for (let j=earnedStars; j < totalStars; j++) {
        totalStarsArr.push(j)
    }

    if (earnedStars > 0 ) {
        return (
         <div className="flex">
                {earnedStarsArr.map(
                    (i) => (
                                <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" strokeWidth={1} stroke="grey" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                    )
                    )}
                { totalStarsArr.map(
                    (i) => (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1} stroke="gray" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                </svg>
                    )
                    )}
         </div>
        )
    }
    else {
        return (
            <div>NA</div>
        )
    }
}