import { app, BrowserWindow } from 'electron'

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        webPreferences: {
            nodeIntegration: true
        }
    })
    win.loadURL('http://localhost:3000')
    //win.loadFile('./dist-react/index.html')

}

app.on('ready', createWindow)
