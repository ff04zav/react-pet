import React from "react";

const Feed = ({ data }) => {
  return (
    <div className="pseudo-table">
      {data.map((item, index) => (
        <NewsItem key={index} item={item} />
      ))}
    </div>
  );
};

const NewsItem = ({ item }) => {
  return (
    <>
      <div className="title">{item.title}</div>
      <div className="description">{item.description}</div>
    </>
  );
};

export default Feed;
