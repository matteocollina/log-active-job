import { ProcessListen, getWindows } from "active-window-listener"

const processes = getWindows().map(p => p.path)
// console.log(processes)

const listener = new ProcessListen(processes);

listener.changed(data => {
    try {
        console.log("Active: ", data)
    } catch (error) {
        console.error(error)
    }
})