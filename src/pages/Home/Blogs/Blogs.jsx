import React from 'react';
import useTitle from '../../../hook/useTitle';
const Blogs = () => {
    useTitle('Blogs')
    return (
        <div>
            <div>
                <div className="hero rounded" style={{ backgroundImage: `url("https://i.ibb.co/WcgLLgD/slider3.jpg")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-5xl font-bold py-10">Toy Land Blogs</h1>
                        </div>
                    </div>
                </div>
                <div className='w-full border-2 border-base-200 p-4 md:p-12  text-justify'>
                    <div className='w-11/12 mx-auto space-y-7'>
                        <h1 className='font-bold text-2xl'><span className='font-extrabold'>Q: </span>What is an access token and refresh token? How do they work and where should we store them on the client-side?</h1>
                        <p className='text-gray-500'><span className='font-bold'>Answer: </span>Access Token: An access token is a credential that is issued to a client by an authentication server after the client successfully authenticates the user. The client authenticates the user with their credentials (e.g., username and password). The access token is returned to the client, which includes it in the headers of subsequent requests to protected resources or APIs.<br /> Refresh Token: A refresh token is also issued alongside the access token by the authentication server. Its purpose is to obtain a new access token when the current one expires, without requiring the user to reauthenticate. The authentication server verifies the credentials and, if valid, generates an access token and a refresh token.</p>
                    </div>
                    <div className='w-11/12 mx-auto space-y-7 my-12'>
                        <h1 className='font-bold text-2xl'><span className='font-extrabold'>Q: </span>Compare SQL and NoSQL databases?</h1>
                        <p className='text-gray-500'><span className='font-bold'>Answer: </span>SQL: SQL databases use a structured data model based on tables with predefined schemas. They enforce rigid data consistency and relationships between tables through foreign key constraints. SQL databases are vertically scalable, which means they can handle increased workload by upgrading hardware resources like CPU, RAM, or disk space. Scaling vertically has limitations. <br/> NoSQL databases employ a flexible, schema-less data model. They can store unstructured or semi-structured data in various formats like key-value pairs, documents, graphs, or wide-column stores. NoSQL databases are horizontally scalable, allowing distribution of data across multiple servers. They can handle high traffic loads by adding more machines to the database cluster.</p>
                    </div>
                    <div className='w-11/12 mx-auto space-y-7 my-12'>
                        <h1 className='font-bold text-2xl'><span className='font-extrabold'>Q: </span>What is express js? What is Nest JS?</h1>
                        <p className='text-gray-500'><span className='font-bold'>Answer: </span>Express.js: Express.js is a popular web application framework for Node.js. It provides a minimalist, flexible, and unopinionated approach to building web applications and APIs. Express.js simplifies the process of handling HTTP requests, routing, middleware management, and response generation. <br/> NestJS: NestJS is a framework for building scalable and efficient server-side applications. It is built with TypeScript and is heavily inspired by Angulars architecture and syntax. NestJS provides a solid foundation for developing Node.js applications with a modular and organized structure. It promotes the use of decorators, modules, services, and controllers to create a scalable and maintainable codebase.</p>
                    </div>
                    <div className='w-11/12 mx-auto space-y-7 my-12'>
                        <h1 className='font-bold text-2xl'><span className='font-extrabold'>Q: </span>What is MongoDB aggregate and how does it work?</h1>
                        <p className='text-gray-500'><span className='font-bold'>Answer: </span>In MongoDB, the aggregate method is used to perform advanced data aggregation operations on collections. It allows you to process and transform data using a pipeline of multiple stages. The aggregate pipeline consists of several stages that define the sequence of operations to be executed on the data.<br/> MongoDB is a NoSQL database that stores data in a flexible, schema-less format called documents, which are organized into collections. It utilizes a distributed architecture that enables horizontal scaling by distributing data across multiple servers. MongoDB stores data in a binary JSON-like format called BSON, allowing it to efficiently handle complex and nested data structures. It supports flexible querying and indexing, allowing for fast and efficient retrieval of data. </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blogs;