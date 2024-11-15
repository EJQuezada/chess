import './Pieces.css'
import Piece from './Piece'

const Pieces = () => {
    const position = new Array(8).fill('').map(x=> new Array(8).fill(''))
    
    for (let i = 0; i < 8; i++) {
        position[1][i] = 'wp'
        position[6][i] = 'bp'

    }

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