import express from "express";
import mysql from "mysql";
import bodyParser from "body-parser";
import cors from 'cors'
import bcrypt from 'bcrypt';


const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    port: "3306",
    password: "password",
    database: "my_database"
});


db.connect((err) => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database.');
});

// get operation

app.get('/', (req, res) => {
    const sql = "SELECT * FROM employee";
    db.query(sql, (err, result) => {
        if (err) return res.json({ message: err });
        return res.json(result);
    });
});

// put operation

app.put('/employee/:EmpID', (req, res) => {
    const { EmpID } = req.params;
    const { EmpName, EmpAge, EmpDept } = req.body;

    if (!EmpName || !EmpAge || !EmpDept) {
        return res.status(400).json({ message: 'Missing fields in request body' });
    }

    const sql = "UPDATE employee SET EmpName = ?, EmpAge = ?, EmpDept = ? WHERE EmpID = ?";
    db.query(sql, [EmpName, EmpAge, EmpDept, EmpID], (err, result) => {
        if (err) {
            console.error(err);
            return res.json({ message: err });
        }
        return res.json({ message: 'Employee updated successfully', result });
    });
});

//post operation

// app.post('/employee', (req, res) => {
//     const { EmpName, EmpAge, EmpDept } = req.body;
//     if (!EmpName || !EmpAge || !EmpDept) {
//         return res.status(400).json({ message: 'All fields (EmpName, EmpAge, EmpDept) are required' });
//     }
    
//     const sql = "INSERT INTO employee (EmpName, EmpAge, EmpDept) VALUES (?, ?, ?)";
//     db.query(sql, [EmpName, EmpAge, EmpDept], (err, result) => {
//         if (err) {
//             console.error(err);
//             return res.json({ message: err });
//         }
//         return res.json({ message: 'Employee added successfully', result });
//     });
// });

app.post('/employee', (req, res) => {
    const { EmpName, EmpAge, EmpDept } = req.body;
    // if (!EmpName || !EmpAge || !EmpDept) {
    //     return res.status(400).json({ message: 'All fields (EmpName, EmpAge, EmpDept) are required' });
    // }

    // Check if EmpName already exists
    const checkSql = "SELECT * FROM employee WHERE EmpName = ?";
    db.query(checkSql, [EmpName], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: 'Database error' });
        }
        if (result.length > 0) {
            return res.status(409).json({ message: 'Employee name already exists' });
        }

        // If EmpName does not exist, insert the new employee
        const insertSql = "INSERT INTO employee (EmpName, EmpAge, EmpDept) VALUES (?, ?, ?)";
        db.query(insertSql, [EmpName, EmpAge, EmpDept], (err, result) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ message: 'Database error' });
            }
            return res.status(201).json({ message: 'Employee added successfully', result });
        });
    });
});

// login page 

// app.post('/signin', (req, res) => {
//     const { username, password } = req.body;
//     // Authenticate user
//     res.send({ message: 'Sign In successful' });
//   });
// Signup Route
app.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const sql = "INSERT INTO signup (username, email, password) VALUES (?, ?, ?)";
    db.query(sql, [username, email, hashedPassword], (err, result) => {
        if (err) {
            console.error(err);
            if (err.code === 'ER_DUP_ENTRY') {
                return res.status(400).json({ success: false, message: 'Username or email already exists' });
            } else {
                return res.status(500).json({ success: false, message: 'Database error' });
            }
        }
        return res.status(201).json({ success: true, message: 'User registered successfully' });
    });
});

// Signin Route
app.post('/signin', async (req, res) => {
    const { username, password } = req.body;
    const sql = "SELECT * FROM signup WHERE username = ?";
    db.query(sql, [username], async (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ success: false, message: 'Database error' });
        }
        if (result.length === 0) {
            return res.status(401).json({ success: false, message: 'User not found' });
        }
        
        const user = result[0];
        if (await bcrypt.compare(password, user.password)) {
            return res.json({ success: true, message: 'Signin successful' });
        } else {
            return res.status(401).json({ success: false, message: 'Invalid password' });
        }
    });
});

//delete opeartion


app.delete('/employee/:EmpID', (req, res) => {
    const { EmpID } = req.params;
    const sql = "DELETE FROM employee WHERE EmpID = ?";
    db.query(sql, [EmpID], (err, result) => {
        if (err) return res.json({ message: err });
        return res.json({ message: 'Employee deleted successfully', result });
    });
});


app.listen(3000, () => {
    console.log("hello from backend");
});
