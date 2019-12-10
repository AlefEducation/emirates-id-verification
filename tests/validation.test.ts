import validate from "../index";

describe("Emirates Id Validation", function() {
  const idNoDashes = "784198012345679";
  const invalidId = "123-1234-0123456-7";
  const idDashes = "784-1980-1234567-9";

  it("valid with no dashes", function() {
    const result = validate(idNoDashes);
    expect(result).toBe(true);
  });

  it("valid with dashes", function() {
    const result = validate(idDashes);
    expect(result).toBe(true);
  });

  it("invalid", function() {
    const result = validate(invalidId);
    expect(result).toBe(false);
  });
});
