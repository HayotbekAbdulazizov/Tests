import {Worker} from "worker_threads"


function chunkify(arr, num){
    let chunks = []

    for(let i = num; i > 0; i--){
        chunks.push( arr.splice(0, Math.ceil(arr.length / i)) )
    }

    return chunks
}



function run(jobs, concurrentWorkers ){
    const chunks = chunkify(jobs, concurrentWorkers)

    const tick = performance.now()

    let completedWorkers = 0


    chunks.forEach((data, i) => {

        const worker = new Worker('./worker.js')
        worker.postMessage(data)
        
        worker.on("message", (msg) => {
            console.log("Done with worker: ", i);

            completedWorkers++
            if(completedWorkers == concurrentWorkers){
                console.log("All Done in: ", performance.now() - tick, ' seconds');
                process.exit()
            }
        })

    })
}




const jobs = Array.from({length:100}, () => 1e10)


run(jobs, 5)