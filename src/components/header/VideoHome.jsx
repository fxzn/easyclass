import "./VideoHome.css";

function VideoHome({ isOpen, onClose }) {
  return (
    <>
      {isOpen && (
        <div className="video-modal-overlay">
          <div className="video-modal">
            <span className="close" onClick={onClose}>
              &times;
            </span>
            <iframe width="560" height="355" src="https://youtu.be/ixOd42SEUF0" title="YouTube video player" frameBorder="5" allowFullScreen></iframe>
          </div>
        </div>
      )}
    </>
  );
}

export default VideoHome;
