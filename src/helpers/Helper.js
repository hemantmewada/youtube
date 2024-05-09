export const videoLength = (secs) => {
  const mins = Math.floor(secs / 60);
  const totalMinsInSecs = mins * 60;
  const remainingSeconds = secs - totalMinsInSecs;
  return `${mins < 10 ? "0" + mins : mins}:${
    remainingSeconds < 10 ? "0" + remainingSeconds : remainingSeconds
  }`;
};
