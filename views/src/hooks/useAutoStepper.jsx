export const useAutoStepper = (ref, nextAction) => {
  ref.current?.addEventListener('ended', nextAction);
}