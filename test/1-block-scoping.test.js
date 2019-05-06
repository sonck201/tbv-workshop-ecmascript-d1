const noop = () => {
}
test('basic scope understand between `var` vs `let`', () => {
    // Hint: write your code from here
    let bandName, isBestBand

    // Hint: end
    if (true) {
        // Hint: write your code from here
        bandName = 'King'
        isBestBand = false
        // Hint: end
        expect(bandName).toBe('King')
        expect(isBestBand).toBe(false)
    }

    bandName = 'Queen'
    isBestBand = true
    expect(bandName).toBe('Queen')
    expect(isBestBand).toBe(true)
})

test('can modify the value of a `let` variable even in the next block statement', () => {
    let releaseName = 'ES6'
    // Hint: write your code from here
    releaseName = 'ES2015'
    // Hint: end
    expect(releaseName).toBe('ES2015')
})

test('cannot modify the value of a `const` variable', () => {
    function getReleaseName() {
        const releaseName = 'ES6'
        if (true) {
            releaseName = 'Not-ES6'
        }
        return releaseName
    }

    expect(getReleaseName).toThrow()
})

test('variable is trapped inside of an `if` statement', () => {
    if (true) {
        let b = 1
    }
    expect(() => noop(b)).toThrow('b is not defined')
})

test(`can't redeclare using the same variable name`, () => {
    function doLoop() {
        for (let i = 0; i < 10; i++) {
            //
        }
        return i
    }

    expect(doLoop).toThrow('i is not defined')
})

test('means that we can start using block statements', () => {
    {
        let d = 2
    }

    expect(() => noop('d', d)).toThrow('d is not defined')
})

test('means that we can declare constant with the same name in block statement', () => {
    const d = 5
    // BLOCK STATEMENT
    {
        let d = 10
        expect(d).toBe(10)
    }
    expect(d).toBe(5)
})
