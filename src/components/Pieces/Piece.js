import { useAppContext } from "../../contexts/Context"
const Piece = ({
    rank, 
    file, 
    piece,
}) => {

    const {appState, dispatch} = useAppContext()
    const {turn, position} = appState;
    const currentPosition = position[position.length - 1]

    const getMoves = () => {
        const moves = []
        const us = piece[0]
        const enemy = us === 'w' ? 'b' : 'w'

        const direction = [
            [-1,0],
            [1,0],
            [0,-1],
            [0,1],
        ]

        direction.forEach(dir => {
            for (let i = 0; i < 8; i++) {
                const x = rank + (i*dir[0])
                const y = file + (i*dir[1])
                if (currentPosition[x][y] === undefined)
                
            }
        })
    }

    const onDragStart = e => {
        e.dataTransfer.effectAllowed = 'move'
        e.dataTransfer.setData('text/plain',`${piece},${rank},${file}`)
        setTimeout(() => {
            e.target.style.display = 'none'
        },0)
        if (turn === piece[0]) {
            const candidateMoves = getMoves()
        }
    }
    const onDragEnd = e => {
        e.target.style.display = 'block'
    }

    return (
        <div 
            className={`piece ${piece} p-${file}${rank}`}
            draggable={true}
            onDragStart={onDragStart}
            onDragEnd={onDragEnd} 
        
        />)
}

export default Piece