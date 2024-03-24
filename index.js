const setSceneBackground = () => {
  const mainWindow = document.getElementById('main-window');
  mainWindow.style.background = 'url(./assets/backgrounds/scene_faculty.jpg) no-repeat';
  mainWindow.style.backgroundSize = 'cover';
};

const build = () => {
  setSceneBackground();
};

build();
