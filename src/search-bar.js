import react from 'react'
import { useState } from 'react'


const [currentPlayers, setCurrentPlayers] = useState(players);
const handleChange = (event) => {
    const searchedPlayer = event.target.value.toLowerCase();
    console.log(searchedPlayer);
    const filteredPlayers = players.filter((player) => {
        console.log(player.name.toLowerCase());
        return player.name.toLowerCase().includes(searchedPlayer)
    });
    setCurrentPlayers(filteredPlayers)
}

<div class="input-group mb-3">
    <span class="input-group-text" id="search-title">Search Player</span>
    <input
        type="text"
        class="form-control"
        aria-label="search"
        aria-describedby="search-player-name"
        onChange={(event) => handleChange(event)}
    />
</div>