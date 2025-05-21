import VideoCard from '../components/VideoCard';
import Navbar from '../components/Navbar';
import './Home.css';

function Home({ videos, onSearch }) {
  return (
    <>
      <Navbar onSearch={onSearch} />
      <div className="video-list">
        {videos.map((video) => (
          <VideoCard key={video.id.videoId || video.id} video={video} />
        ))}
      </div>
    </>
  );
}

export default Home;
