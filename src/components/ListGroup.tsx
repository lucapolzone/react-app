import { Fragment } from "react";

function ListGroup() {
  const items =  [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris'
  ];
  
  const message = items.length === 0 ? <p>No item found</p> : null;

  return (
    <Fragment>
      <h1>List</h1>
      { message }
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))};
      </ul>
    </Fragment>
  );
}

export default ListGroup;