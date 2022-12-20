export default function Todo() {
   const todos = [
        {
            name: 'Benwood Meadows',
            boulders: [
                {name: 'Evil Ways', grade: 'V8'},
                {name: 'Contagion', grade: 'V9'},
                {name: 'Yellow Fever', grade: 'V10/11'},
            ]
        },
        {
            name: 'Lake Elbert',
            boulders: [
                {name: 'Levitating Trucker', grade: 'V9'}
            ]

        },
        {
            name: 'Mountain Beavers',
            boulders: [
                {name: 'Solilosit', grade: 'V9'},
                {name: 'Integrity', grade: 'V10'},
                {name: 'Leave it to Beaver', grade: 'V11'}
            ]
        },
        {
            name: 'Sugar Pine 1',
            notes: 'I do not have a truck, but I am glad to bike there. If you have a truck, I will be your friend. The rest of Sugar Pine looks great, but I cannot get there for now.',
            boulders: [
                {name: 'Unleash the Beast', grade: 'V6'},
                {name: 'Focal Point', grade: 'V10'}
            ]
        },
        {
            name: 'Pie Shop',
            boulders: [
                {name: 'Narrows Project', grade: 'V9/10?'},
                {name: 'Dr. Ticklestone', grade: 'V9'},
                {name: 'Diamonds are forever', grade: 'V10'},
                {name: 'Ground Control', grade: 'V11'},
            ]
        },
        {
            name: 'Phantom Spires',
            boulders: [
                {name: 'Bumpy Prow', grade: 'V8'},
                {name: 'Sweet Emotion', grade: 'V9'},
                {name: 'Super Fly', grade: 'V11'},
            ]
        },
        {
            name: 'Tahoe Mountain',
            boulders: [
                {name: 'The Projectile', grade: 'V9'}
            ]
        }
    ]
    return (
        <div className="flex flex-col items-center px-4">
            <div className="max-w-3xl">
                <h2 className="text-4xl text-center">The todo list</h2>
                <p className="text-gray-700 prose">These boulders I am considering seeking out.  Let's team up and get them done!</p>
                <div className="my-8">
                    { todos.map((area)=> (
                        <div key={area.name} className="py-4">
                            <h2 className="text-2xl text-zinc-800">{area.name}</h2>
                            <p className="prose px-2">{area.notes}</p>
                            <ul className="pt-4 px-2">
                                {area.boulders.map((boulder)=> (
                                    <li key={boulder.name}>
                                        <div className="flex space-x-4">
                                            <div className="w-12">{boulder.grade}</div>
                                            <p className="prose">{boulder.name}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}