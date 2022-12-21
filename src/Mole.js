import moleImg from './mole.png'

export default function Mole (props) {
    return (
        <div>
            <img style={{'width': '30vw'}} src={moleImg} onClick={props.handleClick} />
        </div>
    )
}

