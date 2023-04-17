import ButtonBar from "./ButtonBar";
import VideoWindow from "./VideoWindow";

const Mainbar = () => {
  return (
    <div className="w-10/12 overflow-scroll h-screen">
      <ButtonBar />
      <VideoWindow />
    </div>
  );
};

export default Mainbar;
