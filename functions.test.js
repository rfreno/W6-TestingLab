const functions = require('./function')

const { returnTwo, greeting, add, multiply, divide, subtract } = functions

test('Test should run and return 2', () => {
    expect(returnTwo()).toEqual(2)
})

test('greeting test 1', () => {
    expect(greeting('James')).toEqual("Hello, James.")
})

test('greeting test 2', () => {
    expect(greeting('Jill')).toEqual("Hello, Jill.")
})


describe('Math functions', () => {
    test('add test 1', () => {
        expect(add(1,2)).toEqual(3)
    })
    
    test('add test 2', () => {
        expect(add(5,9)).toEqual(14)
    })

    test('multiply 1', () => {
        expect(multiply(3,5)).toEqual(15)
    })

    test('multiply 2', () => {
        expect(multiply(5,10)).toEqual(50)
    })

    test('divide 1', () => {
        expect(divide(6,3)).toEqual(2)
    })

    test('divide 1', () => {
        expect(divide(3,6)).toEqual(0.5)
    })

    test('subtract 1', () => {
        expect(subtract(4,2)).toEqual(2)
    })

    test('subtract 2', () => {
        expect(subtract(100,50)).toEqual(50)        
    })

})