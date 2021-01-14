import react from 'react'

export const PlayerCard = ({name, team, img}) => {
    return <div className="card">
        <img src={`assets/${img}`} class="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">{team}</p>
            <a href="#" className="btn btn-primary">Go somewhere</a>
        </div>
    </div>
}