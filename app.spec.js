let app = require('./app.js');

afterAll(done => {
    //JEST gives this error
    //===> Jest did not exit one second after the test run has completed 
    //if we dont shutdown the express server
    app.shutdown();
    done();
});

test('testing jsonplace holder axios data', async() => {
    // expect.assertions(1);
    const data = await app.getData();
    expect(data).toEqual({
        "userId": 1,
        "id": 1,
        "title": "delectus aut autem",
        "completed": false
    });
    expect(typeof app.createUser().age).toBe('number');

});

test('testing get user', () => {
    expect(app.createUser()).toEqual({
        firstName: 'asif',
        age: 33
    });
    expect(typeof app.createUser().age).toBe('number');

});

describe('users get function testing', () => {
    let users = app.getUsers();

    test('should be an array response', () => {
        expect(Array.isArray(users)).toBeTruthy();
    });



    test('should have keys', () => {
        users.map(user => {
            expect(user).toHaveProperty('firstName');
            expect(typeof user.firstName).toMatch('string');
            expect(user).toHaveProperty('age');
            expect(typeof user.age).toMatch('number');
        });
    });

});