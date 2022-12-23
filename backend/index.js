
/// provider add api
app.post("/addprovider", (req, res) => {
  let providername = req.body.providername;
  let provideremail = req.body.provideremail;
  let providermobile = req.body.providermobile;
  let provideraddress = req.body.provideraddress;
  let providerzipcode = req.body.providerzipcode;
  let providercity = req.body.providercity;
  
  var sql =
    "INSERT INTO tblprovider (txtProvidername, txtEmail, txtContactnumber, txtRegisteredaddress, txtZipcode, refCity) VALUES ('"+providername+"', '"+provideremail+"', '"+providermobile+"', '"+provideraddress+"', '"+providerzipcode+"', '"+providercity+"');"
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log(result);
  });
});

//provideredit
app.post("/viewprovider", (req, res)=>{
  var sql = "SELECT id, txtProvidername,txtEmail,txtContactnumber,txtRegisteredaddress,txtZipcode,refCity FROM lotterydrums.tblprovider;"
  con.query(sql, function (err, result){
    if (err) throw err;
    console.log(result);
    res.send(result)``
  })
})

var sql = "UPDATE tblprovider SET txtProvidername = '"+providereditname+"', txtEmail = '"+providereditemail+"', txtContactnumber = '"+providereditnumber+"', txtRegisteredaddress = '"+providereditaddress+"', txtZipcode = '"+providereditzip+"', refCity = '"+providereditcity+"' WHERE id='"+providereditid+"';"
con.query(sql, function (err, result){
  if (err) throw err;
  console.log(result)
  res.send(result)
})


app.post("/deleteprovider", (req, res)=>{
let providereditid =req.body.providereditid;
var sql = "DELETE FROM tblprovider WHERE id='"+providereditid+"';"
con.query(sql, function (err, result){
  if (err) throw err;
  console.log(result)
  res.send(result)
})
})






