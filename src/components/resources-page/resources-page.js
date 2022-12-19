import React, { useState, useEffect } from "react";
import { COLUMNS } from "./paginated-table/columns";
import { Paginated } from "./paginated-table/paginated";
import { useLocation } from "react-router-dom";
import "./resources-page.css";
import Header from "../header/header";
function ResourcesPage({ resourceID }) {
  const [resourcesData, setResourcesData] = useState([]);
  const location = useLocation();
  useEffect(() => {
    fetch(
      `https://media-content.ccbp.in/website/react-assignment/resource/${location.state.data.id}.json`
    )
      .then((results) => results.json())
      .then((data) => {
        console.log(data["resource_items"], "DATA");
        setResourcesData([...data["resource_items"]]);
      });
  }, []);
  console.log(
    location.state.data.id,
    resourcesData,
    `/resource/${location.state.data.id}.json`,
    "OPS"
  );
  return (
    <div>
      <Header showButton={true} />
      <h2 className="resources-title">
        <u>{location.state.data.title} Resource Items table</u>
      </h2>
      {resourcesData.length == 0 ? (
        "Loading..."
      ) : (
        <Paginated data={resourcesData} columns={COLUMNS} />
      )}
    </div>
  );
}

export default ResourcesPage;
