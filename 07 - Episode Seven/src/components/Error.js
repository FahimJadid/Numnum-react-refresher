import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div className="error-container">
      <div className="gif">
        <img src="https://i.postimg.cc/2yrFyxKv/giphy.gif" alt="gif_ing" />
      </div>
      <div className="error-content">
        <h1 className="error-heading">`{err.status}! Nothing Found.`</h1>
        <p>
          ...maybe the page you're looking for is not found or never existed.
        </p>
        <a href="/" target="_blank" rel="noopener noreferrer">
          <button className="error-btn">Back to home</button>
        </a>
      </div>
    </div>
  );
};

export default Error;
