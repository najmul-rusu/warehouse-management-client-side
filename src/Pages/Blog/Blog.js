import React from 'react';
import './Blog.css'

const Blog = () => {
    return (
        <div className='qna'>
            <h2 className='qna-titel'>Question and Answer</h2>
            <h3>Why are you using firebase? What other options do you have to implement authentication?</h3>
            <p>Firebase manages all the data in the database in real time. Thus, exchanging data from database is easy and fast. So, if you want to create mobile apps like live streaming, chat messaging, etc., you can use Firebase.</p>
            <p>One of the most important aspects of website authentication is the focus on user and human-to-computer interaction. As a result, user authentication is important to understand when creating or improving your website's login system.

                Whether you want to increase your internal security, increase customer acquisition, or provide a better user experience for people exploring your site, it's important to know how it fits into the user authentication equation.
            </p>

            <h3>What other services does firebase provide other than authentication?</h3>

            <p>The goal of every developer is to create great apps. If you're a developer, we're here to explore some of Firebase's best alternatives to take your mobile app development to new heights.


                Firebase continues to innovate and dominate the backend as a service (BaaS) market. It has grown so much that it has become an integral part of Google's mobile strategy. I've been a passionate Firebase user in the past, but my concern about its complexity and cost led me to explore other cloud options.
            </p>

            <h3>Difference between javascript and node js</h3>
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Javascript</th>
                            <th>Node js</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Javascript is a programming language that is used for writing scripts on the website.</td>
                            <td>NodeJS is a Javascript runtime environment.</td>
                        </tr>
                        <tr>
                            <td>Javascript can only be run in the browsers.</td>
                            <td>We can run Javascript outside the browser with the help of NodeJS.</td>
                        </tr>
                        <tr>
                            <td>Javascript is capable enough to add HTML and play with the DOM.</td>
                            <td>Nodejs does not have capability to add HTML tags.</td>
                        </tr>
                        <tr>
                            <td>Javascript can run in any browser engine as like JS core in safari and Spidermonkey in Firefox.</td>
                            <td>V8 is the Javascript engine inside of node.js that parses and runs Javascript.</td>
                        </tr>
                    </tbody>
                    <tfoot>

                    </tfoot>
                </table>
            </div>
        </div>
    );
};

export default Blog;