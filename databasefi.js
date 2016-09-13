var mysql = require('mysql');
var nodemailer = require('nodemailer')

connectiondb = mysql.createConnection({
	host: '',
	user: '',
	password: '',
	database: ''

})

//-----------------------------------------------------

//-


function unnan(a) {
var newstring = a.replace(/,/g, '')
var newstring1 = newstring.replace('$','')
var newstring2 = newstring1.replace(' ','')
var newstring3 = newstring2.replace('%','')
var newstring4 = Number(newstring3)





return newstring4


};


dbinsert = function(dataset, ip, hostname, serverinfo){
//-----------------------------------------------------
//-----------------------------------------------------
//-----------------------------------------------------

Date.prototype.addHours= function(h){
    this.setHours(this.getHours()+h);
    return this;
}


timelog = new Date().addHours(-7).toISOString();
keylog = Math.floor(Math.random()*1000000000)

apple=dataset.comments
totcomments=String(apple)


console.log('Database Insert Function: ' + dataset.client)
console.log('Server Type: ' + dataset.servertype)

connectiondb.query( "insert into ist_budget3re_log" + " values('" + keylog + "','" + timelog + "','" + dataset.comments + "','" + ip + "','" + hostname + "', 'Insert')"
    , function(err, rows) {
});

if (dataset.confirmation) {

overallcomment= "update ist_totcomments set comment = '" + totcomments.replace(/'/g, '\\\''  ) + "', timelog='" + timelog + "', keylog='" + keylog + "' where client='" + dataset.client + "'"

logger.info(overallcomment);
console.log(overallcomment)
connectiondb.query(overallcomment
    , function(err, rows) {
});






//-----------------------------------------------------


if (dataset.client !=' ') {



if (dataset.sec1) {

if (dataset.servertype == 'ps') {

formatandinsert('sec1row1col1',timelog, keylog);
formatandinsert('sec1row1col2',timelog, keylog);
formatandinsert('sec1row1col3',timelog, keylog);
formatandinsert('sec1row1col4',timelog, keylog);
formatandinsert('sec1row1col5',timelog, keylog);
formatandinsert('sec1row1col6',timelog, keylog);
formatandinsert('sec1row1col7',timelog, keylog);
formatandinsert('sec1row1col8',timelog, keylog);
formatandinsert('sec1row1col9',timelog, keylog);
formatandinsert('sec1row1col10',timelog, keylog);
formatandinsert('sec1row1col11',timelog, keylog);
formatandinsert('sec1row1col12',timelog, keylog);

formatandinsert('sec1row2col1',timelog, keylog);
formatandinsert('sec1row2col2',timelog, keylog);
formatandinsert('sec1row2col3',timelog, keylog);
formatandinsert('sec1row2col4',timelog, keylog);
formatandinsert('sec1row2col5',timelog, keylog);
formatandinsert('sec1row2col6',timelog, keylog);
formatandinsert('sec1row2col7',timelog, keylog);
formatandinsert('sec1row2col8',timelog, keylog);
formatandinsert('sec1row2col9',timelog, keylog);
formatandinsert('sec1row2col10',timelog, keylog);
formatandinsert('sec1row2col11',timelog, keylog);
formatandinsert('sec1row2col12',timelog, keylog);

}


if (dataset.servertype == 'master') {

formatandinsert('sec1row3col1',timelog, keylog);
formatandinsert('sec1row3col2',timelog, keylog);
formatandinsert('sec1row3col3',timelog, keylog);
formatandinsert('sec1row3col4',timelog, keylog);
formatandinsert('sec1row3col5',timelog, keylog);
formatandinsert('sec1row3col6',timelog, keylog);
formatandinsert('sec1row3col7',timelog, keylog);
formatandinsert('sec1row3col8',timelog, keylog);
formatandinsert('sec1row3col9',timelog, keylog);
formatandinsert('sec1row3col10',timelog, keylog);
formatandinsert('sec1row3col11',timelog, keylog);
formatandinsert('sec1row3col12',timelog, keylog);

formatandinsert('sec1row5col1',timelog, keylog);
formatandinsert('sec1row5col2',timelog, keylog);
formatandinsert('sec1row5col3',timelog, keylog);
formatandinsert('sec1row5col4',timelog, keylog);
formatandinsert('sec1row5col5',timelog, keylog);
formatandinsert('sec1row5col6',timelog, keylog);
formatandinsert('sec1row5col7',timelog, keylog);
formatandinsert('sec1row5col8',timelog, keylog);
formatandinsert('sec1row5col9',timelog, keylog);
formatandinsert('sec1row5col10',timelog, keylog);
formatandinsert('sec1row5col11',timelog, keylog);
formatandinsert('sec1row5col12',timelog, keylog);

formatandinsert('sec1row6col1',timelog, keylog);
formatandinsert('sec1row6col2',timelog, keylog);
formatandinsert('sec1row6col3',timelog, keylog);
formatandinsert('sec1row6col4',timelog, keylog);
formatandinsert('sec1row6col5',timelog, keylog);
formatandinsert('sec1row6col6',timelog, keylog);
formatandinsert('sec1row6col7',timelog, keylog);
formatandinsert('sec1row6col8',timelog, keylog);
formatandinsert('sec1row6col9',timelog, keylog);
formatandinsert('sec1row6col10',timelog, keylog);
formatandinsert('sec1row6col11',timelog, keylog);
formatandinsert('sec1row6col12',timelog, keylog);

formatandinsert('sec1row8col1',timelog, keylog);
formatandinsert('sec1row8col2',timelog, keylog);
formatandinsert('sec1row8col3',timelog, keylog);
formatandinsert('sec1row8col4',timelog, keylog);
formatandinsert('sec1row8col5',timelog, keylog);
formatandinsert('sec1row8col6',timelog, keylog);
formatandinsert('sec1row8col7',timelog, keylog);
formatandinsert('sec1row8col8',timelog, keylog);
formatandinsert('sec1row8col9',timelog, keylog);
formatandinsert('sec1row8col10',timelog, keylog);
formatandinsert('sec1row8col11',timelog, keylog);
formatandinsert('sec1row8col12',timelog, keylog);

formatandinsert('sec1row12col1',timelog, keylog);
formatandinsert('sec1row12col2',timelog, keylog);
formatandinsert('sec1row12col3',timelog, keylog);
formatandinsert('sec1row12col4',timelog, keylog);
formatandinsert('sec1row12col5',timelog, keylog);
formatandinsert('sec1row12col6',timelog, keylog);
formatandinsert('sec1row12col7',timelog, keylog);
formatandinsert('sec1row12col8',timelog, keylog);
formatandinsert('sec1row12col9',timelog, keylog);
formatandinsert('sec1row12col10',timelog, keylog);
formatandinsert('sec1row12col11',timelog, keylog);
formatandinsert('sec1row12col12',timelog, keylog);
}
connectiondb.query( "insert into action_log" + " values('" + keylog + "','"  + timelog + "','"  + ip + "','"  + dataset.servername + "','"  + dataset.client +  "','Display RTB')"
    , function(err, rows) {
});


logger.info("update ist_comments set comment = '" + dataset.sec1row1col14.replace(/'/g, '\\\''  ) + "', timelog='" + timelog + "', keylog='" + keylog + "' where client='" + dataset.client + "' and media='Display RTB'");

connectiondb.query("update ist_comments set comment = '" + dataset.sec1row1col14.replace(/'/g, '\\\''  ) + "', timelog='" + timelog + "', keylog='" + keylog + "' where client='" + dataset.client + "' and media='Display RTB'"
    , function(err, rows) {
});

};


if (dataset.sec2) {

if (dataset.servertype == 'ps') {

formatandinsert('sec2row1col1',timelog, keylog);
formatandinsert('sec2row1col2',timelog, keylog);
formatandinsert('sec2row1col3',timelog, keylog);
formatandinsert('sec2row1col4',timelog, keylog);
formatandinsert('sec2row1col5',timelog, keylog);
formatandinsert('sec2row1col6',timelog, keylog);
formatandinsert('sec2row1col7',timelog, keylog);
formatandinsert('sec2row1col8',timelog, keylog);
formatandinsert('sec2row1col9',timelog, keylog);
formatandinsert('sec2row1col10',timelog, keylog);
formatandinsert('sec2row1col11',timelog, keylog);
formatandinsert('sec2row1col12',timelog, keylog);

formatandinsert('sec2row2col1',timelog, keylog);
formatandinsert('sec2row2col2',timelog, keylog);
formatandinsert('sec2row2col3',timelog, keylog);
formatandinsert('sec2row2col4',timelog, keylog);
formatandinsert('sec2row2col5',timelog, keylog);
formatandinsert('sec2row2col6',timelog, keylog);
formatandinsert('sec2row2col7',timelog, keylog);
formatandinsert('sec2row2col8',timelog, keylog);
formatandinsert('sec2row2col9',timelog, keylog);
formatandinsert('sec2row2col10',timelog, keylog);
formatandinsert('sec2row2col11',timelog, keylog);
formatandinsert('sec2row2col12',timelog, keylog);
}

if (dataset.servertype == 'master') {

formatandinsert('sec2row3col1',timelog, keylog);
formatandinsert('sec2row3col2',timelog, keylog);
formatandinsert('sec2row3col3',timelog, keylog);
formatandinsert('sec2row3col4',timelog, keylog);
formatandinsert('sec2row3col5',timelog, keylog);
formatandinsert('sec2row3col6',timelog, keylog);
formatandinsert('sec2row3col7',timelog, keylog);
formatandinsert('sec2row3col8',timelog, keylog);
formatandinsert('sec2row3col9',timelog, keylog);
formatandinsert('sec2row3col10',timelog, keylog);
formatandinsert('sec2row3col11',timelog, keylog);
formatandinsert('sec2row3col12',timelog, keylog);

formatandinsert('sec2row5col1',timelog, keylog);
formatandinsert('sec2row5col2',timelog, keylog);
formatandinsert('sec2row5col3',timelog, keylog);
formatandinsert('sec2row5col4',timelog, keylog);
formatandinsert('sec2row5col5',timelog, keylog);
formatandinsert('sec2row5col6',timelog, keylog);
formatandinsert('sec2row5col7',timelog, keylog);
formatandinsert('sec2row5col8',timelog, keylog);
formatandinsert('sec2row5col9',timelog, keylog);
formatandinsert('sec2row5col10',timelog, keylog);
formatandinsert('sec2row5col11',timelog, keylog);
formatandinsert('sec2row5col12',timelog, keylog);

formatandinsert('sec2row6col1',timelog, keylog);
formatandinsert('sec2row6col2',timelog, keylog);
formatandinsert('sec2row6col3',timelog, keylog);
formatandinsert('sec2row6col4',timelog, keylog);
formatandinsert('sec2row6col5',timelog, keylog);
formatandinsert('sec2row6col6',timelog, keylog);
formatandinsert('sec2row6col7',timelog, keylog);
formatandinsert('sec2row6col8',timelog, keylog);
formatandinsert('sec2row6col9',timelog, keylog);
formatandinsert('sec2row6col10',timelog, keylog);
formatandinsert('sec2row6col11',timelog, keylog);
formatandinsert('sec2row6col12',timelog, keylog);

formatandinsert('sec2row8col1',timelog, keylog);
formatandinsert('sec2row8col2',timelog, keylog);
formatandinsert('sec2row8col3',timelog, keylog);
formatandinsert('sec2row8col4',timelog, keylog);
formatandinsert('sec2row8col5',timelog, keylog);
formatandinsert('sec2row8col6',timelog, keylog);
formatandinsert('sec2row8col7',timelog, keylog);
formatandinsert('sec2row8col8',timelog, keylog);
formatandinsert('sec2row8col9',timelog, keylog);
formatandinsert('sec2row8col10',timelog, keylog);
formatandinsert('sec2row8col11',timelog, keylog);
formatandinsert('sec2row8col12',timelog, keylog);

formatandinsert('sec2row12col1',timelog, keylog);
formatandinsert('sec2row12col2',timelog, keylog);
formatandinsert('sec2row12col3',timelog, keylog);
formatandinsert('sec2row12col4',timelog, keylog);
formatandinsert('sec2row12col5',timelog, keylog);
formatandinsert('sec2row12col6',timelog, keylog);
formatandinsert('sec2row12col7',timelog, keylog);
formatandinsert('sec2row12col8',timelog, keylog);
formatandinsert('sec2row12col9',timelog, keylog);
formatandinsert('sec2row12col10',timelog, keylog);
formatandinsert('sec2row12col11',timelog, keylog);
formatandinsert('sec2row12col12',timelog, keylog);
}
connectiondb.query( "insert into action_log" + " values('" + keylog + "','"  + timelog + "','"  + ip + "','"  + dataset.servername + "','"  + dataset.client +  "','video - C Select')"
    , function(err, rows) {
});

logger.info("update ist_comments set comment = '" + dataset.sec2row1col14.replace(/'/g, '\\\''  ) + "', timelog='" + timelog + "', keylog='" + keylog + "' where client='" + dataset.client + "' and media='video - C Select'");
connectiondb.query("update ist_comments set comment = '" + dataset.sec2row1col14.replace(/'/g, '\\\''  ) + "', timelog='" + timelog + "', keylog='" + keylog + "' where client='" + dataset.client + "' and media='video - C Select'"
    , function(err, rows) {
});

};


if (dataset.sec3) {

if (dataset.servertype == 'ps') {

formatandinsert('sec3row1col1',timelog, keylog);
formatandinsert('sec3row1col2',timelog, keylog);
formatandinsert('sec3row1col3',timelog, keylog);
formatandinsert('sec3row1col4',timelog, keylog);
formatandinsert('sec3row1col5',timelog, keylog);
formatandinsert('sec3row1col6',timelog, keylog);
formatandinsert('sec3row1col7',timelog, keylog);
formatandinsert('sec3row1col8',timelog, keylog);
formatandinsert('sec3row1col9',timelog, keylog);
formatandinsert('sec3row1col10',timelog, keylog);
formatandinsert('sec3row1col11',timelog, keylog);
formatandinsert('sec3row1col12',timelog, keylog);

formatandinsert('sec3row2col1',timelog, keylog);
formatandinsert('sec3row2col2',timelog, keylog);
formatandinsert('sec3row2col3',timelog, keylog);
formatandinsert('sec3row2col4',timelog, keylog);
formatandinsert('sec3row2col5',timelog, keylog);
formatandinsert('sec3row2col6',timelog, keylog);
formatandinsert('sec3row2col7',timelog, keylog);
formatandinsert('sec3row2col8',timelog, keylog);
formatandinsert('sec3row2col9',timelog, keylog);
formatandinsert('sec3row2col10',timelog, keylog);
formatandinsert('sec3row2col11',timelog, keylog);
formatandinsert('sec3row2col12',timelog, keylog);
}

if (dataset.servertype == 'master') {

formatandinsert('sec3row3col1',timelog, keylog);
formatandinsert('sec3row3col2',timelog, keylog);
formatandinsert('sec3row3col3',timelog, keylog);
formatandinsert('sec3row3col4',timelog, keylog);
formatandinsert('sec3row3col5',timelog, keylog);
formatandinsert('sec3row3col6',timelog, keylog);
formatandinsert('sec3row3col7',timelog, keylog);
formatandinsert('sec3row3col8',timelog, keylog);
formatandinsert('sec3row3col9',timelog, keylog);
formatandinsert('sec3row3col10',timelog, keylog);
formatandinsert('sec3row3col11',timelog, keylog);
formatandinsert('sec3row3col12',timelog, keylog);

formatandinsert('sec3row5col1',timelog, keylog);
formatandinsert('sec3row5col2',timelog, keylog);
formatandinsert('sec3row5col3',timelog, keylog);
formatandinsert('sec3row5col4',timelog, keylog);
formatandinsert('sec3row5col5',timelog, keylog);
formatandinsert('sec3row5col6',timelog, keylog);
formatandinsert('sec3row5col7',timelog, keylog);
formatandinsert('sec3row5col8',timelog, keylog);
formatandinsert('sec3row5col9',timelog, keylog);
formatandinsert('sec3row5col10',timelog, keylog);
formatandinsert('sec3row5col11',timelog, keylog);
formatandinsert('sec3row5col12',timelog, keylog);

formatandinsert('sec3row6col1',timelog, keylog);
formatandinsert('sec3row6col2',timelog, keylog);
formatandinsert('sec3row6col3',timelog, keylog);
formatandinsert('sec3row6col4',timelog, keylog);
formatandinsert('sec3row6col5',timelog, keylog);
formatandinsert('sec3row6col6',timelog, keylog);
formatandinsert('sec3row6col7',timelog, keylog);
formatandinsert('sec3row6col8',timelog, keylog);
formatandinsert('sec3row6col9',timelog, keylog);
formatandinsert('sec3row6col10',timelog, keylog);
formatandinsert('sec3row6col11',timelog, keylog);
formatandinsert('sec3row6col12',timelog, keylog);

formatandinsert('sec3row8col1',timelog, keylog);
formatandinsert('sec3row8col2',timelog, keylog);
formatandinsert('sec3row8col3',timelog, keylog);
formatandinsert('sec3row8col4',timelog, keylog);
formatandinsert('sec3row8col5',timelog, keylog);
formatandinsert('sec3row8col6',timelog, keylog);
formatandinsert('sec3row8col7',timelog, keylog);
formatandinsert('sec3row8col8',timelog, keylog);
formatandinsert('sec3row8col9',timelog, keylog);
formatandinsert('sec3row8col10',timelog, keylog);
formatandinsert('sec3row8col11',timelog, keylog);
formatandinsert('sec3row8col12',timelog, keylog);

formatandinsert('sec3row12col1',timelog, keylog);
formatandinsert('sec3row12col2',timelog, keylog);
formatandinsert('sec3row12col3',timelog, keylog);
formatandinsert('sec3row12col4',timelog, keylog);
formatandinsert('sec3row12col5',timelog, keylog);
formatandinsert('sec3row12col6',timelog, keylog);
formatandinsert('sec3row12col7',timelog, keylog);
formatandinsert('sec3row12col8',timelog, keylog);
formatandinsert('sec3row12col9',timelog, keylog);
formatandinsert('sec3row12col10',timelog, keylog);
formatandinsert('sec3row12col11',timelog, keylog);
formatandinsert('sec3row12col12',timelog, keylog);
}
connectiondb.query( "insert into action_log" + " values('" + keylog + "','"  + timelog + "','"  + ip + "','"  + dataset.servername + "','"  + dataset.client +  "','video - C Prime')"
    , function(err, rows) {
});

logger.info("update ist_comments set comment = '" + dataset.sec3row1col14.replace(/'/g, '\\\''  ) + "', timelog='" + timelog + "', keylog='" + keylog + "' where client='" + dataset.client + "' and media='video - C Prime'");
connectiondb.query("update ist_comments set comment = '" + dataset.sec3row1col14.replace(/'/g, '\\\''  ) + "', timelog='" + timelog + "', keylog='" + keylog + "' where client='" + dataset.client + "' and media='video - C Prime'"
    , function(err, rows) {
});

};


if (dataset.sec4) {

if (dataset.servertype == 'ps') {

formatandinsert('sec4row1col1',timelog, keylog);
formatandinsert('sec4row1col2',timelog, keylog);
formatandinsert('sec4row1col3',timelog, keylog);
formatandinsert('sec4row1col4',timelog, keylog);
formatandinsert('sec4row1col5',timelog, keylog);
formatandinsert('sec4row1col6',timelog, keylog);
formatandinsert('sec4row1col7',timelog, keylog);
formatandinsert('sec4row1col8',timelog, keylog);
formatandinsert('sec4row1col9',timelog, keylog);
formatandinsert('sec4row1col10',timelog, keylog);
formatandinsert('sec4row1col11',timelog, keylog);
formatandinsert('sec4row1col12',timelog, keylog);

formatandinsert('sec4row2col1',timelog, keylog);
formatandinsert('sec4row2col2',timelog, keylog);
formatandinsert('sec4row2col3',timelog, keylog);
formatandinsert('sec4row2col4',timelog, keylog);
formatandinsert('sec4row2col5',timelog, keylog);
formatandinsert('sec4row2col6',timelog, keylog);
formatandinsert('sec4row2col7',timelog, keylog);
formatandinsert('sec4row2col8',timelog, keylog);
formatandinsert('sec4row2col9',timelog, keylog);
formatandinsert('sec4row2col10',timelog, keylog);
formatandinsert('sec4row2col11',timelog, keylog);
formatandinsert('sec4row2col12',timelog, keylog);
}

if (dataset.servertype == 'master') {

formatandinsert('sec4row3col1',timelog, keylog);
formatandinsert('sec4row3col2',timelog, keylog);
formatandinsert('sec4row3col3',timelog, keylog);
formatandinsert('sec4row3col4',timelog, keylog);
formatandinsert('sec4row3col5',timelog, keylog);
formatandinsert('sec4row3col6',timelog, keylog);
formatandinsert('sec4row3col7',timelog, keylog);
formatandinsert('sec4row3col8',timelog, keylog);
formatandinsert('sec4row3col9',timelog, keylog);
formatandinsert('sec4row3col10',timelog, keylog);
formatandinsert('sec4row3col11',timelog, keylog);
formatandinsert('sec4row3col12',timelog, keylog);

formatandinsert('sec4row5col1',timelog, keylog);
formatandinsert('sec4row5col2',timelog, keylog);
formatandinsert('sec4row5col3',timelog, keylog);
formatandinsert('sec4row5col4',timelog, keylog);
formatandinsert('sec4row5col5',timelog, keylog);
formatandinsert('sec4row5col6',timelog, keylog);
formatandinsert('sec4row5col7',timelog, keylog);
formatandinsert('sec4row5col8',timelog, keylog);
formatandinsert('sec4row5col9',timelog, keylog);
formatandinsert('sec4row5col10',timelog, keylog);
formatandinsert('sec4row5col11',timelog, keylog);
formatandinsert('sec4row5col12',timelog, keylog);

formatandinsert('sec4row6col1',timelog, keylog);
formatandinsert('sec4row6col2',timelog, keylog);
formatandinsert('sec4row6col3',timelog, keylog);
formatandinsert('sec4row6col4',timelog, keylog);
formatandinsert('sec4row6col5',timelog, keylog);
formatandinsert('sec4row6col6',timelog, keylog);
formatandinsert('sec4row6col7',timelog, keylog);
formatandinsert('sec4row6col8',timelog, keylog);
formatandinsert('sec4row6col9',timelog, keylog);
formatandinsert('sec4row6col10',timelog, keylog);
formatandinsert('sec4row6col11',timelog, keylog);
formatandinsert('sec4row6col12',timelog, keylog);

formatandinsert('sec4row8col1',timelog, keylog);
formatandinsert('sec4row8col2',timelog, keylog);
formatandinsert('sec4row8col3',timelog, keylog);
formatandinsert('sec4row8col4',timelog, keylog);
formatandinsert('sec4row8col5',timelog, keylog);
formatandinsert('sec4row8col6',timelog, keylog);
formatandinsert('sec4row8col7',timelog, keylog);
formatandinsert('sec4row8col8',timelog, keylog);
formatandinsert('sec4row8col9',timelog, keylog);
formatandinsert('sec4row8col10',timelog, keylog);
formatandinsert('sec4row8col11',timelog, keylog);
formatandinsert('sec4row8col12',timelog, keylog);

formatandinsert('sec4row12col1',timelog, keylog);
formatandinsert('sec4row12col2',timelog, keylog);
formatandinsert('sec4row12col3',timelog, keylog);
formatandinsert('sec4row12col4',timelog, keylog);
formatandinsert('sec4row12col5',timelog, keylog);
formatandinsert('sec4row12col6',timelog, keylog);
formatandinsert('sec4row12col7',timelog, keylog);
formatandinsert('sec4row12col8',timelog, keylog);
formatandinsert('sec4row12col9',timelog, keylog);
formatandinsert('sec4row12col10',timelog, keylog);
formatandinsert('sec4row12col11',timelog, keylog);
formatandinsert('sec4row12col12',timelog, keylog);
}
connectiondb.query( "insert into action_log" + " values('" + keylog + "','"  + timelog + "','"  + ip + "','"  + dataset.servername + "','"  + dataset.client +  "','Mobile RTB')"
    , function(err, rows) {
});

logger.info("update ist_comments set comment = '" + dataset.sec4row1col14.replace(/'/g, '\\\''  ) + "', timelog='" + timelog + "', keylog='" + keylog + "' where client='" + dataset.client + "' and media='Mobile RTB'");
connectiondb.query("update ist_comments set comment = '" + dataset.sec4row1col14.replace(/'/g, '\\\''  ) + "', timelog='" + timelog + "', keylog='" + keylog + "' where client='" + dataset.client + "' and media='Mobile RTB'"
    , function(err, rows) {
});

};


if (dataset.sec5) {

if (dataset.servertype == 'ps') {

formatandinsert('sec5row1col1',timelog, keylog);
formatandinsert('sec5row1col2',timelog, keylog);
formatandinsert('sec5row1col3',timelog, keylog);
formatandinsert('sec5row1col4',timelog, keylog);
formatandinsert('sec5row1col5',timelog, keylog);
formatandinsert('sec5row1col6',timelog, keylog);
formatandinsert('sec5row1col7',timelog, keylog);
formatandinsert('sec5row1col8',timelog, keylog);
formatandinsert('sec5row1col9',timelog, keylog);
formatandinsert('sec5row1col10',timelog, keylog);
formatandinsert('sec5row1col11',timelog, keylog);
formatandinsert('sec5row1col12',timelog, keylog);

formatandinsert('sec5row2col1',timelog, keylog);
formatandinsert('sec5row2col2',timelog, keylog);
formatandinsert('sec5row2col3',timelog, keylog);
formatandinsert('sec5row2col4',timelog, keylog);
formatandinsert('sec5row2col5',timelog, keylog);
formatandinsert('sec5row2col6',timelog, keylog);
formatandinsert('sec5row2col7',timelog, keylog);
formatandinsert('sec5row2col8',timelog, keylog);
formatandinsert('sec5row2col9',timelog, keylog);
formatandinsert('sec5row2col10',timelog, keylog);
formatandinsert('sec5row2col11',timelog, keylog);
formatandinsert('sec5row2col12',timelog, keylog);

}

if (dataset.servertype == 'master') {

formatandinsert('sec5row3col1',timelog, keylog);
formatandinsert('sec5row3col2',timelog, keylog);
formatandinsert('sec5row3col3',timelog, keylog);
formatandinsert('sec5row3col4',timelog, keylog);
formatandinsert('sec5row3col5',timelog, keylog);
formatandinsert('sec5row3col6',timelog, keylog);
formatandinsert('sec5row3col7',timelog, keylog);
formatandinsert('sec5row3col8',timelog, keylog);
formatandinsert('sec5row3col9',timelog, keylog);
formatandinsert('sec5row3col10',timelog, keylog);
formatandinsert('sec5row3col11',timelog, keylog);
formatandinsert('sec5row3col12',timelog, keylog);

formatandinsert('sec5row5col1',timelog, keylog);
formatandinsert('sec5row5col2',timelog, keylog);
formatandinsert('sec5row5col3',timelog, keylog);
formatandinsert('sec5row5col4',timelog, keylog);
formatandinsert('sec5row5col5',timelog, keylog);
formatandinsert('sec5row5col6',timelog, keylog);
formatandinsert('sec5row5col7',timelog, keylog);
formatandinsert('sec5row5col8',timelog, keylog);
formatandinsert('sec5row5col9',timelog, keylog);
formatandinsert('sec5row5col10',timelog, keylog);
formatandinsert('sec5row5col11',timelog, keylog);
formatandinsert('sec5row5col12',timelog, keylog);

formatandinsert('sec5row6col1',timelog, keylog);
formatandinsert('sec5row6col2',timelog, keylog);
formatandinsert('sec5row6col3',timelog, keylog);
formatandinsert('sec5row6col4',timelog, keylog);
formatandinsert('sec5row6col5',timelog, keylog);
formatandinsert('sec5row6col6',timelog, keylog);
formatandinsert('sec5row6col7',timelog, keylog);
formatandinsert('sec5row6col8',timelog, keylog);
formatandinsert('sec5row6col9',timelog, keylog);
formatandinsert('sec5row6col10',timelog, keylog);
formatandinsert('sec5row6col11',timelog, keylog);
formatandinsert('sec5row6col12',timelog, keylog);

formatandinsert('sec5row8col1',timelog, keylog);
formatandinsert('sec5row8col2',timelog, keylog);
formatandinsert('sec5row8col3',timelog, keylog);
formatandinsert('sec5row8col4',timelog, keylog);
formatandinsert('sec5row8col5',timelog, keylog);
formatandinsert('sec5row8col6',timelog, keylog);
formatandinsert('sec5row8col7',timelog, keylog);
formatandinsert('sec5row8col8',timelog, keylog);
formatandinsert('sec5row8col9',timelog, keylog);
formatandinsert('sec5row8col10',timelog, keylog);
formatandinsert('sec5row8col11',timelog, keylog);
formatandinsert('sec5row8col12',timelog, keylog);

formatandinsert('sec5row12col1',timelog, keylog);
formatandinsert('sec5row12col2',timelog, keylog);
formatandinsert('sec5row12col3',timelog, keylog);
formatandinsert('sec5row12col4',timelog, keylog);
formatandinsert('sec5row12col5',timelog, keylog);
formatandinsert('sec5row12col6',timelog, keylog);
formatandinsert('sec5row12col7',timelog, keylog);
formatandinsert('sec5row12col8',timelog, keylog);
formatandinsert('sec5row12col9',timelog, keylog);
formatandinsert('sec5row12col10',timelog, keylog);
formatandinsert('sec5row12col11',timelog, keylog);
formatandinsert('sec5row12col12',timelog, keylog);
}
connectiondb.query( "insert into action_log" + " values('" + keylog + "','"  + timelog + "','"  + ip + "','"  + dataset.servername + "','"  + dataset.client +  "','Social RTB')"
    , function(err, rows) {
});
logger.info("update ist_comments set comment = '" + dataset.sec5row1col14.replace(/'/g, '\\\''  ) + "', timelog='" + timelog + "', keylog='" + keylog + "' where client='" + dataset.client + "' and media='Social RTB'");
connectiondb.query("update ist_comments set comment = '" + dataset.sec5row1col14.replace(/'/g, '\\\''  ) + "', timelog='" + timelog + "', keylog='" + keylog + "' where client='" + dataset.client + "' and media='Social RTB'"
    , function(err, rows) {
});

};


if (dataset.sec6) {

if (dataset.servertype == 'ps') {

formatandinsert('sec6row1col1',timelog, keylog);
formatandinsert('sec6row1col2',timelog, keylog);
formatandinsert('sec6row1col3',timelog, keylog);
formatandinsert('sec6row1col4',timelog, keylog);
formatandinsert('sec6row1col5',timelog, keylog);
formatandinsert('sec6row1col6',timelog, keylog);
formatandinsert('sec6row1col7',timelog, keylog);
formatandinsert('sec6row1col8',timelog, keylog);
formatandinsert('sec6row1col9',timelog, keylog);
formatandinsert('sec6row1col10',timelog, keylog);
formatandinsert('sec6row1col11',timelog, keylog);
formatandinsert('sec6row1col12',timelog, keylog);

formatandinsert('sec6row2col1',timelog, keylog);
formatandinsert('sec6row2col2',timelog, keylog);
formatandinsert('sec6row2col3',timelog, keylog);
formatandinsert('sec6row2col4',timelog, keylog);
formatandinsert('sec6row2col5',timelog, keylog);
formatandinsert('sec6row2col6',timelog, keylog);
formatandinsert('sec6row2col7',timelog, keylog);
formatandinsert('sec6row2col8',timelog, keylog);
formatandinsert('sec6row2col9',timelog, keylog);
formatandinsert('sec6row2col10',timelog, keylog);
formatandinsert('sec6row2col11',timelog, keylog);
formatandinsert('sec6row2col12',timelog, keylog);

}

if (dataset.servertype == 'master') {

formatandinsert('sec6row3col1',timelog, keylog);
formatandinsert('sec6row3col2',timelog, keylog);
formatandinsert('sec6row3col3',timelog, keylog);
formatandinsert('sec6row3col4',timelog, keylog);
formatandinsert('sec6row3col5',timelog, keylog);
formatandinsert('sec6row3col6',timelog, keylog);
formatandinsert('sec6row3col7',timelog, keylog);
formatandinsert('sec6row3col8',timelog, keylog);
formatandinsert('sec6row3col9',timelog, keylog);
formatandinsert('sec6row3col10',timelog, keylog);
formatandinsert('sec6row3col11',timelog, keylog);
formatandinsert('sec6row3col12',timelog, keylog);

formatandinsert('sec6row5col1',timelog, keylog);
formatandinsert('sec6row5col2',timelog, keylog);
formatandinsert('sec6row5col3',timelog, keylog);
formatandinsert('sec6row5col4',timelog, keylog);
formatandinsert('sec6row5col5',timelog, keylog);
formatandinsert('sec6row5col6',timelog, keylog);
formatandinsert('sec6row5col7',timelog, keylog);
formatandinsert('sec6row5col8',timelog, keylog);
formatandinsert('sec6row5col9',timelog, keylog);
formatandinsert('sec6row5col10',timelog, keylog);
formatandinsert('sec6row5col11',timelog, keylog);
formatandinsert('sec6row5col12',timelog, keylog);

formatandinsert('sec6row6col1',timelog, keylog);
formatandinsert('sec6row6col2',timelog, keylog);
formatandinsert('sec6row6col3',timelog, keylog);
formatandinsert('sec6row6col4',timelog, keylog);
formatandinsert('sec6row6col5',timelog, keylog);
formatandinsert('sec6row6col6',timelog, keylog);
formatandinsert('sec6row6col7',timelog, keylog);
formatandinsert('sec6row6col8',timelog, keylog);
formatandinsert('sec6row6col9',timelog, keylog);
formatandinsert('sec6row6col10',timelog, keylog);
formatandinsert('sec6row6col11',timelog, keylog);
formatandinsert('sec6row6col12',timelog, keylog);

formatandinsert('sec6row8col1',timelog, keylog);
formatandinsert('sec6row8col2',timelog, keylog);
formatandinsert('sec6row8col3',timelog, keylog);
formatandinsert('sec6row8col4',timelog, keylog);
formatandinsert('sec6row8col5',timelog, keylog);
formatandinsert('sec6row8col6',timelog, keylog);
formatandinsert('sec6row8col7',timelog, keylog);
formatandinsert('sec6row8col8',timelog, keylog);
formatandinsert('sec6row8col9',timelog, keylog);
formatandinsert('sec6row8col10',timelog, keylog);
formatandinsert('sec6row8col11',timelog, keylog);
formatandinsert('sec6row8col12',timelog, keylog);

formatandinsert('sec6row12col1',timelog, keylog);
formatandinsert('sec6row12col2',timelog, keylog);
formatandinsert('sec6row12col3',timelog, keylog);
formatandinsert('sec6row12col4',timelog, keylog);
formatandinsert('sec6row12col5',timelog, keylog);
formatandinsert('sec6row12col6',timelog, keylog);
formatandinsert('sec6row12col7',timelog, keylog);
formatandinsert('sec6row12col8',timelog, keylog);
formatandinsert('sec6row12col9',timelog, keylog);
formatandinsert('sec6row12col10',timelog, keylog);
formatandinsert('sec6row12col11',timelog, keylog);
formatandinsert('sec6row12col12',timelog, keylog);
}
connectiondb.query( "insert into action_log" + " values('" + keylog + "','"  + timelog + "','"  + ip + "','"  + dataset.servername + "','"  + dataset.client +  "','TV')"
    , function(err, rows) {
});
logger.info("update ist_comments set comment = '" + dataset.sec6row1col14.replace(/'/g, '\\\''  ) + "', timelog='" + timelog + "', keylog='" + keylog + "' where client='" + dataset.client + "' and media='TV'");
connectiondb.query("update ist_comments set comment = '" + dataset.sec6row1col14.replace(/'/g, '\\\''  ) + "', timelog='" + timelog + "', keylog='" + keylog + "' where client='" + dataset.client + "' and media='TV'"
    , function(err, rows) {
});

};


if (dataset.sec7) {

if (dataset.servertype == 'ps') {

formatandinsert('sec7row1col1',timelog, keylog);
formatandinsert('sec7row1col2',timelog, keylog);
formatandinsert('sec7row1col3',timelog, keylog);
formatandinsert('sec7row1col4',timelog, keylog);
formatandinsert('sec7row1col5',timelog, keylog);
formatandinsert('sec7row1col6',timelog, keylog);
formatandinsert('sec7row1col7',timelog, keylog);
formatandinsert('sec7row1col8',timelog, keylog);
formatandinsert('sec7row1col9',timelog, keylog);
formatandinsert('sec7row1col10',timelog, keylog);
formatandinsert('sec7row1col11',timelog, keylog);
formatandinsert('sec7row1col12',timelog, keylog);

formatandinsert('sec7row2col1',timelog, keylog);
formatandinsert('sec7row2col2',timelog, keylog);
formatandinsert('sec7row2col3',timelog, keylog);
formatandinsert('sec7row2col4',timelog, keylog);
formatandinsert('sec7row2col5',timelog, keylog);
formatandinsert('sec7row2col6',timelog, keylog);
formatandinsert('sec7row2col7',timelog, keylog);
formatandinsert('sec7row2col8',timelog, keylog);
formatandinsert('sec7row2col9',timelog, keylog);
formatandinsert('sec7row2col10',timelog, keylog);
formatandinsert('sec7row2col11',timelog, keylog);
formatandinsert('sec7row2col12',timelog, keylog);

}

if (dataset.servertype == 'master') {

formatandinsert('sec7row3col1',timelog, keylog);
formatandinsert('sec7row3col2',timelog, keylog);
formatandinsert('sec7row3col3',timelog, keylog);
formatandinsert('sec7row3col4',timelog, keylog);
formatandinsert('sec7row3col5',timelog, keylog);
formatandinsert('sec7row3col6',timelog, keylog);
formatandinsert('sec7row3col7',timelog, keylog);
formatandinsert('sec7row3col8',timelog, keylog);
formatandinsert('sec7row3col9',timelog, keylog);
formatandinsert('sec7row3col10',timelog, keylog);
formatandinsert('sec7row3col11',timelog, keylog);
formatandinsert('sec7row3col12',timelog, keylog);

formatandinsert('sec7row5col1',timelog, keylog);
formatandinsert('sec7row5col2',timelog, keylog);
formatandinsert('sec7row5col3',timelog, keylog);
formatandinsert('sec7row5col4',timelog, keylog);
formatandinsert('sec7row5col5',timelog, keylog);
formatandinsert('sec7row5col6',timelog, keylog);
formatandinsert('sec7row5col7',timelog, keylog);
formatandinsert('sec7row5col8',timelog, keylog);
formatandinsert('sec7row5col9',timelog, keylog);
formatandinsert('sec7row5col10',timelog, keylog);
formatandinsert('sec7row5col11',timelog, keylog);
formatandinsert('sec7row5col12',timelog, keylog);

formatandinsert('sec7row6col1',timelog, keylog);
formatandinsert('sec7row6col2',timelog, keylog);
formatandinsert('sec7row6col3',timelog, keylog);
formatandinsert('sec7row6col4',timelog, keylog);
formatandinsert('sec7row6col5',timelog, keylog);
formatandinsert('sec7row6col6',timelog, keylog);
formatandinsert('sec7row6col7',timelog, keylog);
formatandinsert('sec7row6col8',timelog, keylog);
formatandinsert('sec7row6col9',timelog, keylog);
formatandinsert('sec7row6col10',timelog, keylog);
formatandinsert('sec7row6col11',timelog, keylog);
formatandinsert('sec7row6col12',timelog, keylog);

formatandinsert('sec7row8col1',timelog, keylog);
formatandinsert('sec7row8col2',timelog, keylog);
formatandinsert('sec7row8col3',timelog, keylog);
formatandinsert('sec7row8col4',timelog, keylog);
formatandinsert('sec7row8col5',timelog, keylog);
formatandinsert('sec7row8col6',timelog, keylog);
formatandinsert('sec7row8col7',timelog, keylog);
formatandinsert('sec7row8col8',timelog, keylog);
formatandinsert('sec7row8col9',timelog, keylog);
formatandinsert('sec7row8col10',timelog, keylog);
formatandinsert('sec7row8col11',timelog, keylog);
formatandinsert('sec7row8col12',timelog, keylog);

formatandinsert('sec7row12col1',timelog, keylog);
formatandinsert('sec7row12col2',timelog, keylog);
formatandinsert('sec7row12col3',timelog, keylog);
formatandinsert('sec7row12col4',timelog, keylog);
formatandinsert('sec7row12col5',timelog, keylog);
formatandinsert('sec7row12col6',timelog, keylog);
formatandinsert('sec7row12col7',timelog, keylog);
formatandinsert('sec7row12col8',timelog, keylog);
formatandinsert('sec7row12col9',timelog, keylog);
formatandinsert('sec7row12col10',timelog, keylog);
formatandinsert('sec7row12col11',timelog, keylog);
formatandinsert('sec7row12col12',timelog, keylog);
}
connectiondb.query( "insert into action_log" + " values('" + keylog + "','"  + timelog + "','"  + ip + "','"  + dataset.servername + "','"  + dataset.client +  "','Display - DB A')"
    , function(err, rows) {
});

logger.info("update ist_comments set comment = '" + dataset.sec7row1col14.replace(/'/g, '\\\''  ) + "', timelog='" + timelog + "', keylog='" + keylog + "' where client='" + dataset.client + "' and media='Display - DB A'");
connectiondb.query("update ist_comments set comment = '" + dataset.sec7row1col14.replace(/'/g, '\\\''  ) + "', timelog='" + timelog + "', keylog='" + keylog + "' where client='" + dataset.client + "' and media='Display - DB A'"
    , function(err, rows) {
});

};


if (dataset.sec8) {

if (dataset.servertype == 'ps') {

formatandinsert('sec8row1col1',timelog, keylog);
formatandinsert('sec8row1col2',timelog, keylog);
formatandinsert('sec8row1col3',timelog, keylog);
formatandinsert('sec8row1col4',timelog, keylog);
formatandinsert('sec8row1col5',timelog, keylog);
formatandinsert('sec8row1col6',timelog, keylog);
formatandinsert('sec8row1col7',timelog, keylog);
formatandinsert('sec8row1col8',timelog, keylog);
formatandinsert('sec8row1col9',timelog, keylog);
formatandinsert('sec8row1col10',timelog, keylog);
formatandinsert('sec8row1col11',timelog, keylog);
formatandinsert('sec8row1col12',timelog, keylog);

formatandinsert('sec8row2col1',timelog, keylog);
formatandinsert('sec8row2col2',timelog, keylog);
formatandinsert('sec8row2col3',timelog, keylog);
formatandinsert('sec8row2col4',timelog, keylog);
formatandinsert('sec8row2col5',timelog, keylog);
formatandinsert('sec8row2col6',timelog, keylog);
formatandinsert('sec8row2col7',timelog, keylog);
formatandinsert('sec8row2col8',timelog, keylog);
formatandinsert('sec8row2col9',timelog, keylog);
formatandinsert('sec8row2col10',timelog, keylog);
formatandinsert('sec8row2col11',timelog, keylog);
formatandinsert('sec8row2col12',timelog, keylog);

}

if (dataset.servertype == 'master') {

formatandinsert('sec8row3col1',timelog, keylog);
formatandinsert('sec8row3col2',timelog, keylog);
formatandinsert('sec8row3col3',timelog, keylog);
formatandinsert('sec8row3col4',timelog, keylog);
formatandinsert('sec8row3col5',timelog, keylog);
formatandinsert('sec8row3col6',timelog, keylog);
formatandinsert('sec8row3col7',timelog, keylog);
formatandinsert('sec8row3col8',timelog, keylog);
formatandinsert('sec8row3col9',timelog, keylog);
formatandinsert('sec8row3col10',timelog, keylog);
formatandinsert('sec8row3col11',timelog, keylog);
formatandinsert('sec8row3col12',timelog, keylog);

formatandinsert('sec8row5col1',timelog, keylog);
formatandinsert('sec8row5col2',timelog, keylog);
formatandinsert('sec8row5col3',timelog, keylog);
formatandinsert('sec8row5col4',timelog, keylog);
formatandinsert('sec8row5col5',timelog, keylog);
formatandinsert('sec8row5col6',timelog, keylog);
formatandinsert('sec8row5col7',timelog, keylog);
formatandinsert('sec8row5col8',timelog, keylog);
formatandinsert('sec8row5col9',timelog, keylog);
formatandinsert('sec8row5col10',timelog, keylog);
formatandinsert('sec8row5col11',timelog, keylog);
formatandinsert('sec8row5col12',timelog, keylog);

formatandinsert('sec8row6col1',timelog, keylog);
formatandinsert('sec8row6col2',timelog, keylog);
formatandinsert('sec8row6col3',timelog, keylog);
formatandinsert('sec8row6col4',timelog, keylog);
formatandinsert('sec8row6col5',timelog, keylog);
formatandinsert('sec8row6col6',timelog, keylog);
formatandinsert('sec8row6col7',timelog, keylog);
formatandinsert('sec8row6col8',timelog, keylog);
formatandinsert('sec8row6col9',timelog, keylog);
formatandinsert('sec8row6col10',timelog, keylog);
formatandinsert('sec8row6col11',timelog, keylog);
formatandinsert('sec8row6col12',timelog, keylog);

formatandinsert('sec8row8col1',timelog, keylog);
formatandinsert('sec8row8col2',timelog, keylog);
formatandinsert('sec8row8col3',timelog, keylog);
formatandinsert('sec8row8col4',timelog, keylog);
formatandinsert('sec8row8col5',timelog, keylog);
formatandinsert('sec8row8col6',timelog, keylog);
formatandinsert('sec8row8col7',timelog, keylog);
formatandinsert('sec8row8col8',timelog, keylog);
formatandinsert('sec8row8col9',timelog, keylog);
formatandinsert('sec8row8col10',timelog, keylog);
formatandinsert('sec8row8col11',timelog, keylog);
formatandinsert('sec8row8col12',timelog, keylog);

formatandinsert('sec8row12col1',timelog, keylog);
formatandinsert('sec8row12col2',timelog, keylog);
formatandinsert('sec8row12col3',timelog, keylog);
formatandinsert('sec8row12col4',timelog, keylog);
formatandinsert('sec8row12col5',timelog, keylog);
formatandinsert('sec8row12col6',timelog, keylog);
formatandinsert('sec8row12col7',timelog, keylog);
formatandinsert('sec8row12col8',timelog, keylog);
formatandinsert('sec8row12col9',timelog, keylog);
formatandinsert('sec8row12col10',timelog, keylog);
formatandinsert('sec8row12col11',timelog, keylog);
formatandinsert('sec8row12col12',timelog, keylog);
}
connectiondb.query( "insert into action_log" + " values('" + keylog + "','"  + timelog + "','"  + ip + "','"  + dataset.servername + "','"  + dataset.client +  "','Video - DB A')"
    , function(err, rows) {
});

logger.info("update ist_comments set comment = '" + dataset.sec8row1col14.replace(/'/g, '\\\''  ) + "', timelog='" + timelog + "', keylog='" + keylog + "' where client='" + dataset.client + "' and media='Video - DB A'");
connectiondb.query("update ist_comments set comment = '" + dataset.sec8row1col14.replace(/'/g, '\\\''  ) + "', timelog='" + timelog + "', keylog='" + keylog + "' where client='" + dataset.client + "' and media='Video - DB A'"
    , function(err, rows) {
});

};


if (dataset.sec9) {

if (dataset.servertype == 'ps') {

formatandinsert('sec9row1col1',timelog, keylog);
formatandinsert('sec9row1col2',timelog, keylog);
formatandinsert('sec9row1col3',timelog, keylog);
formatandinsert('sec9row1col4',timelog, keylog);
formatandinsert('sec9row1col5',timelog, keylog);
formatandinsert('sec9row1col6',timelog, keylog);
formatandinsert('sec9row1col7',timelog, keylog);
formatandinsert('sec9row1col8',timelog, keylog);
formatandinsert('sec9row1col9',timelog, keylog);
formatandinsert('sec9row1col10',timelog, keylog);
formatandinsert('sec9row1col11',timelog, keylog);
formatandinsert('sec9row1col12',timelog, keylog);

formatandinsert('sec9row2col1',timelog, keylog);
formatandinsert('sec9row2col2',timelog, keylog);
formatandinsert('sec9row2col3',timelog, keylog);
formatandinsert('sec9row2col4',timelog, keylog);
formatandinsert('sec9row2col5',timelog, keylog);
formatandinsert('sec9row2col6',timelog, keylog);
formatandinsert('sec9row2col7',timelog, keylog);
formatandinsert('sec9row2col8',timelog, keylog);
formatandinsert('sec9row2col9',timelog, keylog);
formatandinsert('sec9row2col10',timelog, keylog);
formatandinsert('sec9row2col11',timelog, keylog);
formatandinsert('sec9row2col12',timelog, keylog);

}

if (dataset.servertype == 'master') {

formatandinsert('sec9row3col1',timelog, keylog);
formatandinsert('sec9row3col2',timelog, keylog);
formatandinsert('sec9row3col3',timelog, keylog);
formatandinsert('sec9row3col4',timelog, keylog);
formatandinsert('sec9row3col5',timelog, keylog);
formatandinsert('sec9row3col6',timelog, keylog);
formatandinsert('sec9row3col7',timelog, keylog);
formatandinsert('sec9row3col8',timelog, keylog);
formatandinsert('sec9row3col9',timelog, keylog);
formatandinsert('sec9row3col10',timelog, keylog);
formatandinsert('sec9row3col11',timelog, keylog);
formatandinsert('sec9row3col12',timelog, keylog);

formatandinsert('sec9row5col1',timelog, keylog);
formatandinsert('sec9row5col2',timelog, keylog);
formatandinsert('sec9row5col3',timelog, keylog);
formatandinsert('sec9row5col4',timelog, keylog);
formatandinsert('sec9row5col5',timelog, keylog);
formatandinsert('sec9row5col6',timelog, keylog);
formatandinsert('sec9row5col7',timelog, keylog);
formatandinsert('sec9row5col8',timelog, keylog);
formatandinsert('sec9row5col9',timelog, keylog);
formatandinsert('sec9row5col10',timelog, keylog);
formatandinsert('sec9row5col11',timelog, keylog);
formatandinsert('sec9row5col12',timelog, keylog);

formatandinsert('sec9row6col1',timelog, keylog);
formatandinsert('sec9row6col2',timelog, keylog);
formatandinsert('sec9row6col3',timelog, keylog);
formatandinsert('sec9row6col4',timelog, keylog);
formatandinsert('sec9row6col5',timelog, keylog);
formatandinsert('sec9row6col6',timelog, keylog);
formatandinsert('sec9row6col7',timelog, keylog);
formatandinsert('sec9row6col8',timelog, keylog);
formatandinsert('sec9row6col9',timelog, keylog);
formatandinsert('sec9row6col10',timelog, keylog);
formatandinsert('sec9row6col11',timelog, keylog);
formatandinsert('sec9row6col12',timelog, keylog);

formatandinsert('sec9row8col1',timelog, keylog);
formatandinsert('sec9row8col2',timelog, keylog);
formatandinsert('sec9row8col3',timelog, keylog);
formatandinsert('sec9row8col4',timelog, keylog);
formatandinsert('sec9row8col5',timelog, keylog);
formatandinsert('sec9row8col6',timelog, keylog);
formatandinsert('sec9row8col7',timelog, keylog);
formatandinsert('sec9row8col8',timelog, keylog);
formatandinsert('sec9row8col9',timelog, keylog);
formatandinsert('sec9row8col10',timelog, keylog);
formatandinsert('sec9row8col11',timelog, keylog);
formatandinsert('sec9row8col12',timelog, keylog);

formatandinsert('sec9row12col1',timelog, keylog);
formatandinsert('sec9row12col2',timelog, keylog);
formatandinsert('sec9row12col3',timelog, keylog);
formatandinsert('sec9row12col4',timelog, keylog);
formatandinsert('sec9row12col5',timelog, keylog);
formatandinsert('sec9row12col6',timelog, keylog);
formatandinsert('sec9row12col7',timelog, keylog);
formatandinsert('sec9row12col8',timelog, keylog);
formatandinsert('sec9row12col9',timelog, keylog);
formatandinsert('sec9row12col10',timelog, keylog);
formatandinsert('sec9row12col11',timelog, keylog);
formatandinsert('sec9row12col12',timelog, keylog);
}
connectiondb.query( "insert into action_log" + " values('" + keylog + "','"  + timelog + "','"  + ip + "','"  + dataset.servername + "','"  + dataset.client +  "','Mobile - DB A')"
    , function(err, rows) {
});

logger.info("update ist_comments set comment = '" + dataset.sec9row1col14.replace(/'/g, '\\\''  ) + "', timelog='" + timelog + "', keylog='" + keylog + "' where client='" + dataset.client + "' and media='Mobile - DB A'");
connectiondb.query("update ist_comments set comment = '" + dataset.sec9row1col14.replace(/'/g, '\\\''  ) + "', timelog='" + timelog + "', keylog='" + keylog + "' where client='" + dataset.client + "' and media='Mobile - DB A'"
    , function(err, rows) {
});

};


if (dataset.sec10) {

    if (dataset.servertype == 'ps') {


formatandinsert('sec10row1col1',timelog, keylog);
formatandinsert('sec10row1col2',timelog, keylog);
formatandinsert('sec10row1col3',timelog, keylog);
formatandinsert('sec10row1col4',timelog, keylog);
formatandinsert('sec10row1col5',timelog, keylog);
formatandinsert('sec10row1col6',timelog, keylog);
formatandinsert('sec10row1col7',timelog, keylog);
formatandinsert('sec10row1col8',timelog, keylog);
formatandinsert('sec10row1col9',timelog, keylog);
formatandinsert('sec10row1col10',timelog, keylog);
formatandinsert('sec10row1col11',timelog, keylog);
formatandinsert('sec10row1col12',timelog, keylog);

formatandinsert('sec10row2col1',timelog, keylog);
formatandinsert('sec10row2col2',timelog, keylog);
formatandinsert('sec10row2col3',timelog, keylog);
formatandinsert('sec10row2col4',timelog, keylog);
formatandinsert('sec10row2col5',timelog, keylog);
formatandinsert('sec10row2col6',timelog, keylog);
formatandinsert('sec10row2col7',timelog, keylog);
formatandinsert('sec10row2col8',timelog, keylog);
formatandinsert('sec10row2col9',timelog, keylog);
formatandinsert('sec10row2col10',timelog, keylog);
formatandinsert('sec10row2col11',timelog, keylog);
formatandinsert('sec10row2col12',timelog, keylog);

}

if (dataset.servertype == 'master') {

formatandinsert('sec10row3col1',timelog, keylog);
formatandinsert('sec10row3col2',timelog, keylog);
formatandinsert('sec10row3col3',timelog, keylog);
formatandinsert('sec10row3col4',timelog, keylog);
formatandinsert('sec10row3col5',timelog, keylog);
formatandinsert('sec10row3col6',timelog, keylog);
formatandinsert('sec10row3col7',timelog, keylog);
formatandinsert('sec10row3col8',timelog, keylog);
formatandinsert('sec10row3col9',timelog, keylog);
formatandinsert('sec10row3col10',timelog, keylog);
formatandinsert('sec10row3col11',timelog, keylog);
formatandinsert('sec10row3col12',timelog, keylog);

formatandinsert('sec10row5col1',timelog, keylog);
formatandinsert('sec10row5col2',timelog, keylog);
formatandinsert('sec10row5col3',timelog, keylog);
formatandinsert('sec10row5col4',timelog, keylog);
formatandinsert('sec10row5col5',timelog, keylog);
formatandinsert('sec10row5col6',timelog, keylog);
formatandinsert('sec10row5col7',timelog, keylog);
formatandinsert('sec10row5col8',timelog, keylog);
formatandinsert('sec10row5col9',timelog, keylog);
formatandinsert('sec10row5col10',timelog, keylog);
formatandinsert('sec10row5col11',timelog, keylog);
formatandinsert('sec10row5col12',timelog, keylog);

formatandinsert('sec10row6col1',timelog, keylog);
formatandinsert('sec10row6col2',timelog, keylog);
formatandinsert('sec10row6col3',timelog, keylog);
formatandinsert('sec10row6col4',timelog, keylog);
formatandinsert('sec10row6col5',timelog, keylog);
formatandinsert('sec10row6col6',timelog, keylog);
formatandinsert('sec10row6col7',timelog, keylog);
formatandinsert('sec10row6col8',timelog, keylog);
formatandinsert('sec10row6col9',timelog, keylog);
formatandinsert('sec10row6col10',timelog, keylog);
formatandinsert('sec10row6col11',timelog, keylog);
formatandinsert('sec10row6col12',timelog, keylog);

formatandinsert('sec10row8col1',timelog, keylog);
formatandinsert('sec10row8col2',timelog, keylog);
formatandinsert('sec10row8col3',timelog, keylog);
formatandinsert('sec10row8col4',timelog, keylog);
formatandinsert('sec10row8col5',timelog, keylog);
formatandinsert('sec10row8col6',timelog, keylog);
formatandinsert('sec10row8col7',timelog, keylog);
formatandinsert('sec10row8col8',timelog, keylog);
formatandinsert('sec10row8col9',timelog, keylog);
formatandinsert('sec10row8col10',timelog, keylog);
formatandinsert('sec10row8col11',timelog, keylog);
formatandinsert('sec10row8col12',timelog, keylog);

formatandinsert('sec10row12col1',timelog, keylog);
formatandinsert('sec10row12col2',timelog, keylog);
formatandinsert('sec10row12col3',timelog, keylog);
formatandinsert('sec10row12col4',timelog, keylog);
formatandinsert('sec10row12col5',timelog, keylog);
formatandinsert('sec10row12col6',timelog, keylog);
formatandinsert('sec10row12col7',timelog, keylog);
formatandinsert('sec10row12col8',timelog, keylog);
formatandinsert('sec10row12col9',timelog, keylog);
formatandinsert('sec10row12col10',timelog, keylog);
formatandinsert('sec10row12col11',timelog, keylog);
formatandinsert('sec10row12col12',timelog, keylog);
}
connectiondb.query( "insert into action_log" + " values('" + keylog + "','"  + timelog + "','"  + ip + "','"  + dataset.servername + "','"  + dataset.client +  "','Social - DB A')"
    , function(err, rows) {
});

logger.info("update ist_comments set comment = '" + dataset.sec10row1col14.replace(/'/g, '\\\''  ) + "', timelog='" + timelog + "', keylog='" + keylog + "' where client='" + dataset.client + "' and media='Social - DB A'");
connectiondb.query("update ist_comments set comment = '" + dataset.sec10row1col14.replace(/'/g, '\\\''  ) + "', timelog='" + timelog + "', keylog='" + keylog + "' where client='" + dataset.client + "' and media='Social - DB A'"
    , function(err, rows) {
});

};


if (dataset.sec11) {

    if (dataset.servertype == 'ps') {


formatandinsert('sec11row1col1',timelog, keylog);
formatandinsert('sec11row1col2',timelog, keylog);
formatandinsert('sec11row1col3',timelog, keylog);
formatandinsert('sec11row1col4',timelog, keylog);
formatandinsert('sec11row1col5',timelog, keylog);
formatandinsert('sec11row1col6',timelog, keylog);
formatandinsert('sec11row1col7',timelog, keylog);
formatandinsert('sec11row1col8',timelog, keylog);
formatandinsert('sec11row1col9',timelog, keylog);
formatandinsert('sec11row1col10',timelog, keylog);
formatandinsert('sec11row1col11',timelog, keylog);
formatandinsert('sec11row1col12',timelog, keylog);

formatandinsert('sec11row2col1',timelog, keylog);
formatandinsert('sec11row2col2',timelog, keylog);
formatandinsert('sec11row2col3',timelog, keylog);
formatandinsert('sec11row2col4',timelog, keylog);
formatandinsert('sec11row2col5',timelog, keylog);
formatandinsert('sec11row2col6',timelog, keylog);
formatandinsert('sec11row2col7',timelog, keylog);
formatandinsert('sec11row2col8',timelog, keylog);
formatandinsert('sec11row2col9',timelog, keylog);
formatandinsert('sec11row2col10',timelog, keylog);
formatandinsert('sec11row2col11',timelog, keylog);
formatandinsert('sec11row2col12',timelog, keylog);

}

if (dataset.servertype == 'master') {

formatandinsert('sec11row3col1',timelog, keylog);
formatandinsert('sec11row3col2',timelog, keylog);
formatandinsert('sec11row3col3',timelog, keylog);
formatandinsert('sec11row3col4',timelog, keylog);
formatandinsert('sec11row3col5',timelog, keylog);
formatandinsert('sec11row3col6',timelog, keylog);
formatandinsert('sec11row3col7',timelog, keylog);
formatandinsert('sec11row3col8',timelog, keylog);
formatandinsert('sec11row3col9',timelog, keylog);
formatandinsert('sec11row3col10',timelog, keylog);
formatandinsert('sec11row3col11',timelog, keylog);
formatandinsert('sec11row3col12',timelog, keylog);

formatandinsert('sec11row5col1',timelog, keylog);
formatandinsert('sec11row5col2',timelog, keylog);
formatandinsert('sec11row5col3',timelog, keylog);
formatandinsert('sec11row5col4',timelog, keylog);
formatandinsert('sec11row5col5',timelog, keylog);
formatandinsert('sec11row5col6',timelog, keylog);
formatandinsert('sec11row5col7',timelog, keylog);
formatandinsert('sec11row5col8',timelog, keylog);
formatandinsert('sec11row5col9',timelog, keylog);
formatandinsert('sec11row5col10',timelog, keylog);
formatandinsert('sec11row5col11',timelog, keylog);
formatandinsert('sec11row5col12',timelog, keylog);

formatandinsert('sec11row6col1',timelog, keylog);
formatandinsert('sec11row6col2',timelog, keylog);
formatandinsert('sec11row6col3',timelog, keylog);
formatandinsert('sec11row6col4',timelog, keylog);
formatandinsert('sec11row6col5',timelog, keylog);
formatandinsert('sec11row6col6',timelog, keylog);
formatandinsert('sec11row6col7',timelog, keylog);
formatandinsert('sec11row6col8',timelog, keylog);
formatandinsert('sec11row6col9',timelog, keylog);
formatandinsert('sec11row6col10',timelog, keylog);
formatandinsert('sec11row6col11',timelog, keylog);
formatandinsert('sec11row6col12',timelog, keylog);

formatandinsert('sec11row8col1',timelog, keylog);
formatandinsert('sec11row8col2',timelog, keylog);
formatandinsert('sec11row8col3',timelog, keylog);
formatandinsert('sec11row8col4',timelog, keylog);
formatandinsert('sec11row8col5',timelog, keylog);
formatandinsert('sec11row8col6',timelog, keylog);
formatandinsert('sec11row8col7',timelog, keylog);
formatandinsert('sec11row8col8',timelog, keylog);
formatandinsert('sec11row8col9',timelog, keylog);
formatandinsert('sec11row8col10',timelog, keylog);
formatandinsert('sec11row8col11',timelog, keylog);
formatandinsert('sec11row8col12',timelog, keylog);

formatandinsert('sec11row12col1',timelog, keylog);
formatandinsert('sec11row12col2',timelog, keylog);
formatandinsert('sec11row12col3',timelog, keylog);
formatandinsert('sec11row12col4',timelog, keylog);
formatandinsert('sec11row12col5',timelog, keylog);
formatandinsert('sec11row12col6',timelog, keylog);
formatandinsert('sec11row12col7',timelog, keylog);
formatandinsert('sec11row12col8',timelog, keylog);
formatandinsert('sec11row12col9',timelog, keylog);
formatandinsert('sec11row12col10',timelog, keylog);
formatandinsert('sec11row12col11',timelog, keylog);
formatandinsert('sec11row12col12',timelog, keylog);
}
connectiondb.query( "insert into action_log" + " values('" + keylog + "','"  + timelog + "','"  + ip + "','"  + dataset.servername + "','"  + dataset.client +  "','Display - DB B')"
    , function(err, rows) {
});

logger.info("update ist_comments set comment = '" + dataset.sec11row1col14.replace(/'/g, '\\\''  ) + "', timelog='" + timelog + "', keylog='" + keylog + "' where client='" + dataset.client + "' and media='Display - DB B'");
connectiondb.query("update ist_comments set comment = '" + dataset.sec11row1col14.replace(/'/g, '\\\''  ) + "', timelog='" + timelog + "', keylog='" + keylog + "' where client='" + dataset.client + "' and media='Display - DB B'"
    , function(err, rows) {
});

};


if (dataset.sec12) {

if (dataset.servertype == 'ps') {

formatandinsert('sec12row1col1',timelog, keylog);
formatandinsert('sec12row1col2',timelog, keylog);
formatandinsert('sec12row1col3',timelog, keylog);
formatandinsert('sec12row1col4',timelog, keylog);
formatandinsert('sec12row1col5',timelog, keylog);
formatandinsert('sec12row1col6',timelog, keylog);
formatandinsert('sec12row1col7',timelog, keylog);
formatandinsert('sec12row1col8',timelog, keylog);
formatandinsert('sec12row1col9',timelog, keylog);
formatandinsert('sec12row1col10',timelog, keylog);
formatandinsert('sec12row1col11',timelog, keylog);
formatandinsert('sec12row1col12',timelog, keylog);

formatandinsert('sec12row2col1',timelog, keylog);
formatandinsert('sec12row2col2',timelog, keylog);
formatandinsert('sec12row2col3',timelog, keylog);
formatandinsert('sec12row2col4',timelog, keylog);
formatandinsert('sec12row2col5',timelog, keylog);
formatandinsert('sec12row2col6',timelog, keylog);
formatandinsert('sec12row2col7',timelog, keylog);
formatandinsert('sec12row2col8',timelog, keylog);
formatandinsert('sec12row2col9',timelog, keylog);
formatandinsert('sec12row2col10',timelog, keylog);
formatandinsert('sec12row2col11',timelog, keylog);
formatandinsert('sec12row2col12',timelog, keylog);

}

if (dataset.servertype == 'master') {

formatandinsert('sec12row3col1',timelog, keylog);
formatandinsert('sec12row3col2',timelog, keylog);
formatandinsert('sec12row3col3',timelog, keylog);
formatandinsert('sec12row3col4',timelog, keylog);
formatandinsert('sec12row3col5',timelog, keylog);
formatandinsert('sec12row3col6',timelog, keylog);
formatandinsert('sec12row3col7',timelog, keylog);
formatandinsert('sec12row3col8',timelog, keylog);
formatandinsert('sec12row3col9',timelog, keylog);
formatandinsert('sec12row3col10',timelog, keylog);
formatandinsert('sec12row3col11',timelog, keylog);
formatandinsert('sec12row3col12',timelog, keylog);

formatandinsert('sec12row5col1',timelog, keylog);
formatandinsert('sec12row5col2',timelog, keylog);
formatandinsert('sec12row5col3',timelog, keylog);
formatandinsert('sec12row5col4',timelog, keylog);
formatandinsert('sec12row5col5',timelog, keylog);
formatandinsert('sec12row5col6',timelog, keylog);
formatandinsert('sec12row5col7',timelog, keylog);
formatandinsert('sec12row5col8',timelog, keylog);
formatandinsert('sec12row5col9',timelog, keylog);
formatandinsert('sec12row5col10',timelog, keylog);
formatandinsert('sec12row5col11',timelog, keylog);
formatandinsert('sec12row5col12',timelog, keylog);

formatandinsert('sec12row6col1',timelog, keylog);
formatandinsert('sec12row6col2',timelog, keylog);
formatandinsert('sec12row6col3',timelog, keylog);
formatandinsert('sec12row6col4',timelog, keylog);
formatandinsert('sec12row6col5',timelog, keylog);
formatandinsert('sec12row6col6',timelog, keylog);
formatandinsert('sec12row6col7',timelog, keylog);
formatandinsert('sec12row6col8',timelog, keylog);
formatandinsert('sec12row6col9',timelog, keylog);
formatandinsert('sec12row6col10',timelog, keylog);
formatandinsert('sec12row6col11',timelog, keylog);
formatandinsert('sec12row6col12',timelog, keylog);

formatandinsert('sec12row8col1',timelog, keylog);
formatandinsert('sec12row8col2',timelog, keylog);
formatandinsert('sec12row8col3',timelog, keylog);
formatandinsert('sec12row8col4',timelog, keylog);
formatandinsert('sec12row8col5',timelog, keylog);
formatandinsert('sec12row8col6',timelog, keylog);
formatandinsert('sec12row8col7',timelog, keylog);
formatandinsert('sec12row8col8',timelog, keylog);
formatandinsert('sec12row8col9',timelog, keylog);
formatandinsert('sec12row8col10',timelog, keylog);
formatandinsert('sec12row8col11',timelog, keylog);
formatandinsert('sec12row8col12',timelog, keylog);

formatandinsert('sec12row12col1',timelog, keylog);
formatandinsert('sec12row12col2',timelog, keylog);
formatandinsert('sec12row12col3',timelog, keylog);
formatandinsert('sec12row12col4',timelog, keylog);
formatandinsert('sec12row12col5',timelog, keylog);
formatandinsert('sec12row12col6',timelog, keylog);
formatandinsert('sec12row12col7',timelog, keylog);
formatandinsert('sec12row12col8',timelog, keylog);
formatandinsert('sec12row12col9',timelog, keylog);
formatandinsert('sec12row12col10',timelog, keylog);
formatandinsert('sec12row12col11',timelog, keylog);
formatandinsert('sec12row12col12',timelog, keylog);
}
connectiondb.query( "insert into action_log" + " values('" + keylog + "','"  + timelog + "','"  + ip + "','"  + dataset.servername + "','"  + dataset.client +  "','Video - DB B')"
    , function(err, rows) {
});

logger.info("update ist_comments set comment = '" + dataset.sec12row1col14.replace(/'/g, '\\\''  ) + "', timelog='" + timelog + "', keylog='" + keylog + "' where client='" + dataset.client + "' and media='Video - DB B'");
connectiondb.query("update ist_comments set comment = '" + dataset.sec12row1col14.replace(/'/g, '\\\''  ) + "', timelog='" + timelog + "', keylog='" + keylog + "' where client='" + dataset.client + "' and media='Video - DB B'"
    , function(err, rows) {
});

};


if (dataset.sec13) {

    if (dataset.servertype == 'ps') {


formatandinsert('sec13row1col1',timelog, keylog);
formatandinsert('sec13row1col2',timelog, keylog);
formatandinsert('sec13row1col3',timelog, keylog);
formatandinsert('sec13row1col4',timelog, keylog);
formatandinsert('sec13row1col5',timelog, keylog);
formatandinsert('sec13row1col6',timelog, keylog);
formatandinsert('sec13row1col7',timelog, keylog);
formatandinsert('sec13row1col8',timelog, keylog);
formatandinsert('sec13row1col9',timelog, keylog);
formatandinsert('sec13row1col10',timelog, keylog);
formatandinsert('sec13row1col11',timelog, keylog);
formatandinsert('sec13row1col12',timelog, keylog);

formatandinsert('sec13row2col1',timelog, keylog);
formatandinsert('sec13row2col2',timelog, keylog);
formatandinsert('sec13row2col3',timelog, keylog);
formatandinsert('sec13row2col4',timelog, keylog);
formatandinsert('sec13row2col5',timelog, keylog);
formatandinsert('sec13row2col6',timelog, keylog);
formatandinsert('sec13row2col7',timelog, keylog);
formatandinsert('sec13row2col8',timelog, keylog);
formatandinsert('sec13row2col9',timelog, keylog);
formatandinsert('sec13row2col10',timelog, keylog);
formatandinsert('sec13row2col11',timelog, keylog);
formatandinsert('sec13row2col12',timelog, keylog);

}

if (dataset.servertype == 'master') {

formatandinsert('sec13row3col1',timelog, keylog);
formatandinsert('sec13row3col2',timelog, keylog);
formatandinsert('sec13row3col3',timelog, keylog);
formatandinsert('sec13row3col4',timelog, keylog);
formatandinsert('sec13row3col5',timelog, keylog);
formatandinsert('sec13row3col6',timelog, keylog);
formatandinsert('sec13row3col7',timelog, keylog);
formatandinsert('sec13row3col8',timelog, keylog);
formatandinsert('sec13row3col9',timelog, keylog);
formatandinsert('sec13row3col10',timelog, keylog);
formatandinsert('sec13row3col11',timelog, keylog);
formatandinsert('sec13row3col12',timelog, keylog);

formatandinsert('sec13row5col1',timelog, keylog);
formatandinsert('sec13row5col2',timelog, keylog);
formatandinsert('sec13row5col3',timelog, keylog);
formatandinsert('sec13row5col4',timelog, keylog);
formatandinsert('sec13row5col5',timelog, keylog);
formatandinsert('sec13row5col6',timelog, keylog);
formatandinsert('sec13row5col7',timelog, keylog);
formatandinsert('sec13row5col8',timelog, keylog);
formatandinsert('sec13row5col9',timelog, keylog);
formatandinsert('sec13row5col10',timelog, keylog);
formatandinsert('sec13row5col11',timelog, keylog);
formatandinsert('sec13row5col12',timelog, keylog);

formatandinsert('sec13row6col1',timelog, keylog);
formatandinsert('sec13row6col2',timelog, keylog);
formatandinsert('sec13row6col3',timelog, keylog);
formatandinsert('sec13row6col4',timelog, keylog);
formatandinsert('sec13row6col5',timelog, keylog);
formatandinsert('sec13row6col6',timelog, keylog);
formatandinsert('sec13row6col7',timelog, keylog);
formatandinsert('sec13row6col8',timelog, keylog);
formatandinsert('sec13row6col9',timelog, keylog);
formatandinsert('sec13row6col10',timelog, keylog);
formatandinsert('sec13row6col11',timelog, keylog);
formatandinsert('sec13row6col12',timelog, keylog);

formatandinsert('sec13row8col1',timelog, keylog);
formatandinsert('sec13row8col2',timelog, keylog);
formatandinsert('sec13row8col3',timelog, keylog);
formatandinsert('sec13row8col4',timelog, keylog);
formatandinsert('sec13row8col5',timelog, keylog);
formatandinsert('sec13row8col6',timelog, keylog);
formatandinsert('sec13row8col7',timelog, keylog);
formatandinsert('sec13row8col8',timelog, keylog);
formatandinsert('sec13row8col9',timelog, keylog);
formatandinsert('sec13row8col10',timelog, keylog);
formatandinsert('sec13row8col11',timelog, keylog);
formatandinsert('sec13row8col12',timelog, keylog);

formatandinsert('sec13row12col1',timelog, keylog);
formatandinsert('sec13row12col2',timelog, keylog);
formatandinsert('sec13row12col3',timelog, keylog);
formatandinsert('sec13row12col4',timelog, keylog);
formatandinsert('sec13row12col5',timelog, keylog);
formatandinsert('sec13row12col6',timelog, keylog);
formatandinsert('sec13row12col7',timelog, keylog);
formatandinsert('sec13row12col8',timelog, keylog);
formatandinsert('sec13row12col9',timelog, keylog);
formatandinsert('sec13row12col10',timelog, keylog);
formatandinsert('sec13row12col11',timelog, keylog);
formatandinsert('sec13row12col12',timelog, keylog);
}
connectiondb.query( "insert into action_log" + " values('" + keylog + "','"  + timelog + "','"  + ip + "','"  + dataset.servername + "','"  + dataset.client +  "','Mobile - DB B')"
    , function(err, rows) {
});

logger.info("update ist_comments set comment = '" + dataset.sec13row1col14.replace(/'/g, '\\\''  ) + "', timelog='" + timelog + "', keylog='" + keylog + "' where client='" + dataset.client + "' and media='Mobile - DB B'");
connectiondb.query("update ist_comments set comment = '" + dataset.sec13row1col14.replace(/'/g, '\\\''  ) + "', timelog='" + timelog + "', keylog='" + keylog + "' where client='" + dataset.client + "' and media='Mobile - DB B'"
    , function(err, rows) {
});

};


if (dataset.sec14) {

    if (dataset.servertype == 'ps') {


formatandinsert('sec14row1col1',timelog, keylog);
formatandinsert('sec14row1col2',timelog, keylog);
formatandinsert('sec14row1col3',timelog, keylog);
formatandinsert('sec14row1col4',timelog, keylog);
formatandinsert('sec14row1col5',timelog, keylog);
formatandinsert('sec14row1col6',timelog, keylog);
formatandinsert('sec14row1col7',timelog, keylog);
formatandinsert('sec14row1col8',timelog, keylog);
formatandinsert('sec14row1col9',timelog, keylog);
formatandinsert('sec14row1col10',timelog, keylog);
formatandinsert('sec14row1col11',timelog, keylog);
formatandinsert('sec14row1col12',timelog, keylog);

formatandinsert('sec14row2col1',timelog, keylog);
formatandinsert('sec14row2col2',timelog, keylog);
formatandinsert('sec14row2col3',timelog, keylog);
formatandinsert('sec14row2col4',timelog, keylog);
formatandinsert('sec14row2col5',timelog, keylog);
formatandinsert('sec14row2col6',timelog, keylog);
formatandinsert('sec14row2col7',timelog, keylog);
formatandinsert('sec14row2col8',timelog, keylog);
formatandinsert('sec14row2col9',timelog, keylog);
formatandinsert('sec14row2col10',timelog, keylog);
formatandinsert('sec14row2col11',timelog, keylog);
formatandinsert('sec14row2col12',timelog, keylog);

}

if (dataset.servertype == 'master') {

formatandinsert('sec14row3col1',timelog, keylog);
formatandinsert('sec14row3col2',timelog, keylog);
formatandinsert('sec14row3col3',timelog, keylog);
formatandinsert('sec14row3col4',timelog, keylog);
formatandinsert('sec14row3col5',timelog, keylog);
formatandinsert('sec14row3col6',timelog, keylog);
formatandinsert('sec14row3col7',timelog, keylog);
formatandinsert('sec14row3col8',timelog, keylog);
formatandinsert('sec14row3col9',timelog, keylog);
formatandinsert('sec14row3col10',timelog, keylog);
formatandinsert('sec14row3col11',timelog, keylog);
formatandinsert('sec14row3col12',timelog, keylog);

formatandinsert('sec14row5col1',timelog, keylog);
formatandinsert('sec14row5col2',timelog, keylog);
formatandinsert('sec14row5col3',timelog, keylog);
formatandinsert('sec14row5col4',timelog, keylog);
formatandinsert('sec14row5col5',timelog, keylog);
formatandinsert('sec14row5col6',timelog, keylog);
formatandinsert('sec14row5col7',timelog, keylog);
formatandinsert('sec14row5col8',timelog, keylog);
formatandinsert('sec14row5col9',timelog, keylog);
formatandinsert('sec14row5col10',timelog, keylog);
formatandinsert('sec14row5col11',timelog, keylog);
formatandinsert('sec14row5col12',timelog, keylog);

formatandinsert('sec14row6col1',timelog, keylog);
formatandinsert('sec14row6col2',timelog, keylog);
formatandinsert('sec14row6col3',timelog, keylog);
formatandinsert('sec14row6col4',timelog, keylog);
formatandinsert('sec14row6col5',timelog, keylog);
formatandinsert('sec14row6col6',timelog, keylog);
formatandinsert('sec14row6col7',timelog, keylog);
formatandinsert('sec14row6col8',timelog, keylog);
formatandinsert('sec14row6col9',timelog, keylog);
formatandinsert('sec14row6col10',timelog, keylog);
formatandinsert('sec14row6col11',timelog, keylog);
formatandinsert('sec14row6col12',timelog, keylog);

formatandinsert('sec14row8col1',timelog, keylog);
formatandinsert('sec14row8col2',timelog, keylog);
formatandinsert('sec14row8col3',timelog, keylog);
formatandinsert('sec14row8col4',timelog, keylog);
formatandinsert('sec14row8col5',timelog, keylog);
formatandinsert('sec14row8col6',timelog, keylog);
formatandinsert('sec14row8col7',timelog, keylog);
formatandinsert('sec14row8col8',timelog, keylog);
formatandinsert('sec14row8col9',timelog, keylog);
formatandinsert('sec14row8col10',timelog, keylog);
formatandinsert('sec14row8col11',timelog, keylog);
formatandinsert('sec14row8col12',timelog, keylog);

formatandinsert('sec14row12col1',timelog, keylog);
formatandinsert('sec14row12col2',timelog, keylog);
formatandinsert('sec14row12col3',timelog, keylog);
formatandinsert('sec14row12col4',timelog, keylog);
formatandinsert('sec14row12col5',timelog, keylog);
formatandinsert('sec14row12col6',timelog, keylog);
formatandinsert('sec14row12col7',timelog, keylog);
formatandinsert('sec14row12col8',timelog, keylog);
formatandinsert('sec14row12col9',timelog, keylog);
formatandinsert('sec14row12col10',timelog, keylog);
formatandinsert('sec14row12col11',timelog, keylog);
formatandinsert('sec14row12col12',timelog, keylog);
}
connectiondb.query( "insert into action_log" + " values('" + keylog + "','"  + timelog + "','"  + ip + "','"  + dataset.servername + "','"  + dataset.client +  "','Social - DB B')"
    , function(err, rows) {
});


logger.info("update ist_comments set comment = '" + dataset.sec14row1col14.replace(/'/g, '\\\''  ) + "', timelog='" + timelog + "', keylog='" + keylog + "' where client='" + dataset.client + "' and media='Social - DB B'");
connectiondb.query("update ist_comments set comment = '" + dataset.sec14row1col14.replace(/'/g, '\\\''  ) + "', timelog='" + timelog + "', keylog='" + keylog + "' where client='" + dataset.client + "' and media='Social - DB B'"
    , function(err, rows) {
});

};

//-----------------------------------------------------
}
}





// ----------------------------------------------
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: '@gmail.com',
        pass: ''
            }
    });
// ----------------------------------------------

// ----------------------------------------------
var mailOptions = {
        from: '@gmail.com', // sender address
        to: dataset.email, // list of receivers
        bcc: 'jason.zeng@A.com', // list of receivers
        subject: 'A Budget Submission: ' + dataset.servername+ ' | '+dataset.client , // Subject line
        html: 'This messages includes the Submission ID for your recent budget submission. This ID is required to makes changes to your submissions, including accidental or incorrect entries. <br><br> Your ID is ' + keylog 
    
    };
transporter.sendMail(mailOptions, function(error, info){
        if(error){
            return logger.info(error);
        }
        logger.info('Message sent: ' + info.response);

    });




}




//-----------------------------------------------------
mediatosql = function(value) {

var indexof = value.indexOf('row')
var valuecolumn = value.substring(3,indexof);
var datestamp;

switch (valuecolumn) {
    case '1':
        datestamp =  "Display RTB";
        break;
    case '2':
        datestamp =  "Video - C Select";
        break;
    case '3':
        datestamp =  "Video - C Prime";
        break;
    case '4':
        datestamp =  "Mobile RTB";
        break;
    case '5':
        datestamp =  "Social RTB";
        break;
    case '6':
        datestamp =  "TV";
        break;
    case '7':
        datestamp =  "Display - DB A";
        break;
    case '8':
        datestamp =  "Video - DB A";
        break;
    case '9':
        datestamp =  "Mobile - DB A";
        break;
    case '10':
        datestamp =  "Social - DB A";
        break;
    case '11':
        datestamp =  "Display - DB B";
        break;
    case '12':
        datestamp =  "Video - DB B";
        break;
    case '13':
        datestamp =  "Mobile - DB B";
        break;
    case '14':
        datestamp =  "Social - DB B";
        break;

}
return datestamp
}
//-----------------------------------------------------




//-----------------------------------------------------
tabletosql = function(value) {

var tablevalue = value.substring(value.indexOf('row')+3,value.indexOf('col'));
var tablereturn;

switch (tablevalue) {
    case '1':
        tablereturn =  "ist_grossps";
        break;
    case '2':
        tablereturn =  "ist_holdoutps";
        break;
    case '3':
        tablereturn =  "ist_cadfee";
        break;
    case '5':
        tablereturn =  "ist_adjbill";
        break;
    case '6':
        tablereturn =  "ist_adjcadfee";
        break;
    case '8':
        tablereturn =  "ist_adjrev";
        break;
    case '12':
        tablereturn =  "ist_adjother";
        break;

   

}
return tablereturn
}
//-----------------------------------------------------



//-----------------------------------------------------
fintypetosql = function(value) {

var valuecolumn = value.substring(4,5);
var fintype;

switch (valuecolumn) {
    case 'a':
        fintype =  "Gross";
        break;
    case 'b':
        fintype =  "Holdout";
        break;
   

}
return fintype
}
//-----------------------------------------------------



//-----------------------------------------------------
getamount = function(value) {

var amountval = dataset[value]

return amountval
}
//-----------------------------------------------------

monthtosql = function(value) {

var indexof = value.indexOf('col')+3
var valuecolumn = value.substring(indexof)
var datestamp;

switch (valuecolumn) {
    case '1':
        datestamp =  "2016-01-01";
        break;
    case '2':
        datestamp =  "2016-02-01";
        break;
    case '3':
        datestamp =  "2016-03-01";
        break;
    case '4':
        datestamp =  "2016-04-01";
        break;
    case '5':
        datestamp =  "2016-05-01";
        break;
    case '6':
        datestamp =  "2016-06-01";
        break;
    case '7':
        datestamp =  "2016-07-01";
        break;
    case '8':
        datestamp =  "2016-08-01";
        break;
    case '9':
        datestamp =  "2016-09-01";
        break;
    case '10':
        datestamp =  "2016-10-01";
        break;
    case '11':
        datestamp =  "2016-11-01";
        break;
    case '12':
        datestamp =  "2016-12-01";
        break;
}
return datestamp
}




//-----------------------------------------------------
formatandinsert = function(cellname, timelog, keylog) {

console.log('Database Functions:')

var fintype;
var mos;
var media;
var client;
var amount;
var dbtable;


client = dataset.client;
mos = monthtosql(cellname);
amount = unnan(getamount(cellname));
media = mediatosql(cellname);
fintype = ""
dbtable = tabletosql(cellname)

console.log('With Data: | ' + fintype + ' | ' + mos + ' | ' +  media + ' | ' +  client + ' | ' +  amount + ' | ' +  dbtable)


// querystring1 = "delete from " + dbtable + " where mos='" + mos +"' and media='" +media +"' and client='" + client + "'"

// querystring = "insert into " + dbtable + " values('" + fintype + "','" + mos + "','" + media + "','" + client + "','" + amount + "','" + timelog + "','" + keylog + "')"

querystring2 = "update " + dbtable + " set amount=" + amount + ", timelog='" + timelog + "', keylog='" + keylog + "' where client='" + client + "' and mos='" + mos + "' and media = '" + media + "'"; 

logger.info('UPDATE STRING: ' + querystring2)



connectiondb.query(querystring2
    , function(err, rows) {
})




// connectiondb.query(querystring1
//     , function(err, rows) {
// })

// logger.info('delete string: ' + querystring1)


// connectiondb.query(querystring
//     , function(err, rows) {
// })


// logger.info('insert string: ' + querystring)

}
