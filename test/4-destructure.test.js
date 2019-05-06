const noop = () => {
}

function getAddress() {
    return {
        city: 'Salt Lake City',
        state: 'UT',
        zip: 84115,
        coords: {
            lat: 40.776608,
            long: -111.920485,
        },
    }
}

function getNumbers() {
    return [1, 2, 3, 4, 5, 6]
}

function getNestedNumbers() {
    return [1, 2, [3, 4, [5, 6]]]
}

test('can be used to pull apart objects', () => {
    // Using destructuring, call `getAddress()` and create a 'city', 'state' and 'zip' variable.
    const {city, state, zip} = getAddress()

    // Your implementation goes here
    expect(city).toBe('Salt Lake City')
    expect(state).toBe('UT')
    expect(zip).toBe(84115)
})

test('sets missing values to undefined', () => {
    // Using destructuring, call `getAddress()` and create an 'address' variable.
    const {address} = getAddress()

    // Your implementation goes here
    expect(address).toBeUndefined()
})

test('can alias destructured variables', () => {
    const {city: c, state: s, zip: z, coords} = getAddress()

    // Using destructuring, call `getAddress()` and pull the city, state and zip out, and alias them to c, s, z, respectively
    expect(c).toBe('Salt Lake City')
    expect(s).toBe('UT')
    expect(z).toBe(84115)
    expect(() => noop(city)).toThrow()
    expect(() => noop(state)).toThrow()
    expect(() => noop(zip)).toThrow()
})

test('can destructure nested variables', () => {
    // Using destructuring, call `getAddress()` and create `lat` and `long` variables.
    const {city, state, zip, coords: {lat, long}} = getAddress()

    expect(lat).toBe(40.776608)
    expect(long).toBe(-111.920485)
    expect(() => noop(coords)).toThrow()
})

test('can be used to pull apart arrays', () => {
    // Call getNumbers and pull the first value out as `one` and the second as `two`
    const [one, two] = getNumbers()

    expect(one).toBe(1)
    expect(two).toBe(2)
})

test('can skip indexes in arrays', () => {
    // Call getNumbers and pull the first value out as `one` and the third as `three`
    const [one, , three] = getNumbers()

    expect(one).toBe(1)
    expect(three).toBe(3)
    expect(() => noop(two)).toThrow()
})

test('can reach nested arrays', () => {
    // Call getNestedNumbers and pull the first value out as `one`, the 3 as `three` and 6 as `sixth`.
    const [one, , [three, , [, six]]] = getNestedNumbers()

    expect(one).toBe(1)
    expect(three).toBe(3)
    expect(six).toBe(6)
})
