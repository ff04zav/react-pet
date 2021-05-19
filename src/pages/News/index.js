import React, { useEffect } from "react";
import { fetchNews } from "../../redux/news/news.actions";
import { connect } from "react-redux";
import Feed from "../../components/Feed";
import "./styles.scss";

const News = ({ fetchNews, isReady, data, message }) => {
  return (
    <div className="News">
      {isReady ? <Feed data={data} /> : "Not ready"}
      <button onClick={fetchNews}>Fetch data</button>
    </div>
  );
};

function mapDispatchToProps(dispatch) {
  return { fetchNews: () => dispatch(fetchNews()) };
}

function mapStateToProps({ news }) {
  return {
    isReady: news.isReady,
    data: news.data,
    message: news.message,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(News);
