import { useState, useEffect, useRef } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";

// ? contrato que tiene que tener un objeto
import { Sub } from "./types";

// ? contrato para los estados de la aplicacion
interface AppState {
  subs: Array<Sub>;
  newSubsNumner: number;
}

const INITIAL_STATE = [
  {
    nick: "dapelu",
    subMonths: 3,
    avatar: "https://i.pravatar.cc/150?u=dapelu",
    description: "Dapelu hace de moderados a veces",
  },
  {
    nick: "sergio_serrano",
    subMonths: 2,
    avatar: "https://i.pravatar.cc/150?u=sergio_serrano",
  },
];

function App() {
  const [subs, setSubs] = useState<AppState["subs"]>([]);
  const [newSubsNumber, setNewSubsNumber] =
    useState<AppState["newSubsNumner"]>(0);
  // ? useRef debe tener un valor inicial
  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setSubs(INITIAL_STATE);
  }, []);

  const handleNewSub = (newSub: Sub): void => {
    setSubs((subs) => [...subs, newSub]);
  };

  return (
    <div className="App" ref={divRef}>
      <h1>Midu subs</h1>
      <List subs={subs} />
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
