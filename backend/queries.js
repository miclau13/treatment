const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  ssl: {
    rejectUnauthorized: true,
  },
});
const format = require('pg-format');

var formidable = require('formidable'), fs = require('fs');
const csv = require('csv-parse');
const stringify = require('csv-stringify');

const getUsersByFirstName = (req, response) => {
  const firstName = req.query.firstname;
  pool.query(`SELECT * FROM public.ref_firstnames WHERE label like '${firstName}%' ORDER BY label ASC `, (error, results) => {
    if (error) {
      console.error("error", error)
      throw error
    }
    response.status(200).json(results.rows)
  })
};

const uploadFile = (req, res) => {
  let form = new formidable.IncomingForm();
  let firstNameList = [];
  let incomingData = [];
  form.parse(req, function(err, fields, files) {
    fs.createReadStream(files.file.path)
      .pipe(csv({delimiter: ';'}))
      .on('data', function(data){
          try {
            //perform the operation
            incomingData.push(data);
            firstNameList.push(`'${data[1].toUpperCase()}'`);
          }
          catch(err) {
              //error handler
          }
      })
      .on('end',function(){
          const firstNameSearchList = `(${firstNameList})`;
          pool.query(`SELECT label, gender FROM public.ref_firstnames WHERE UPPER(label) IN ${firstNameSearchList} ORDER BY label ASC `, (error, results) => {
            if (error) {
              console.error("error", error)
              throw error
            }
            let firstNameMap = new Map([]);
            results.rows.map(result => {
              firstNameMap.set(result.label, result.gender == 1 ? "Mr." : "Ms.")
            });
            
            const records = incomingData.slice(1).map((item, index) => {
              if (firstNameMap.get(item[1])) {
                return { 
                  id: item[0], 
                  firstname: item[1], 
                  lastname: item[2],
                  new_firstname: item[1],
                  new_lastname: item[2],
                  name: `${firstNameMap.get(item[1])} ${item[1]} ${item[2]}`
                }
              } else if (firstNameMap.get(item[2])) {
                return { 
                  id: item[0], 
                  firstname: item[1], 
                  lastname: item[2],
                  new_firstname: item[2],
                  new_lastname: item[1],
                  name: `${firstNameMap.get(item[2])} ${item[2]} ${item[1]}`
                }
              } else {
                return { 
                  id: item[0], 
                  firstname: item[1], 
                  lastname: item[2],
                  new_firstname: "",
                  new_lastname: item[2],
                  name: ""
                }
              };
            }).filter(Boolean);
            const columns = [
              'id',
              'firstname',
              'lastname',
              'new_firstname',
              'new_lastname',
              'name',
            ];
            stringify(records, { header: true, columns: columns })
            .pipe(res)
          })
      });  
  });
};

const importData = (req, res) => {
  let form = new formidable.IncomingForm();
  let incomingData = [];
  form.parse(req, function(err, fields, files) {
    fs.createReadStream(files.file.path)
      .pipe(csv({delimiter: ';'}))
      .on('data', function(data){
          try {
            //perform the operation
            incomingData.push(data);
          }
          catch(err) {
              //error handler
          }
      })
      .on('end',function() {
        const values = incomingData.slice(1).map(data => {
          let type = -1, gender = -1;
          if (data[1] == "M") {
            type = 1;
            gender = 1;
          } else if (data[1] == "F") {
            type = 2;
            gender = 2;
          } else if (data[1] == "M,F") {
            type = 0;
            gender = 1;
          } else {
            type = 0;
            gender = 2;
          }
          return [data[0], type, gender, data[2]]
        })
        let query = format('INSERT INTO public.ref_firstnames (label, type, gender, origin) VALUES %L returning id', values);
        res.status(200)
          pool.query(query, (error, results) => {
            if (error) {
              console.error("error", error)
              throw error
            } 
          })
      });  
  });
};

module.exports = {
  getUsersByFirstName,
  uploadFile,
  importData
}