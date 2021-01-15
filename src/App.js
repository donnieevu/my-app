import './App.css';
import { PlayerCard } from './player-card'
// import PlayerCard from './player-card'
const players = [
  { name: "Stephen Curry", team: "Golden State Warriors", age: 32, position: 'PG', img: "steph-curry.jpg" },
  { name: "Kyrie Irving", team: "Brooklyn Nets", age: 28, position: 'PG', img: "kyrie-irving.jpg" },
  { name: "Jayson Tatum", team: "Boston Celtics", age: 22, position: 'SF', img: "jayson-tatum.jpg" },
  { name: "Devin Booker", team: "Phoenix Suns", age: 24, position: 'SG', img: "devin-booker.jpeg" }
];

const App = () => {
  return (
    <div className="container">
      <div className="row">
        {
          players.map((player) => {
            return <div className="col-3">
              <PlayerCard name={player.name} team={player.team} position={player.position} age={player.age} img={player.img} ></PlayerCard>
            </div>
          })
        }
        {
          players.filter((player) => player.age < 25).map(player => {
            return <div className="col-6">
              <PlayerCard name={player.name} team={player.team} position={player.position} age={player.age} img={player.img}></PlayerCard>
            </div>
          })
        }
        {/* create search bar */}
      </div>
    </div>
  );
}
// make a .find for specific player
export default App;
