import express from "express";
import mysql from "mysql";
import bodyParser from "body-parser";
import cors from 'cors';
import bcrypt from 'bcrypt';
import multer from 'multer';
import path from 'path'; // Import the 'path' module
import fs from 'fs'; // Import the 'fs' module for file system operations

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/uploads', express.static('uploads'));


// Ensure the 'uploads' directory exists
const uploadDir = 'uploads';
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

// Multer configuration for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir); // Destination folder for uploaded files
    },
    filename: function (req, file, cb) {
        // File naming (you can customize this as needed)
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5 } // Limit file size to 5MB, adjust as needed
});

// Database connection
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

// Get all employees
app.get('/', (req, res) => {
    const sql = "SELECT * FROM employee";
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Error fetching employees:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        return res.json(result);
    });
});

// Get employee by ID
app.get('/employee/:ID', (req, res) => {
    const { ID } = req.params;
    const sql = "SELECT * FROM employee WHERE ID = ?";
    db.query(sql, [ID], (err, result) => {
        if (err) {
            console.error('Error fetching employee:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }
        if (result.length === 0) return res.status(404).json({ message: 'Employee not found' });
        return res.json(result[0]);
    });
});

// Add new employee with file upload
app.post('/employee', upload.single('Photo'), (req, res) => {
    try {
        const { Name, Age, Dept, MobileNumber ,Role} = req.body;
        const Photo = req.file ? req.file.filename : null;

        if (!Name || !Age || !Dept || !MobileNumber ||!Role || !Photo) {
            console.error('Missing fields:', { Name, Age, Dept, MobileNumber, Photo });
            return res.status(400).json({ message: 'Missing fields in request body' });
        }

        const checkSql = "SELECT * FROM employee WHERE Name = ?";
        db.query(checkSql, [Name], (err, result) => {
            if (err) {
                console.error('Error checking employee:', err);
                return res.status(500).json({ message: 'Database error' });
            }
            if (result.length > 0) {
                console.error('Employee name already exists:', Name);
                return res.status(409).json({ message: 'Employee name already exists' });
            }

            const insertSql = "INSERT INTO employee (Name, Age, Dept, MobileNumber,Role, Photo) VALUES (?, ?, ?, ?, ?, ?)";
            db.query(insertSql, [Name, Age, Dept, MobileNumber,Role, Photo], (err, result) => {
                if (err) {
                    console.error('Error inserting employee:', err);
                    return res.status(500).json({ message: 'Database error' });
                }
                console.log('Employee added successfully:', result);
                return res.status(201).json({ message: 'Employee added successfully', result });
            });
        });
    } catch (error) {
        console.error('Error handling request:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

// Sign up route
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

// Sign in route
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

// Delete employee
app.delete('/employee/:ID', (req, res) => {
    const { ID } = req.params;
    const sql = "DELETE FROM employee WHERE ID = ?";
    db.query(sql, [ID], (err, result) => {
        if (err) {
            console.error('Error deleting employee:', err);
            return res.status(500).json({ message: 'Database error' });
        }
        return res.json({ message: 'Employee deleted successfully', result });
    });
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
