import Datastore from 'nedb';

const zadanie = new Datastore({
    filename: './database/zadanie1.db',
    autoload: true
});

const save = async (i) => {
    return new Promise((resolve, reject) => {
        let interval
        let j = 0

        let msArr = []

        try {
            interval = setInterval(() => {
                if (j < i) {
                    let d = new Date();
                    let seconds = d.getSeconds();
                    let ms = d.getMilliseconds();
                    msArr.push(ms)

                    let doc = {
                        s: seconds,
                        mil: ms
                    }
                    try {
                        zadanie.insert(doc, function (err, newDoc) { });
                    } catch (error) {
                        reject(error.message)
                    }
                    j++
                }
                else {
                    clearInterval(interval)
                    resolve(msArr)
                }

            }, 100);

        } catch (error) {
            reject(error)
        }



    })
}

const go = async () => {
    const all = await save(10)
    console.log(all);
}

go()