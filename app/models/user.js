// Get the functions in the db.js file to use
const db = require('./../services/db');

class User {
    // user ID
    id;
    // user name
    name;

    constructor(id) {
        this.id = id;
    }
   
    // Gets the user name from the database
    async getUserDetails() {
        if (typeof this.name !== 'string') {
            var sql = "SELECT * from UserProfile where id = ?"
            const results = await db.query(sql, [this.id]);
            this.name = results[0].name;
            this.address = results[0].address
            this.contact = results[0].contact
            this.emailid = results[0].emailid
            this.venuesid = results[0].venuesid
            this.cakeid = results[0].cakeid.name
            this.flowersid = results[0].flowersid
            this.decorationsid = results[0].decorationsid
        }

    }
}

module.exports = {
    User
}



