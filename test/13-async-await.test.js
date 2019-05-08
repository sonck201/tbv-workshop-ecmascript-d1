// Rewrite all of these from promises to async/await
// tip: you can turn the `it` callbacks to async functions by adding `async` to them :)
test('should work with resolved promises', async () => {
    return doAsync().then(async result => {
        await expect(result).toBe('resolved')
    })
})

test('should throw an error with a rejected promise', async () => {
    return doAsync(true)
        .catch(async error => {
            await expect(error).toBe('rejected')
        })
})

function doAsync(rejectPromise = false) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (rejectPromise) {
                reject('rejected')
            } else {
                resolve('resolved')
            }
        })
    })
}