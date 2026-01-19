import { useState, useEffect } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./styles.css";
export default function ImageSlider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [currentSLide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchImages = async (getUrl) => {
      try {
        setLoading(true);
        const res = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
        const data = await res.json();
        if (data) {
          setImages(data);
          setLoading(false);
        }
      } catch (e) {
        setErrorMsg(e.message);
        setLoading(false);
      }
    };
    if (url !== null) {
      fetchImages(url);
    }
  }, [url]);

  function handlePrevious() {
    setCurrentSlide(currentSLide === 0 ? images.length - 1 : currentSLide - 1);
  }

  function handleNext() {
    setCurrentSlide(currentSLide === images.length - 1 ? 0 : currentSLide + 1);
  }

  if (loading) {
    return <div>Loading Data, please wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occur {errorMsg}</div>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={handlePrevious}
      />
      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={
                currentSLide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={handleNext}
      />
      <span className="circle-indicators">
        {images && images.length
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSLide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}
