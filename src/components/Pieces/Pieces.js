import './Pieces.css'
import Piece from './Piece'
import { useState } from 'react'

const Pieces = () => {
    
    const [state,setState] = useState(createPosition())

    
    console.log(position);

    return <div
        className='pieces'
        >
        {position.map((r,rank) =>
            r.map((f,file) =>
                position[rank][file]
                ?   <Piece
                        key={rank+'-'+file}
                        rank={rank}
                        file={file}
                        piece={position[rank][file]}
                    />
                :   null
            ))}

        </div>
}

export default Pieces