export const setOriginalWindowSize = () => {
  const originalWidth = window.screen.width;
  const originalHeight = window.screen.height;
  document.documentElement.style.setProperty('--original-window-width', `${originalWidth}px`);
  document.documentElement.style.setProperty('--original-window-height', `${originalHeight}px`);
};

