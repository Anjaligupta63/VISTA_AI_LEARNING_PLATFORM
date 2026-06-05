const videos = [
  "Array Introduction",
  "Array Traversal",
  "Array Insertion",
  "Array Deletion",
  "Linked List Intro",
];

export default function Playlist() {
  return (
    <div className="bg-white/5 border border-white/10 rounded-3xl p-6">

      <h2 className="text-2xl font-bold mb-5">
        Playlist
      </h2>

      <div className="space-y-3">

        {videos.map((video, index) => (
          <div
            key={index}
            className="p-4 rounded-xl bg-slate-900 hover:bg-slate-800 cursor-pointer transition"
          >
            ▶ {video}
          </div>
        ))}

      </div>

    </div>
  );
}