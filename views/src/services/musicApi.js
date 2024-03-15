class MusicApi {
  static async getMusics() {
    const response = await fetch('http://localhost:8080/musics');
    const data = await response.json();
    return data;
  }
}

export default MusicApi;