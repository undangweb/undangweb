const versiServer = "1";
const versiScript = "1";
const serverjs = document.createElement("script");
const scriptjs = document.createElement("script");
serverjs.src = "server.js?v=" + versiServer;
scriptjs.src = "script.js?v=" + versiScript;
document.body.appendChild(serverjs);
serverjs.onload = () => {
    document.body.appendChild(scriptjs);
};
