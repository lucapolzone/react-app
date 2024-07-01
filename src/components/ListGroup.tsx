import { Fragment, useState } from "react";

function ListGroup() {
  let items =  [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris'
  ];
  
  const message = items.length === 0 ? <p>No item found</p> : null;

  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);
  //variable (selectedIndex): arr[0]; 
  //updater function: arr[1];


  
  return (
    <Fragment>
      <h1>List</h1>
      { message }
      <ul className="list-group">
        {items.map((item, index) => (
          <li 
            className={ selectedIndex === index 
              ? 'list-group-item active' 
              : 'list-group-item'
            } 
            key={item} 
            onClick={() => { setSelectedIndex(index) } }
          >
            {item}
          </li>
        ))};
      </ul>
    </Fragment>
  );
}

export default ListGroup;