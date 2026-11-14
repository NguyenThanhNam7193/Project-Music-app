// Phần lưu trữ sở thích âm nhạc của người dùng
const musicPreferences = {
    favoriteGenres: [{ 
        type: String // Ví dụ: ['Pop', 'Lofi', 'Rap']
    }],
    favoriteArtists: [{ 
        type: String // Ví dụ: ['Sơn Tùng M-TP', 'Đen Vâu']
    }],
    vibe: {
        type: String,
        enum: ['Chill', 'Energetic', 'Sad', 'Workout'] // Trạng thái nghe nhạc
    }
};