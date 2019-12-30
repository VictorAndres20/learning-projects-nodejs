const {OAuth2Client} = require('google-auth-library');
const CLIENT_ID = "410860652476-3rg4n1mdglc5srqu3rgnhbkecgn983kl.apps.googleusercontent.com";
const client = new OAuth2Client(CLIENT_ID);

const verify = async (token) => {
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
        // Or, if multiple clients access the backend:
        //[CLIENT_ID_1, CLIENT_ID_2, CLIENT_ID_3]
    });
    const payload = ticket.getPayload();
    console.log(payload);
    // After this, you have user data to create new user if doesn't exist
    // Generate your new JWT and send it to Frontend
    return payload;
    //const userid = payload['sub'];
    // If request specified a G Suite domain:
    //const domain = payload['hd'];
}

module.exports = {
    verify
}