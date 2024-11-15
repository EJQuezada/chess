import './Pieces.css'
import Piece from './Piece'

const Pieces = () => {
    const position = new Array(8).fill('').map(x=> new Array(8).fill(''))
    
    position[0][0] = 'wr'
    position[0][0] = 'wn'
    position[0][0] = 'wq'
    position[0][0] = 'wb'
    position[7][7] = 'br'

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