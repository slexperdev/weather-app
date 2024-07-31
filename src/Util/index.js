const getNightTime = data => {
  const currentTime = new Date().getTime() / 1000; // Current time in seconds
  return currentTime < data.sys.sunrise || currentTime > data.sys.sunset;
};

export {getNightTime};
