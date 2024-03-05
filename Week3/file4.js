const zod = require('zod');
const jwt = require('jsonwebtoken');
const jwtpass = "123456";
const schema = zod.object({
    username: zod.string().min(6),
    password: zod.string()
});
function authenticate(username, password) {
    const validation = schema.safeParse({ username: username, password: password });
    if (!validation.success) {
        console.log("Please enter correct username and password");
    } else {
        const token = jwt.sign({ username: username }, jwtpass);
        console.log("Token:", token);
        return token;
    }
}
function candecode(jwttoken) {
    const decoded = jwt.decode(jwttoken, jwtpass);
    if (decoded) {
        console.log("Decoded:");
    } else {
        console.log("Decoding failed");
    }
}
function canverify(jwttoken) {
    jwt.verify(jwttoken, jwtpass, (err, decoded) => {
        if (err) {
            console.log("Verification failed:",);
        } else {
            console.log("Verified");
        }
    });
}
const token = authenticate("Abheet", "137267812263");
candecode(token);
canverify(token);
