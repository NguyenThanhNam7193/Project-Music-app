// Phần lưu trữ danh sách nhạc và các bộ sưu tập do người dùng tạo
const musicCollection = {
    likedSongs: [{
        songId: { type: String },
        songName: { type: String },
        artist: { type: String }
    }],
    playlists: [{
        playlistName: { type: String }, // Tên bộ sưu tập (VD: "Nhạc đi ngủ")
        songs: [{ type: String }],      // Danh sách ID bài hát
        createdAt: { type: Date, default: Date.now }
    }]
};