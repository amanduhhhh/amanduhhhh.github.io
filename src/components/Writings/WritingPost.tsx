import Loader from "react-loaders";
import ReactMarkdown from "react-markdown";
import { Link, useParams } from "react-router-dom";
import { getWriting, formatDate } from "./writings";
import "./Writings.scss";

const WritingPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const writing = slug ? getWriting(slug) : undefined;

  if (!writing) {
    return (
      <>
        <div className="writings-page">
          <div className="text-area">
            <h1>not found</h1>
            <p>
              That writing doesn't exist. <Link to="/writings">Back to writings</Link>.
            </p>
          </div>
        </div>
        <Loader type="pacman" active={true} />
      </>
    );
  }

  return (
    <>
      <div className="writings-page">
        <div className="text-area writing-post">
          <Link to="/writings" className="back-link">
            &larr; writings
          </Link>
          <h1 className="highlighted">{writing.title}</h1>
          {writing.date && (
            <span className="writing-date">{formatDate(writing.date)}</span>
          )}
          <div className="writing-body">
            <ReactMarkdown>{writing.body}</ReactMarkdown>
          </div>
        </div>
      </div>
      <Loader type="pacman" active={true} />
    </>
  );
};

export default WritingPost;
