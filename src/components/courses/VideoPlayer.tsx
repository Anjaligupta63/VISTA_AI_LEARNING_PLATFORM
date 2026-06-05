export default function VideoPlayer() {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl overflow-hidden">

      <iframe
        className="w-full aspect-video"
        src="https://www.youtube.com/embed/8hly31xKli0"
        title="YouTube video player"
        allowFullScreen
      />

    </div>
  );
}