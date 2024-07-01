import { Fragment } from "react";
import { MouseEvent } from "react";

function ListGroup() {
  const items =  [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris'
  ];
  
  const message = items.length === 0 ? <p>No item found</p> : null;

  //Event handler
  const handleClick = (event: MouseEvent) => console.log(event);

  //Nessun elemento è selezionato
  const selectedIndex = 0;
  
  return (
    <Fragment>
      <h1>List</h1>
      { message }
      <ul className="list-group">
        {items.map((item, index) => (
          <li 
            className={ selectedIndex === index ? 'list-group-item active' : 'list-group-item'} 
            key={item} 
            onClick={handleClick}
          >
            {item}
          </li>
        ))};
      </ul>
    </Fragment>
  );
}

export default ListGroup;