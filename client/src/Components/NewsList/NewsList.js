import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchNews } from "../../Redux/NewsActions";
import { formatISO9075 } from "date-fns";
import "./NewsList.css";

const NewsList = ({ news, loading, error, publishedAt, fetchNews }) => {
  useEffect(() => {
    fetchNews();
  }, [fetchNews]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }
  let date = new Date(); // Initialize with a default value

  if (typeof publishedAt === "string" && !isNaN(Date.parse(publishedAt))) {
    date = new Date(publishedAt);
  } else if (publishedAt instanceof Date) {
    date = publishedAt;
  }

  return (
    <div style={{ paddingTop: "75px" }} className="container">
      <h2 className="Headlines">Top Headlines</h2>
      <ul className="HeadlineWraper">
        {news.map((article) => (
          <li key={article.title} className="newsCard stack featured">
            <img
              className="newsImg"
              src={article.urlToImage}
              alt="Article Thumbnail"
            />
            <div className="cardContent">
              <p>{article.title}</p>
              {/* <p>Date {article.publishedAt}</p> */}
              <time className="dateTime">{formatISO9075(date)}</time>
              <p>
                <a className="readMore" href={article.url}>
                  Read more
                </a>
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    news: state.news.news,
    loading: state.news.loading,
    error: state.news.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchNews: () => dispatch(fetchNews()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
