(function (window) {
  window.__env = window.__env || {};

  // API url
  window.__env.apiBaseUrl = 'http://localhost:8010';

  // environment name
  window.__env.envName = 'dev';

  // Whether or not to enable debug mode
  // Setting this to false will disable console output
  window.__env.enableDebug = true;

  window.__env.configurationLoaded = true;
}(this));