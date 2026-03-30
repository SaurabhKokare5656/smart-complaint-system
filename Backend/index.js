var exp=require('express')
var con=require('./db')

const bodyParser =require('body-parser');
var app=exp()
app.use(bodyParser.json());

//cross origin error ala tysathi he lagt -mhanej he je aple api ahe te apan public kel tyla apann react js madhe call karun data browser vr disnyasathi
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
     res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT,DELETE");
      res.header("Access-Control-Allow-Headers", "Origin,X-Requested-With,Content-Type,Accept,Authorization");
      next();
});


app.get('/',(req,res)=>{
    res.send('<h1>Node JS Rest API</h1>');
})

app.get('/users',async (req,res)=>{
    try{
    var rr=await con.query("select * from users")
    res.json({users:rr.rows})
    }
    catch(err)
    {
        console.error(err.message);
        res.status(500).send('{Status:401}');
    }
})

//simple By Id Nusar Get
app.get('/usersById',async (req,res)=>{
    try{
        const{id}=req.body;
    var rr=await con.query('select * from users where complaint_id=$1',[id])
    res.json({users:rr.rows})
    }
    catch(err)
    {
        console.error(err.message);
        res.status(500).send('{Status:401}');
    }
})


//By Id Nusar Get ht extra jr user ne id:100 to nahi mg tyveles empty array nako proper msg denar no data found 

app.get('/usersByIdd',async (req,res)=>{
    try{
        const{id}=req.body;
    var rr=await con.query('select * from users where complaint_id=$1',[id])

    if(rr.rows.length>0){
        res.json({users:rr.rows})
    }
    else{
        res.json({msg:'No Data Found'});
    }
   
    }
    catch(err)
    {
        console.error(err.message);
        res.status(500).send('{Status:401}');
    }
})

//Delete By id

app.delete('/usersDelById',async (req,res)=>{
    try{
        const{id}=req.body;
    var rr=await con.query('delete from users where complaint_id=$1',[id])

    if(rr.rows.length>0){
        res.json({msg:'Delete sucess'})
    }
    else{
        res.json({msg:'Delete Fail'});
    }
    }
    catch(err)
    {
        console.error(err.message);
        res.status(500).send('{Status:401}');
    }
})



//Insert data
app.post('/AddUsers',async (req,res)=>{
    try{
        const{username,mob,email,complaint_type,description,location}=req.body;
    var rr=await con.query('insert into users(username,mob,email,complaint_type,description,location)VALUES($1,$2,$3,$4,$5,$6)RETURNING *',[username,mob,email,complaint_type,description,location])

    if(rr.rows.length>0){
        res.json({msg:'Insert Sucess'})
    }
    else{
        res.json({msg:'Insert Fail'});
    }
   
    }
    catch(err)
    {
        console.error(err.message);
        res.status(500).send('{Status:401}');
    }
})


//Update All Data
app.put('/updtUsers',async (req,res)=>{
    try{
        const{username,mob,email,complaint_type,description,location,id}=req.body;
    var rr=await con.query('update users set username=$1,mob=$2,email=$3,complaint_type=$4,description=$5,location=$6 where complaint_id=$7 RETURNING *',[username,mob,email,complaint_type,description,location,id])

    if(rr.rows.length>0){
        res.json({msg:'Update Sucess'})
    }
    else{
        res.json({msg:'Update Fail'});
    }
   
    }
    catch(err)
    {
        console.error(err.message);
        res.status(500).send('{Status:401}');
    }
})

//Update only reuired Data
app.patch('/updtPatchUsers',async (req,res)=>{
    try{
        const{username,id}=req.body;
    var rr=await con.query('update users set username=$1 where complaint_id=$2 RETURNING *',[username,id])

    if(rr.rows.length>0){
        res.json({msg:'Update Sucess'})
    }
    else{
        res.json({msg:'Update Fail'});
    }
   
    }
    catch(err)
    {
        console.error(err.message);
        res.status(500).send('{Status:401}');
    }
})

//Project pupose he use karto hi method 
app.post('/addAction', async (req, res) => {
  try {
    const { complaint_id, complaint_type, username, action_taken, assigned_worker, status } = req.body;

    const rr = await con.query(
      'INSERT INTO complaint_action(complaint_id, complaint_type, username, action_taken, assigned_worker, status) VALUES($1,$2,$3,$4,$5,$6) RETURNING *',
      [complaint_id, complaint_type, username, action_taken, assigned_worker, status]
    );

    if (rr.rows.length > 0) {
      res.json({ msg: "Action Inserted Successfully" });
    } else {
      res.json({ msg: "Insert Failed" });
    }

  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error" });
  }
});


app.get('/checkStatus', async (req, res) => {
  try {

    const rr = await con.query(`
      SELECT 
        u.complaint_id,
        u.username,
        u.complaint_type,
        u.location,
        ca.action_taken,
        ca.assigned_worker,
        ca.status
      FROM users u
      LEFT JOIN complaint_action ca
      ON u.complaint_id = ca.complaint_id
    `);

    res.json({ data: rr.rows });

  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

app.get('/adminStatus', async (req, res) => {
  try {

    const rr = await con.query(`
      SELECT 
        u.complaint_id,
        u.username,
        u.mob,
        u.email,
        u.complaint_type,
        u.description,
        u.location,
        ca.action_taken,
        ca.assigned_worker,
        ca.status
      FROM users u
      LEFT JOIN complaint_action ca
      ON u.complaint_id = ca.complaint_id
      ORDER BY u.complaint_id DESC
    `);

    res.json({ data: rr.rows });

  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

app.post('/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    const rr = await con.query(
      'INSERT INTO contact_messages(name, email, message) VALUES($1,$2,$3) RETURNING *',
      [name, email, message]
    );

    res.json({ msg: "Message Sent Successfully" });

  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Server Error" });
  }
});

app.get('/contactMessages', async (req, res) => {
  try {
    const rr = await con.query('SELECT * FROM contact_messages ORDER BY id DESC');
    res.json({ data: rr.rows });
  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Error" });
  }
});


app.delete('/deleteUser/:id', async (req, res) => {
  try {
    const { id } = req.params;

    const rr = await con.query(
      'DELETE FROM users WHERE complaint_id=$1 RETURNING *',
      [id]
    );

    if (rr.rows.length > 0) {
      res.json({ msg: 'Deleted Successfully' });
    } else {
      res.json({ msg: 'No Data Found' });
    }

  } catch (err) {
    console.log(err);
    res.status(500).json({ msg: "Error" });
  }
});

app.listen(3000,'127.0.0.1',()=>{
    console.log("express Js Server Started");
})