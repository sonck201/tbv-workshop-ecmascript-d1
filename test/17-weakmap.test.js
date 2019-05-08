test('has a set method', () => {
    const key = {
        name: 'Aaron'
    }
    const value = {
        twitter: '@js_dev',
        gplus: '+AaronFrost'
    }

    const myMap = new WeakMap()
    myMap.set(key, value)
    // Create a new WeakMap called 'myMap'
    // Add a new entry. Use key as the key and values as the value
    expect(myMap.has(key)).toBe(true)
})

test(`should enable private members in classes`, () => {
    // If you make it this far, write a class with private member variables, using WeakMaps
    class Person {
        constructor(name, age) {
            let weakMapData = {name, age}
            this._wm = new WeakMap()
            this._wm.set(this, weakMapData)
        }

        getName() {
            return (this._wm.get(this)).name
        }

        getAge() {
            return (this._wm.get(this)).age
        }
    }

    const person = new Person('Kent C. Dodds', 26)
    expect(person._name).toBeUndefined()
    expect(person.getName()).toBe('Kent C. Dodds')
    expect(person._age).toBeUndefined()
    expect(person.getAge()).toBe(26)
})