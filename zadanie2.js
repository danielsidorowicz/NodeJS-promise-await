import { totalmem, freemem } from "os"
import { readFile, writeFile } from "fs";
import path from "path";
import { log } from "console";
const __dirname = path.resolve();



const save = async (i) => {
    return new Promise((resolve, reject) => {
        let interval
        let j = 0

        let files = []

        try {
            interval = setInterval(() => {
                if (j < i) {
                    j++

                    let docs = {
                        totalmem: totalmem(),
                        freemem: freemem()
                    }

                    let d = new Date();
                    let hour = d.getHours();
                    let minutes = d.getMinutes();
                    let seconds = d.getSeconds();

                    let filename = `log_${hour}_${minutes}_${seconds}.txt`
                    files.push(filename)

                    writeFile(__dirname + "/logs/" + filename, JSON.stringify(docs), function (err) {
                        if (err) {
                            return console.log(err);
                        }

                    });
                }
                else {
                    clearInterval(interval)
                    resolve(files)
                }

            }, 1000);

        } catch (error) {
            reject(error)
        }
    })
}

const readAll = async (fileNames) => {
    return new Promise((resolve, reject) => {
        let interval
        let j = 0

        let data = []

        try {
            interval = setInterval(() => {
                if (j < fileNames.length) {
                    readFile(__dirname + "/logs/" + fileNames[j], "utf8", function (err, file) {
                        if (err) {
                            return console.log(err);
                        }
                        data.push(file)
                    });
                    j++
                }
                else {
                    clearInterval(interval)
                    resolve(data)
                }

            }, 100);

        } catch (error) {
            reject(error)
        }
    })
}

const go = async () => {
    const savedFiles = await save(5)
    const readFiles = await readAll(savedFiles)
    console.log(readFiles);
}

go()