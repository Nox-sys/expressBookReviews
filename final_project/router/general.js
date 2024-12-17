const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();

books = {
    "1": {
        "author" : "Miguel De Cervantes",
        "title" : "Don Quixote",
        "review" : "{}"
    },
    "2": {
        "author" : "Homer",
        "title" : "Iliad",
        "review" : "{}"
    },
    "3": {
        "author" : "Dante Alighieri",
        "title" : "Paradiso",
        "review" : "{}"
    },
    "4": {
        "author" : "Mark Twain",
        "title" : "Adventures of Huckleberry Finn",
        "review" : "{}"
    },
    "5": {
        "author" : "Victor Hugo",
        "title" : "Les Miserables",
        "review" : "{}"
    },
    "6": {
        "author" : "Alexandre Dumas",
        "title" : "The Count of Monte Cristo",
        "review" : "{}"
    },
};

booksbyauthor = {
    "Miguel De Cervantes": {
        "isbn" : "1",
        "title" : "Don Quixote",
        "review" : "{}"
    },
    "Homer": {
        "isbn" : "2",
        "title" : "Iliad",
        "review" : "{}"
    },
    "Dante Alighieri": {
        "isbn" : "3",
        "title" : "Paradiso",
        "review" : "{}"
    },
    "Mark Twain": {
        "isbn" : "4",
        "title" : "Adventures of Huckleberry Finn",
        "review" : "{}"
    },
    "Victor Hugo": {
        "isbn" : "5",
        "title" : "Les Miserables",
        "review" : "{}"
    },
    "Alexandre Dumas": {
        "isbn" : "6",
        "title" : "The Count of Monte Cristo",
        "review" : "{}"
    },
};

booksbytitle = {
    "Don Quixote": {
        "isbn" : "1",
        "author" : "Miguel De Cervantes",
        "review" : "{}"
    },
    "Iliad": {
        "isbn" : "2",
        "author" : "Homer",
        "review" : "{}"
    },
    "Paradiso": {
        "isbn" : "3",
        "author" : "Dante Alighieri",
        "review" : "{}"
    },
    "Adventures of Huckleberry Finn": {
        "isbn" : "4",
        "author" : "Mark Twain",
        "review" : "{}"
    },
    "Les Miserables": {
        "isbn" : "5",
        "author" : "Victor Hugo",
        "review" : "{}"
    },
    "The Count of Monte Cristo": {
        "isbn" : "6",
        "author" : "Alexandre Dumas",
        "review" : "{}"
    },
};

public_users.post("/register", (req,res) => {
  //Write your code here
  users.push({
    "username": req.query.username,
    "password": req.query.password
  });
  res.send("The user " + req.query.username + " has been added!");
});

// Get the book list available in the shop
public_users.get('/',function (req, res) {
  //Write your code here
  res.send(books);
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res){
  //Write your code here
  const isbn = req.params.isbn;
  res.send(books[isbn]);
  return res.status(300).json({message: "Yet to be implemented"});
 });
  
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Write your code here
  const author = req.params.author;
  res.send(booksbyauthor[author]);
  return res.status(300).json({message: "Yet to be implemented"});
});

// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
  const title = req.params.title;
  res.send(booksbytitle[title]);
  return res.status(300).json({message: "Yet to be implemented"});
});

//  Get book review
public_users.get('/review/:isbn',function (req, res) {
  //Write your code here
  const isbn = req.params.isbn;
  res.send(books[review]);
  return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.general = public_users;
