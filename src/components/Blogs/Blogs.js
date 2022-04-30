import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div>
      <div>
        <h2>Qus-1) Difference between javascript and nodejs?</h2>
        <p>
          Ans: Javascript is a programming language that is used for writing
          scripts on a website.Javascript can only be run in the browsers.It is
          basically used on the client-side.Javascript is capable enough to add
          HTML and play with the DOM. Javascript is used in frontend
          development.
        </p>
        <p>
          NodeJS is a Javascript runtime environment.We can run Javascript
          outside the browser with the help of NodeJS.It is mostly used on the
          server-side.Nodejs does not have capability to add HTML tags.V8 is the
          Javascript engine inside of node.js that parses and runs Javascript.
          Nodejs is used in server-side development.be imported from npm. Nodejs
          is written in C, C++, and Javascript.
        </p>

        <h2>
          Qus-2) When should you use nodejs and when should you use mongodb?
        </h2>

        <p>
          Ans: Node. js is primarily used for non-blocking, event-driven
          servers, due to its single-threaded nature. It's used for traditional
          websites and back-end API services but was designed with real-time,
          push-based architectures in mind.
        </p>

        <p>
          Ans: MongoDB is an open-source document database built on a horizontal
          scale-out architecture that uses a flexible schema for storing data.
          Founded in 2007, MongoDB has a worldwide following in the developer
          community. Instead of storing data in tables of rows or columns like
          SQL databases, each record in a MongoDB database is a document
          described in BSON, a binary representation of the data. Applications
          can then retrieve this information in a JSON format.
        </p>
        <h2>Qus-3)  What is the purpose of jwt and how does it work?</h2>
        <p>
            Ans: JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
        </p>
        <p>Client login with username and password.Server creates a token for the client.And server send a token to the client</p>
      </div>

      <h2>Qus-4) Differences between sql and nosql databases.</h2>
      <p></p>
    </div>
  );
};

export default Blogs;
