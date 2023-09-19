import  { sum }  from "../sum"

test("Sum function shourls calculate sum of 2 numbers", () => {


    const result = sum(3,4);

    expect(result).toBe(7);
});