import { sayHello } from "../src/say-hello"

describe('sayHello', function () {
    it('should return hello ridlo', function () {
        expect(sayHello('ridlo')).toBe('Hello ridlo')
    })
})