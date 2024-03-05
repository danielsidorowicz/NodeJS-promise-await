const waitForMe = async (milisec, data) => {
    return new Promise((resolve, reject) => {
        try {
            setTimeout(() => { resolve(data) }, milisec);
        }
        catch (error) {
            reject(error)
        }
    })
}

const printuj = async () => {
    // a) for in object
    // let a = 0
    // const o = { a: 1, b: 2, c: 3, d: 4, e: 5 }
    // for (const i in o) {
    //     a += await waitForMe(500, o[i]);
    //     console.log("wynik pośredni: " + i + o[i]);
    // }
    // console.log("suma wartości w obiekcie: " + a);

    // b) for of array
    // let a = 0;
    // const t = [1, 2, 3, 4, 5]
    // for (const i of t) {
    //     a += await waitForMe(500, i);
    //     console.log("wynik pośredni: " + a);
    // }
    // console.log("suma: " + a);

    // c) foreach - nie działa porawnie, bo foreach nie
    // wykonuje się po kolei tylko równlegle
    // let a = 0;
    // const t = [1, 2, 3, 4, 5]
    // t.forEach(async (item) => {
    //     a += await waitForMe(1000, item);
    //     console.log("wynik pośredni: " + a);
    // });
    // console.log("suma: " + a);

    // d) zwykły for - poprawnie
    // for (let i = 0; i < 5; ++i) {
    //     console.log(await waitForMe(1000, i));
    // }
    // console.log("koniec printowania co 1000 ms- można działać dalej!");
    // for (let i = 0; i < 5; ++i) {
    //     console.log(await waitForMe(500, i));
    // }
    // console.log("koniec printowania co 500 ms- można działać dalej!");
    // for (let i = 0; i < 5; ++i) {
    //     console.log(await waitForMe(100, i));
    // }
    // console.log("koniec printowania co 100 ms!");
}

printuj();