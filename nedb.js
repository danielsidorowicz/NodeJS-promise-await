import Datastore from 'nedb';

const coll1 = new Datastore({
    filename: './database/kolekcja.db',
    autoload: true
});

const getAll = async () => {
    return new Promise((resolve, reject) => {
        try {
            coll1.find({}, (err, docs) => {
                resolve(docs)
            });
        } catch (error) {
            reject(error.message)
        }
    })
}


const show = async () => {
    console.log("pobieram dane 1 raz");
    const x = await getAll()
    console.log(x);
    console.log("pobieram dane 2 raz");
    const y = await getAll()
    console.log(y);
}

show()