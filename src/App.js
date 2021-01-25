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

  const [currentPlayers, setCurrentPlayers] = useState(players);
  const [currentCategory, setCurrentCategory] = useState(null);
  const [err, setErr] = useState(null);
  const [currentSearchInputValue, setCurrentSearchInputValue] = useState(null);

  const handleFilterPlayerInputSearch = (inputFieldValue) => {
    console.log('input value:', inputFieldValue)
    if (!currentCategory && inputFieldValue) {
      setErr('Please Select a Category.')
      return;
    }
    if (currentCategory && !inputFieldValue) {
      setErr('')
    }
    if (!inputFieldValue) {
      setCurrentPlayers(players);
      return;
    }
    console.log('current category:', currentCategory);

    if(currentCategory && inputFieldValue){
      setCurrentSearchInputValue(inputFieldValue)
      setCurrentPlayers(filteredPlayers)
      return;
    }

    const filteredPlayers = players.filter((player) => {
      console.log(player[currentCategory]);
      return player[currentCategory].toString().includes(inputFieldValue)
    })
    setCurrentPlayers(filteredPlayers);
    setCurrentSearchInputValue(inputFieldValue);
  };

  const handleCategorySelection = (category) => {
    console.log(category);
    if (category) {
      setErr('')
    }
    setCurrentCategory(category);
    if(!currentSearchInputValue){
      setCurrentPlayers(players);
      return;
    }
  //   const filteredPlayers = players.filter((player) => {
  //     console.log(player[category]);
  //     return player[category].toString().includes(currentSearchInputValue)
  //   })
  //   setCurrentPlayers(filteredPlayers);
  } 

  // const handleChange = (event) => {
  //   const searchedPlayer = event.target.value.toLowerCase();
  //   console.log(searchedPlayer);
  //   const filteredPlayers = players.filter((player) => {
  //     console.log(player.name.toLowerCase());
  //     return player.name.toLowerCase().includes(searchedPlayer)
  //   });
  //   setCurrentPlayers(filteredPlayers)
  // }

  return (
    <div className="container">
      <div className="row">
        <div><h3> Current Category: {currentCategory}</h3></div>
        <div><h3>Current Input Value: {currentSearchInputValue}</h3></div>
        <div><h3>{err}</h3></div>
        <div className="input-group mb-3">
          <select class="form-select" aria-label="Default select example" onChange={(event) => handleCategorySelection(event.target.value)}>
            <option selected value="">Select Category:</option>
            <option value="name">Name</option>
            <option value="team">Team</option>
            <option value="position">Position</option>
            <option value="age">Age</option>
          </select>
          <input type="text" class="form-control" aria-label="Text input with select option" onChange={(event) => handleFilterPlayerInputSearch(event.target.value)} />
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
// on the dropdown, click the option that you want to filter by (name, team, position, age)
export default App;
