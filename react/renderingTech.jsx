function List(props) {
    if (!props.animals) {
      return <div>Loading...</div>;
    }
  
    if (props.animals.length === 0) {
      return <div>There are no animals in the list!</div>;
    }
  
    return (
      <ul>
        {props.animals.map((animal) => {
          return <li key={animal}>{animal}</li>;
        })}
      </ul>
    );
  }
  
  function App() {
    const animals = [];
  
    return (
      <div>
        <h1>Animals: </h1>
        <List animals={animals} />
      </div>
    );
  }

// OR

  function List2(props) {
    return (
      <>
        {!props.animals ? (
          <div>Loading...</div>
        ) : props.animals.length > 0 ? (
          <ul>
            {props.animals.map((animal) => {
              return <li key={animal}>{animal}</li>;
            })}
          </ul>
        ) : (
          <div>There are no animals on the list!</div>
        )}
      </>
    );
  }

  function App2() {
    const animals = [];
  
    return (
      <div>
        <h1>Animals: </h1>
        <List2 animals={animals} />
      </div>
    );
  }
  
  // OR

  function List3(props) {
    return (
      <>
        {!props.animals && <div>Loading...</div>}
        {props.animals && props.animals.length > 0 && (
          <ul>
            {props.animals.map((animal) => {
              return <li key={animal}>{animal}</li>;
            })}
          </ul>
        )}
        {props.animals && props.animals.length === 0 && <div>There are no animals in the list!</div>}
      </>
    );
  }
  
  function App3() {
    const animals = [];
  
    return (
      <div>
        <h1>Animals: </h1>
        <List3 animals={animals} />
      </div>
    );
  }