"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = require("../index");
describe("Emirates Id Validation", function () {
    const idNoDashes = "784198012345679";
    const invalidId = "123-1234-0123456-7";
    const idDashes = "784-1980-1234567-9";
    it("valid with no dashes", function () {
        const result = index_1.default(idNoDashes);
        expect(result).toBe(true);
    });
    it("valid with dashes", function () {
        const result = index_1.default(idDashes);
        expect(result).toBe(true);
    });
    it("invalid", function () {
        const result = index_1.default(invalidId);
        expect(result).toBe(false);
    });
});
