import { useState, useEffect, useRef } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

import { getAllSubs } from "./services/getAllSub";

// ? contrato que tiene que tener un objeto
import { Sub, SubsResponseFromAPI } from "./types";

// ? contrato para los estados de la aplicacion
interface AppState {
  subs: Array<Sub>;
  newSubsNumner: number;
}

function App() {
  const [newSubsNumber, setNewSubsNumber] =
    useState<AppState["newSubsNumner"]>(0);
  // ? useRef debe tener un valor inicial
  const divRef = useRef<HTMLDivElement>(null);

  const [subs, setSubs] = useState<AppState["subs"]>([]);
  useEffect(() => {
    getAllSubs()
      .then(setSubs)
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleNewSub = (newSub: Sub): void => {
    setSubs((subs) => [...subs, newSub]);
    setNewSubsNumber((n) => n + 1);
  };

  return (
    <div className="App" ref={divRef}>
      <h1>Midu subs</h1>
      <List subs={subs} />
      New Subs: {newSubsNumber}
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
