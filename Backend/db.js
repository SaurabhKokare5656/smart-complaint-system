const pg=require('pg');
const con =new pg.Pool({
    user:'postgres',
    host:'localhost',
    database:'Complaint',
    password:'123',
    port:5432,
});

module.exports=con;