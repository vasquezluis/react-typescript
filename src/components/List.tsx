import { Sub } from "../types";

// interface de las props
interface Props {
  subs: Array<Sub>;
}

function List({ subs }: Props) {
  const renderList = (): JSX.Element[] => {
    return subs.map((sub, index) => {
      return (
        <li key={sub.nick}>
          <img src={sub.avatar} alt={sub.nick} />
          <h4>
            {sub.nick} (<small>{sub.subMonths}</small>)
          </h4>
          <p>{sub.description?.substring(0, 100)}</p>
        </li>
      );
    });
  };

  return <ul>{renderList()}</ul>;
}

export default List;
