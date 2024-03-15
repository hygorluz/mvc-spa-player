import { useState } from "react";

export const useProcessingMedia = (ref) => {
  const [isProcessing, setProcessing] = useState(false)


  ref.current?.addEventListener('loadstart', () => setProcessing(true));
  ref.current?.addEventListener('canplay', () => setProcessing(false));

  return isProcessing
}