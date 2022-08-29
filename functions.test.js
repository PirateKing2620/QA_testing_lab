let functions = require('./functions')

test("returnTwo Test", () => {
    expect(functions.returnTwo()).toEqual(2)
})

test("greeting Test", () => {
expect(functions.greeting('James')).toEqual("hello, Jill.")
})

test("add Test", () => {
    expect(functions.add(1,2)).toEqual(3)
})

test("add Test", () => {
    expect(functions.add(5, 9)).toEqual(14)
})
