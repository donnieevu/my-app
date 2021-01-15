import './App.css';
import { PlayerCard } from './player-card'
// import PlayerCard from './player-card'
const players = [
  { name: "Stephen Curry", team: "Golden State Warriors", age: 32, img: "steph-curry.jpg" },
  { name: "Kyrie Irving", team: "Brooklyn Nets", age: 28, img: "kyrie-irving.jpg" },
  { name: "Jayson Tatum", team: "Boston Celtics", age: 22, img: "jayson-tatum.jpg" },
  { name: "Devin Booker", team: "Phoenix Suns", age: 24, img: "devin-booker.jpeg" }
];

function App() {
  console.log('hello')
  return (
    <div className="container">
      <div className="row">
        {
          players.map((player) => {
            return <div className="col-3">
              <PlayerCard name={player.name} team={player.team} img={player.img} ></PlayerCard>
            </div>
          })
        }
        {
          players.filter((player) => player.age < 25).map(player => {
            return <div className="col-6">
              <PlayerCard name={player.name} team={player.team} img={player.img}></PlayerCard>
            </div>
          })
        }
      </div>
    </div>

  );
}
// make a .filter for players under age of 25
// make a .find for specific player
export default App;
