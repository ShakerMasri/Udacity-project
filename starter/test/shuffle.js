import { expect } from "chai";
import { shuffle } from "../src/shuffle.js";

describe("shuffle", () => {
    it("shuffles the array elements", () => {
        const before = [1, 2, 3, 4, 5];
        const shuffled = shuffle(before);
        expect(shuffled).to.not.deep.equal(before);
    });
});
