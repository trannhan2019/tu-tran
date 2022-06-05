import '../css/List.css';
import { IState as IProps } from '../App';

export default function List({
  people,
}: {
  people: IProps['people'][];
}) {
  const renderList = () => {
    const list = people.map((p, idx) => (
      <div className="list-item-container" key={idx}>
        {p.name} - {p.age} - {p.bio}
      </div>
    ));
    return list;
  };
  return (
    <div className="list-container">
      <h1>List</h1>
      {renderList()}
    </div>
  );
}
