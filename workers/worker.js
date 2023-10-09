import {parentPort} from "worker_threads"


parentPort.on("message", (jobs) => {

    for (let i of jobs) {
        let count = 0
        
        for (let x = 0; x < i; x++) {
            count++
        }
        
    }

    parentPort.postMessage("done")
})
