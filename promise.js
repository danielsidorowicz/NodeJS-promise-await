const test = async () => {
    console.log("test 0")

    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("test 1")
        }, 1000);
    })
}

const check = async () => {
    const info = await test()
    console.log(info);
}

check()