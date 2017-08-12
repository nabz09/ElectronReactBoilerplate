const electron = require('electron');
const { app, BrowserWindow } = require('electron');

let win;

app.on('ready', () => {
    win = new BrowserWindow({
        height: 600,
        width: 800
    });

    win.loadURL(`file://${__dirname}/index.html`);

    win.on('closed', () => {
        win = null;
    });
})
