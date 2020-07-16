const functions = require("./functions");

// beforeEach(() => initDatabase());
// afterEach(() => ClosedDatabase());

// beforeAll(() => initDatabase());
// afterAll(() => ClosedDatabase());
// const initDatabase = () => console.log("Database Initialized...");
// const ClosedDatabase = () => console.log("Database Closed...");
const nameCheck = () => console.log("Checking Name...");
describe("Checking Names", () => {
    beforeEach(() => nameCheck());

    test(" User is Jeff", () => {
        const user = "Jeff";
        expect(user).toBe("Jeff");
    });

    test(" User is Karen", () => {
        const user = "Karen";
        expect(user).toBe("Karen");
    });
});

//ToBe
test("Adds 2 + 2 to equal 4", () => {
    expect(functions.add(2, 2)).toBe(4);
});

//not
test("Adds 2 + 2 to NOT equal 5", () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

// ToBeNull
test("Should be null", () => {
    expect(functions.isNull()).toBeNull();
});

//toBeFalsy
test("Should be falsey", () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

test("zero Should be falsey", () => {
    expect(functions.checkValue(0)).toBeFalsy();
});

test("undefined Should be falsey", () => {
    expect(functions.checkValue(undefined)).toBeFalsy();
});

// toEqual
test("User Should be Brad Traversy object", () => {
    expect(functions.createUser()).toEqual({
        firstName: "Brad",
        lastName: "Traversy",
    });
});

//Less than and greater than
test("Should be under 1600", () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
    const load3 = 800;
    const load4 = 800;
    expect(load3 + load4).toBeLessThanOrEqual(1600);
});

//Regex
test("Theere is no I in team", () => {
    expect("Team").toMatch(/T/);
});

//Arrays
test("Admin should be in userfnames", () => {
    usernames = ["john", "karen", "admin"];
    expect(usernames).toContain("admin");
});

//Working with asnc data

//Promise
// test("User fetched name should be Leanne Graham", () => {
//     expect.assertions(1);
//     return functions.fetchUser().then((data) => {
//         expect(data.name).toEqual("Leanne Graham");
//     });
// });

// Async Await
test("User fetched name should be Leanne Graham", async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual("Leanne Graham");
});
