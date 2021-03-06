import './App.css';
import { PlayerCard } from './player-card'
import { useState } from 'react'

const players = [
  { name: "Stephen Curry", team: "Golden State Warriors", age: 32, position: 'PG', img: "steph-curry.jpg" },
  { name: "Kyrie Irving", team: "Brooklyn Nets", age: 28, position: 'PG', img: "kyrie-irving.jpg" },
  { name: "Jayson Tatum", team: "Boston Celtics", age: 22, position: 'SF', img: "jayson-tatum.jpg" },
  { name: "Devin Booker", team: "Phoenix Suns", age: 24, position: 'SG', img: "devin-booker.jpeg" }
];

const App = () => {
  const [ currentPlayers, setCurrentPlayers ] = useState(players);
  const handleChange = (event) => {
    const searchedPlayer = event.target.value.toLowerCase();
    console.log(searchedPlayer);
    const filteredPlayers = players.filter((player) => {
      console.log(player.name.toLowerCase());
      return player.name.toLowerCase().includes(searchedPlayer)
    });
    setCurrentPlayers(filteredPlayers)
  }

  return (
    <div className="container">
      <div className="row">
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
        {
          currentPlayers.map((player) => {
            return <div className="col-3">
              <PlayerCard
                name={player.name}
                team={player.team}
                position={player.position}
                age={player.age}
                img={player.img} >
              </PlayerCard>
            </div>
          })
        }
      </div>
    </div>
  );
}
// make a dropdown that shows name team and position, whatever the drop down is, is what i want to filter find in the search bar.
export default App;
