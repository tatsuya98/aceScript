# AceScript

AceScript is a web application that allows users to solve coding challenges at varying difficulty.

## Introduction

AceScript was built by me and my team as the final project of our software development bootcamp. Our goal was to explore new frameworks and libraries, exposing ourselves to a variety of technologies and improving our ability to look up documentation independently. 

For this project, we decided to use **Next.js** for the frontend, **Tailwind CSS** for styling, and **MongoDB** as a non-relational NoSQL database. My team—**Claudio Lupo**, **Nathan Bailey**, **Abdullah Ismail**, **Sam Mainzer**, and myself—came up with the idea of creating a web application to assist junior developers.

The core functionality of AceScript allows users to solve coding challenges at varying levels of difficulty. What you're seeing here is our Minimum Viable Product (MVP). On the landing page, you'll find a "Coming Soon" section that outlines potential ideas for expanding and further developing the project, given more time.

# demoing the site:
username: bob123 password: 123456

## Running the Application Locally

Follow the steps below to set up and run the application on your local machine.

### 1. Clone the Repository

Clone the repository using the following link:
```bash
git clone https://github.com/Garyismatic/AceScript.git
```
Once cloned, open the directory in your preferred code editor and navigate to the root directory:
```bash
cd root-dir
```
### 2. Install Dependencies

In the root directory, install all necessary dependencies by running the following command:
```bash
npm install
```
### 3. Set Up MongoDB

You will need to set up a MongoDB database. You can do this for free by following these steps:

Create an account on MongoDB.
After logging in, create a new project.
Set up a new cluster using the free tier (M0).
MongoDB will provide you with a connection string and a password for your cluster.

### 4. Configure Environment Variables

In the root directory **root-dir**, create a .env file and add the following environment variable:

MONGODB_DEV_URI=<your_connection_string>

Replace <your_connection_string> with the connection string provided by MongoDB, making sure it includes your password.

### 5. Seed the Database

After configuring your environment variables, you can seed the database by running the following command:
```bash
npm run seed
```
### 6. Run the Application

To run the application, use the command:
```bash
npm run dev
```
Once the server is running, open your browser and navigate to http://localhost:3000. Any users you create will be uploaded to your MongoDB database.

### 7. Have Fun!

You should now be able to use the application locally. Enjoy and good luck solving our challenges!

