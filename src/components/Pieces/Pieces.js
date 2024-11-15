import './Pieces.css'
import Piece from './Piece'
import { useState, useRef } from 'react'
import { createPosition } from '../../helper'

const Pieces = () => {
    
    const ref = useRef()

    const [state,setState] = useState(createPosition())

    const onDrop = e => {
        const [p,rank,file] = e.dataTransfer.getData('text').split(',')
        console.log(p,rank,file)
    }

    const onDragOver = e => e.preventDefault()
    
    return <div
        ref={ref}
        onDrop={onDrop}
        onDragOver={onDragOver}
        className='pieces'>
        {state.map((r,rank) =>
            r.map((f,file) =>
                state[rank][file]
                ?   <Piece
                        key={rank+'-'+file}
                        rank = {rank}
                        file = {file}
                        piece = {state[rank][file]}
                    />
                :   null
            ))}

        </div>
}

export default Pieces