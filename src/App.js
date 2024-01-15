import PeopleContainer from "./components/PeopleContainer";
import Button from "./components/Button";
import List from "./components/List";

function App() {
  return (
    <div className="flex-row">
      <PeopleContainer />
      <Button />
      <List />
    </div>
  );
}

export default App;
