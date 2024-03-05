const test = async (z) => {
    return new Promise((resolve, reject) => {

        let y = z % 2

        try {
            if (y == 0) {
                setTimeout(() => {
                    resolve(`${z} dzieli się bez reszty`)
                }, 1000)
            }
            else {
                setTimeout(() => {
                    resolve(`${z} z resztą`)
                }, 1000)
            }

        } catch (error) {
            reject(error)
        }

    })
}

const check = async () => {
    const a = await test(3)
    console.log(a);
    const b = await test(5)
    console.log(b);
    const c = await test(6)
    console.log(c);
}

check()