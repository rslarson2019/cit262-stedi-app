import { sayHello, sayName } from "../utils/helloworld.mjs";
import assert from 'assert';

it("Test Hello World", () => {
    const hello = sayHello;

    assert.equal(hello,"hello")

});

it("Test Say name", () => {
    const myName = sayName();
    console.log(myName);
    expect(myName).toBe("Riley" );
} );

