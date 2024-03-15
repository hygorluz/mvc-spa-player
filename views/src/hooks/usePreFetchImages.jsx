export const usePreFetchImages = () => 
   (musicData) => {
    musicData.forEach(music => {
      const img = new Image()
      img.src = music.image
    });
  }