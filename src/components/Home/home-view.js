import React, { useEffect, useState } from "react";
import { Button } from "@material-ui/core";
import { getCalls, getCall } from "../../api/apiCalls";

const HomeView = () => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState([]);
  useEffect(() => {
    (async () => {
      const getAllItems = await getCalls();
      setItems(getAllItems.data);
      console.log(items);
    })();
  }, []);

  const handleClick = async slug => {
    const getItem = await getCall(slug);
    setItem(getItem);
    console.log(item);
  };
  return (
    <div>
      Home
      <br />
      <div>
        {items.map(item => (
          <div>{item.title}</div>
        ))}
      </div>
      <div>
        <Button variant="contained" onClick={() => handleClick("javascript")}>
          Default
        </Button>
      </div>
    </div>
  );
};

export default HomeView;
