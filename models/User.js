const bcrypt = require('bcryptjs');
const fs = require('fs');
const path = require('path');

// Path to the JSON file for user storage
const USERS_FILE = path.join(__dirname, '../data/users.json');

// Ensure data directory exists
const DATA_DIR = path.join(__dirname, '../data');
if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
}

// Load users from JSON file
function loadUsers() {
    try {
        if (fs.existsSync(USERS_FILE)) {
            const data = fs.readFileSync(USERS_FILE, 'utf8');
            return JSON.parse(data);
        }
    } catch (error) {
        console.error('Error loading users:', error);
    }
    return [];
}

// Save users to JSON file
function saveUsers(users) {
    try {
        fs.writeFileSync(USERS_FILE, JSON.stringify(users, null, 2), 'utf8');
    } catch (error) {
        console.error('Error saving users:', error);
    }
}

// Initialize users array from file
let users = loadUsers();

class User {
    constructor(username, email, password) {
        this.id = Date.now().toString();
        this.username = username;
        this.email = email;
        this.password = password;
    }

    static async create(username, email, password) {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User(username, email, hashedPassword);
        users.push(user);
        saveUsers(users); // Save to file
        return user;
    }

    static async findByEmail(email) {
        return users.find(user => user.email === email);
    }

    static async findById(id) {
        return users.find(user => user.id === id);
    }

    async comparePassword(password) {
        return await bcrypt.compare(password, this.password);
    }
}

module.exports = User;

