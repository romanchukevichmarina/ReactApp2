import React, { useState } from "react";
import Table from "./Table";
import { useEffect } from "react";

function List() {
  const [screens, setScreens] = useState([]);
  const [isButton, setIsButton] = useState(true);
  const [offset, setOffset] = useState(null);
  var Airtable = require("airtable");
  Airtable.configure({
    endpointUrl: "https://api.airtable.com",
    apiKey:
      "patmq07nXDKSmxPGa.bf193391d158de5f392c7b54e0e7f5a259a4cd29326d8ebe144611a15e7adac3",
  });

  const load = async () => {
    
    const querry = { pageSize: 10, offset };
    if (!querry.offset) delete querry.offset;
    const params = new URLSearchParams(querry);
    const url = `https://api.airtable.com/v0/appFf2I31ajPGdyGi/screens?${params}`;

    const response = await fetch(url, {
      headers: {
        Authorization:
          "Bearer patmq07nXDKSmxPGa.bf193391d158de5f392c7b54e0e7f5a259a4cd29326d8ebe144611a15e7adac3",
      },
    }).then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res;
      } else {
        alert("Ошибка соединения");
        throw Error;
      }
    });
    const data = await response.json();
    console.log(data);
    const newOffset = data.offset;
    console.log({ newOffset });
    const recieved = data.records.map((el) => el.fields);
    if (!newOffset) {
      setIsButton(false);
      console.log(123)
    }
    setOffset(newOffset);
    setScreens((screens) => [...screens, ...recieved]);
  };
  useEffect(() => {
    load();
  }, []);

  return <Table screens={screens} load={load} isButton = {isButton}></Table>;
}

export default List;
