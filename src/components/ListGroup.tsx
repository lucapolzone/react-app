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

  return (
    <Fragment>
      <h1>List</h1>
      { message }
      <ul className="list-group">
        {items.map((item) => (
          <li 
            className="list-group-item" 
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