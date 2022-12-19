import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../header/header";
import "./home-page.css";
import CardList from "../card-list/card-list";
import TabPane from "../tab-panel/tab-panel";
import Tabs from "../tab-panel/tab";
const HomePage = () => {
  const [cardsData, setCardsData] = useState([]);
  const [searchField, setSearchField] = useState("");
  useEffect(() => {
    const url =
      "https://media-content.ccbp.in/website/react-assignment/resources.json";

    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const json = await response.json();
        setCardsData(json);
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, []);
  function search(items) {
    return items.filter((item) => {
      return item.title.includes(searchField);
    });
  }
  function tagFilter(items, tagName) {
    return items.filter((item) => {
      return item.tag == tagName;
    });
  }
  const handleFilter = (e) => {
    setSearchField(e.target.value);
  };
  return (
    <div>
      <Header showButton={true} />
      <div className="container">
        <Tabs>
          <TabPane name="Resources" key="1">
            <input
              className="search"
              value={searchField}
              type="search"
              onChange={handleFilter}
              placeholder={"Search"}
            />
            {Object.keys(cardsData).length == 0 ? (
              <h1>Loading...</h1>
            ) : (
              <CardList cardsData={search(cardsData)} />
            )}
          </TabPane>
          <TabPane name="Requests" key="2">
            <CardList cardsData={tagFilter(cardsData, "request")} />
          </TabPane>
          <TabPane name="Users" key="3">
            <CardList cardsData={tagFilter(cardsData, "user")} />
          </TabPane>
        </Tabs>
      </div>
    </div>
  );
};
export default HomePage;
