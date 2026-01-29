🔹 STEP 1: Launch EC2 Instance

Choose:

AMI: Amazon Linux 2 / AL2023

Instance type: t2.micro (free tier)

Security Group – OPEN PORTS

SSH → 22

HTTP → 80 (optional)

Custom TCP → 3000 (Node app)

🔹 STEP 2: Connect to EC2

🔹 STEP 3: Install Node.js on EC2

curl -fsSL https://rpm.nodesource.com/setup_20.x | sudo bash -
sudo yum install -y nodejs

🔹 STEP 4: Upload Your Project to EC2

git clone https://github.com/NetTech-Trainer/nodeapp.git
cd nodeapp
🔹 STEP 5: Install Dependencies

Inside project folder:
npm install

🔹 STEP 6: Configure Database Connection

Edit config/db.js:

const sequelize = new Sequelize("mydb", "root", "root123", {
  host: "localhost",
  dialect: "mysql"
});

🔹 STEP 7: Create MySQL Database & Table

mysql -u root -p

CREATE DATABASE mydb;
USE mydb;

CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(150),
  age INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

🔹 STEP 8: Start Node.js App
node app.js





