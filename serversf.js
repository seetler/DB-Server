// #################################################
// This is the server for the Office.  
// #################################################
// Every single aspect of this application, (database, server, and webpage) was personally coded by me, Jason Zeng.
// The webpages are in the views folder
// The database functions are in a file called databasefi.js



// External Modules ------------------------------------------------
var express = require('express')
var serveStatic =require('serve-static')
var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser')
var mysql = require('mysql')
var path = require('path');
var winston = require('winston');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var expressSession = require('express-session');
//-------------------------------------------------------------------



// Internal Files Modules ------------------------------------------------
require('./databasefi.js');
var app = express();
var serverSheet = require('./serverSheet.js')
//-------------------------------------------------------------------



// Declaring Internal Variables ------------------------------------------------
// ===========Dynamic
var serverInfo = serverSheet.sf;
var port=3006;

// ===========Static
clientkey=' ';
var users = serverInfo.login
//-------------------------------------------------------------------


//File Directory-------------------------------------------------------------------
  app.set('views', path.join(__dirname, 'views'));
  app.set('view engine', 'ejs');
  app.engine('ejs', require('ejs-locals'));
  app.use(expressSession({secret:'somesecrettokenhere'}));
  app.use(bodyParser.urlencoded({
        extended: false,
     parameterLimit: 10000,
     limit: 1024 * 1024 * 10
}));
app.use(bodyParser.json({
        extended: false,
     parameterLimit: 10000,
     limit: 1024 * 1024 * 10
}));
  app.use(cookieParser())

  // Initialize Passport!  Also use passport.session() middleware, to support
  // persistent login sessions (recommended).
  app.use(passport.initialize());
  app.use(passport.session());

  app.use(express.static(path.join(__dirname, 'public')));
//-------------------------------------------------------------------




//Account login Information---------------------------------------------------
// ------------------------This was from the passport library-----------------
function findById(id, fn) {
  var idx = id - 1;
  if (users[idx]) {
    fn(null, users[idx]);
  } else {
    fn(new Error('User ' + id + ' does not exist'));
  }
}

function findByUsername(username, fn) {
  for (var i = 0, len = users.length; i < len; i++) {
    var user = users[i];
    if (user.username === username) {
      return fn(null, user);
    }
  }
  return fn(null, null);
}


// Passport session setup.
//   To support persistent login sessions, Passport needs to be able to
//   serialize users into and deserialize users out of the session.  Typically,
//   this will be as simple as storing the user ID when serializing, and finding
//   the user by ID when deserializing.
passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  findById(id, function (err, user) {
    done(err, user);
  });
});


// Use the LocalStrategy within Passport.
//   Strategies in passport require a `verify` function, which accept
//   credentials (in this case, a username and password), and invoke a callback
//   with a user object.  In the real world, this would query a database;
//   however, in this example we are using a baked-in set of users.
passport.use(new LocalStrategy(
  function(username, password, done) {
    // asynchronous verification, for effect...
    process.nextTick(function () {
      
      // Find the user by username.  If there is no user with the given
      // username, or the password is not correct, set the user to `false` to
      // indicate failure and set a flash message.  Otherwise, return the
      // authenticated `user`.
      findByUsername(username, function(err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false, { message: 'Unknown user ' + username }); }
        if (user.password != password) { return done(null, false, { message: 'Invalid password' }); }
        return done(null, user);
      })
    });
  }
));

//-------------------------------------------------------------------
// ------------------------This was from the passport library-----------------



// Log Files Info-----------------
-------------------------------------------------
// This is track all the information for back up ---------------------------------
logger = new (winston.Logger)({
    transports: [
      new winston.transports.File({ filename: 'text.log' })
]
});
logger.info('Start')

module.exports = logger;
//------------------------------------------------------------------






//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
// Database Query Functions
// These are the core of this application. Please don't touch unless you know what to do.
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------



//---------------------------------------------------------------------------
function getBudget1(req, res, next) {

querystring='SELECT * FROM ist_grossps where client = "' + clientkey + '"  ORDER BY CASE WHEN media = "Display RTB" THEN "01" WHEN media = "Video - C Select" THEN "02" WHEN media = "Video - C Prime" THEN "03" WHEN media = "Mobile RTB" THEN "04" WHEN media = "Social RTB" THEN "05" WHEN media = "TV" THEN "06" WHEN media = "Display - DB A" THEN "07" WHEN media = "Video - DB A" THEN "08"  WHEN media = "Mobile - DB A" THEN "09"  WHEN media = "Social - DB A" THEN "10" WHEN media = "Display - DB B" THEN "11" WHEN media = "Video - DB B" THEN "12" WHEN media = "Mobile - DB B" THEN "13" WHEN media = "Social - DB B" THEN "14" ELSE  media END ASC,fintype,  mos';


   connectiondb.query(querystring ,function(err,rows)
        {
            
            if(err)
                logger.info("Error Selecting : %s ",err );
req.budget1=rows;

next()        
});       
}
//---------------------------------------------------------------------------
  


//---------------------------------------------------------------------------
function getBudget2(req, res, next) {

querystring='SELECT * FROM ist_holdoutps where client = "' + clientkey + '" ORDER BY CASE WHEN media = "Display RTB" THEN "01" WHEN media = "Video - C Select" THEN "02" WHEN media = "Video - C Prime" THEN "03" WHEN media = "Mobile RTB" THEN "04" WHEN media = "Social RTB" THEN "05" WHEN media = "TV" THEN "06" WHEN media = "Display - DB A" THEN "07" WHEN media = "Video - DB A" THEN "08"  WHEN media = "Mobile - DB A" THEN "09"  WHEN media = "Social - DB A" THEN "10" WHEN media = "Display - DB B" THEN "11" WHEN media = "Video - DB B" THEN "12" WHEN media = "Mobile - DB B" THEN "13" WHEN media = "Social - DB B" THEN "14" ELSE  media END ASC,fintype,  mos';


   connectiondb.query(querystring ,function(err,rows)
        {
            
            if(err)
                logger.info("Error Selecting : %s ",err );
req.budget2=rows;

next()        
});       
}
//---------------------------------------------------------------------------


//---------------------------------------------------------------------------
function getBudget3(req, res, next) {

querystring='SELECT * FROM ist_cadfee where client = "' + clientkey + '" ORDER BY CASE WHEN media = "Display RTB" THEN "01" WHEN media = "Video - C Select" THEN "02" WHEN media = "Video - C Prime" THEN "03" WHEN media = "Mobile RTB" THEN "04" WHEN media = "Social RTB" THEN "05" WHEN media = "TV" THEN "06" WHEN media = "Display - DB A" THEN "07" WHEN media = "Video - DB A" THEN "08"  WHEN media = "Mobile - DB A" THEN "09"  WHEN media = "Social - DB A" THEN "10" WHEN media = "Display - DB B" THEN "11" WHEN media = "Video - DB B" THEN "12" WHEN media = "Mobile - DB B" THEN "13" WHEN media = "Social - DB B" THEN "14" ELSE  media END ASC,fintype,  mos';


   connectiondb.query(querystring ,function(err,rows)
        {
            
            if(err)
                logger.info("Error Selecting : %s ",err );
req.budget3=rows;

next()        
});       
}
//---------------------------------------------------------------------------




//---------------------------------------------------------------------------
function getBudget5(req, res, next) {

querystring='SELECT * FROM ist_adjbill where client = "' + clientkey + '" ORDER BY CASE WHEN media = "Display RTB" THEN "01" WHEN media = "Video - C Select" THEN "02" WHEN media = "Video - C Prime" THEN "03" WHEN media = "Mobile RTB" THEN "04" WHEN media = "Social RTB" THEN "05" WHEN media = "TV" THEN "06" WHEN media = "Display - DB A" THEN "07" WHEN media = "Video - DB A" THEN "08"  WHEN media = "Mobile - DB A" THEN "09"  WHEN media = "Social - DB A" THEN "10" WHEN media = "Display - DB B" THEN "11" WHEN media = "Video - DB B" THEN "12" WHEN media = "Mobile - DB B" THEN "13" WHEN media = "Social - DB B" THEN "14" ELSE  media END ASC,fintype,  mos';


   connectiondb.query(querystring ,function(err,rows)
        {
            
            if(err)
                logger.info("Error Selecting : %s ",err );
req.budget5=rows;

next()        
});       
}
//---------------------------------------------------------------------------


//---------------------------------------------------------------------------
function getBudget6(req, res, next) {

querystring='SELECT * FROM ist_adjcadfee where client = "' + clientkey + '" ORDER BY CASE WHEN media = "Display RTB" THEN "01" WHEN media = "Video - C Select" THEN "02" WHEN media = "Video - C Prime" THEN "03" WHEN media = "Mobile RTB" THEN "04" WHEN media = "Social RTB" THEN "05" WHEN media = "TV" THEN "06" WHEN media = "Display - DB A" THEN "07" WHEN media = "Video - DB A" THEN "08"  WHEN media = "Mobile - DB A" THEN "09"  WHEN media = "Social - DB A" THEN "10" WHEN media = "Display - DB B" THEN "11" WHEN media = "Video - DB B" THEN "12" WHEN media = "Mobile - DB B" THEN "13" WHEN media = "Social - DB B" THEN "14" ELSE  media END ASC,fintype,  mos';


   connectiondb.query(querystring ,function(err,rows)
        {
            
            if(err)
                logger.info("Error Selecting : %s ",err );
req.budget6=rows;

next()        
});       
}
//---------------------------------------------------------------------------



//---------------------------------------------------------------------------
function getBudget8(req, res, next) {

querystring='SELECT * FROM ist_adjrev where client = "' + clientkey + '" ORDER BY CASE WHEN media = "Display RTB" THEN "01" WHEN media = "Video - C Select" THEN "02" WHEN media = "Video - C Prime" THEN "03" WHEN media = "Mobile RTB" THEN "04" WHEN media = "Social RTB" THEN "05" WHEN media = "TV" THEN "06" WHEN media = "Display - DB A" THEN "07" WHEN media = "Video - DB A" THEN "08"  WHEN media = "Mobile - DB A" THEN "09"  WHEN media = "Social - DB A" THEN "10" WHEN media = "Display - DB B" THEN "11" WHEN media = "Video - DB B" THEN "12" WHEN media = "Mobile - DB B" THEN "13" WHEN media = "Social - DB B" THEN "14" ELSE  media END ASC,fintype,  mos';


   connectiondb.query(querystring ,function(err,rows)
        {
            
            if(err)
                logger.info("Error Selecting : %s ",err );
req.budget8=rows;

next()        
});       
}
//---------------------------------------------------------------------------


//---------------------------------------------------------------------------
function getBudget12(req, res, next) {

querystring='SELECT * FROM ist_adjother where client = "' + clientkey + '" ORDER BY CASE WHEN media = "Display RTB" THEN "01" WHEN media = "Video - C Select" THEN "02" WHEN media = "Video - C Prime" THEN "03" WHEN media = "Mobile RTB" THEN "04" WHEN media = "Social RTB" THEN "05" WHEN media = "TV" THEN "06" WHEN media = "Display - DB A" THEN "07" WHEN media = "Video - DB A" THEN "08"  WHEN media = "Mobile - DB A" THEN "09"  WHEN media = "Social - DB A" THEN "10" WHEN media = "Display - DB B" THEN "11" WHEN media = "Video - DB B" THEN "12" WHEN media = "Mobile - DB B" THEN "13" WHEN media = "Social - DB B" THEN "14" ELSE  media END ASC,fintype,  mos';


   connectiondb.query(querystring ,function(err,rows)
        {
            
            if(err)
                logger.info("Error Selecting : %s ",err );
req.budget12=rows;

next()        
});       
}
//---------------------------------------------------------------------------




//---------------------------------------------------------------------------
function getComments1(req, res, next) {

querystring='SELECT * FROM ist_comments where client = "' + clientkey + '" ORDER BY CASE WHEN media = "Display RTB" THEN "01" WHEN media = "Video - C Select" THEN "02" WHEN media = "Video - C Prime" THEN "03" WHEN media = "Mobile RTB" THEN "04" WHEN media = "Social RTB" THEN "05" WHEN media = "TV" THEN "06" WHEN media = "Display - DB A" THEN "07" WHEN media = "Video - DB A" THEN "08"  WHEN media = "Mobile - DB A" THEN "09"  WHEN media = "Social - DB A" THEN "10" WHEN media = "Display - DB B" THEN "11" WHEN media = "Video - DB B" THEN "12" WHEN media = "Mobile - DB B" THEN "13" WHEN media = "Social - DB B" THEN "14" ELSE  media END ASC,fintype,  mos';


   connectiondb.query(querystring ,function(err,rows)
        {
            
            if(err)
                logger.info("Error Selecting : %s ",err );
req.getComments1=rows;

next()        
});       
}
//---------------------------------------------------------------------------


//---------------------------------------------------------------------------
function getComments(req, res, next) {

querystring='SELECT * FROM ist_totcomments where client = "' + clientkey + '"';


   connectiondb.query(querystring ,function(err,rows)
        {
            
            if(err)
                logger.info("Error Selecting : %s ",err );
req.getComments=rows;
console.log(rows)

next()        
});       
}
//---------------------------------------------------------------------------




//---------------------------------------------------------------------------
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------





//----------This calls the queries then generates the webpage-----------
//---------------------------------------------------------------------------
app.get('/master', ensureAuthenticated, getBudget1, getBudget2, getBudget3,getBudget5,getBudget6,getBudget8,getBudget12,getComments1,getComments,function(req, res ){res.render('master', {
        data: req.budget1,
        data1: req.budget1,
        data2: req.budget2,
        data3: req.budget3,
        data5: req.budget5,
        data6: req.budget6,
        data8: req.budget8,
        data12: req.budget12,
        getComments1: req.getComments1,
        getComments: req.getComments,
        serverInfo: serverInfo
    })});
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------


app.get('/faq', function(req, res) {
res.render('faq')

})


//-------------Login Redirect---------------------------
//---------------------------------------------------------------------------
app.get('/login', function(req, res){
  res.render('login', { user: req.user, message: req.session.messages });
});
//----------------------------------------------------------
//--------------------------------------------------------

//-------------Logout Redirect---------------------------
//---------------------------------------------------------
app.get('/logout', function(req, res){
  console.log('logging out')
  req.logout();
  res.redirect('/login');
});
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------



//-----------------REdirect all things to login-----------------------------
//---------------------------------------------------------------------------
app.get('/*', function(req,res) {res.redirect('login')});
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------



//---------------Login and Authentication-----------------------------------
//---------------------------------------------------------------------------
app.post('/login', function(req, res, next) {
   clientkey=' '
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err) }
    if (!user) {
      req.session.messages =  [info.message];
      return res.redirect('/login')
    }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.redirect('/master');
    });
  })(req, res, next);
});


function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/login')
}
//---------------------------------------------------------------------------
//---------------------------------------------------------------------------



// ---- Wooo, we are finally starting our application---------------------------------
// ----- Start app.use---------------------------------
app.use(function(req, res) {
  app.use(bodyParser.urlencoded({
        extended: false,
     parameterLimit: 10000,
     limit: 1024 * 1024 * 10
}));
app.use(bodyParser.json({
        extended: false,
     parameterLimit: 10000,
     limit: 1024 * 1024 * 10
}));

console.log('Someone clicked Submit')
logger.info('Someone clicked Submit')
logger.info('Client: ' + req.body.client)
console.log('Client: ' + req.body.client)


if (req.body.client) {
dataset=req.body
dataset.servertype = serverInfo.servertype
dataset.servername = serverInfo.servername
console.log('Server name:' + dataset.servername)
logger.info('Server name:' + dataset.servername)
logger.info(dataset)
clientkey=req.body.client

// -----This goes to the database functions
dbinsert(dataset, req.ip, req.url, serverInfo);
//----------------------------------------

res.redirect(req.url)

}

});
// ----End app.use-----------------------------------

// ----Finally We start! Yea. --------------------
app.listen(port);
logger.info('Server is listening on port '+port+'.');
console.log('Server is listening on port '+port+'.');

