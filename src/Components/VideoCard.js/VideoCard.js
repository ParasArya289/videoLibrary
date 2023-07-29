import "./VideoCard.css";

export const VideoCard = ({
  video: { _id, title, views, thumbnail, src, category, creator },
}) => {
  //     _id: 19,
  //     title: "Origami Swan - Simple and Elegant",
  //     views: 2879,
  //     chips: ["origami", "swan", "paper", "elegant"],
  //     thumbnail: "https://picsum.photos/300/174",
  //     src: "https://www.youtube.com/embed/GBIIQ0kP15E",
  //     category: "Origami",
  //     creator: "PaperCraftPro",
  //
  return (
    <div
      className="videocard"
      //   onClick={() => navigate("/category/" + category)}
    >
      <img src={thumbnail} alt={title} />
      <div className="video-info">
        <img src={thumbnail} alt={creator} />
        <div>
          <text>{title}</text>
          <div className="additional-info">
            <span>{views} Views</span>
            <span> | {creator}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
