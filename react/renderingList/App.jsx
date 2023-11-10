import { people } from './data.js';
import { getImageUrl } from './utils.js';

export default function List() {
    const renderList = (title, filterCondition) => {
        const filteredPeople = people.filter(filterCondition);

        return (
            <div key={title}>
                <h2>{title}</h2>
                <ul>
                    {filteredPeople.map(person => (
                        <li key={person.id}>
                            <img src={getImageUrl(person)} alt={person.name} />
                            <p>
                                <b>{person.name}:</b>
                                {' ' + person.profession + ' '}
                                known for {person.accomplishment}
                            </p>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }

    return (
        <article>
            <h1>Scientists</h1>
            {renderList('Chemists', person => person.profession === 'chemist')}
            {renderList('Everyone Else', person => person.profession !== 'chemist')}
        </article>
    )
}

// 


export default function List() {
  return <ul> {
  people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}</b>
          {' ' + person.profession + ' '}
          known for {person.accomplishment}
      </p>
    </li>
  )}</ul>;
}


// OR

export default function List() {
  const listItems = people.map(person =>
    <li key={person.id}>
      <img
        src={getImageUrl(person)}
        alt={person.name}
      />
      <p>
        <b>{person.name}</b>
          {' ' + person.profession + ' '}
          known for {person.accomplishment}
      </p>
    </li>
  );
  return <ul>{listItems}</ul>;
}

// OR

function ListPeople(props) {
    return(
       <li>
        <img
          src={getImageUrl(props)}
          alt={props.name}
        />
        <p>
          <b>{props.name}</b>
            {' ' + props.profession + ' '}
            known for {props.accomplishment}
        </p>
      </li>
    )
  }
  
  export default function List() {
    return <ul>{
      people.map(person => 
      <ListPeople {...person} key={person.id}/>
      )}
    </ul>;
  }
  