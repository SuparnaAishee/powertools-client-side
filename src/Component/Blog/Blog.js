import React from 'react';

const Blog = () => {
    return (
        <div className='m-20'>
            <div className='border-4 p-4 border-green-500'>
                <h1><b>Ques: </b> How will you improve the performance of a React Application? </h1>
                <p><b>Ans:
                    if Optimizing performance in a React application if keeped component state local where necessary. Memoizing React components to prevent unnecessary re-renders. React using dynamic import
                </b></p>
            </div>



            <div className='border-4 p-4 mt-3 border-green-500'>
                <h1><b>Ques: </b> What are the different ways to manage a state in a React application? </h1>
                <p><b>Ans: There are four main types of state you need to properly manage in your React apps:   Local state , Global state,  Server state,  URL state.   </b></p>
            </div>

            <div className='border-4 p-4 mt-3 border-green-500'>
                <h1><b>Ques: </b> How does prototypical inheritance work? </h1>
                <p><b>Ans: Everything in Javascript is an object. Even when creating a Class is an Object via an Object Literal or Constructor Function. This is how Javascript does class-based programming as to other traditional Object-Oriented Programming languages where they use the keyword ‘class’ and ‘inheritance’. So, the core idea of Prototypal Inheritance is that an object can point to another object and inherit all its properties. The main purpose is to allow multiple instances of an object to share common properties, hence, the Singleton Pattern.
                    Below is a sample code with comments and caption to better see how it works:
                    After going through the code, its best to read further about Prototypal Inheritance from mozilla doc. Code example below is just one of many ways of implementing Prototypal Inheritance.  </b></p>
            </div>


            <div className='border-4 p-4 mt-3 border-green-500'>
                <h1><b>Ques: </b>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts  </h1>
                <p><b>Ans:   </b></p>
            </div>

            <div className='border-4 p-4 mt-3 border-green-500'>
                <h1><b>Ques: </b>  You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name? </h1>
                <p><b>Ans:     </b></p>
            </div>


            <div className='border-4 p-4 mt-3 border-green-500'>
                <h1><b>Ques: </b> What is a unit test? Why should write unit tests? </h1>
                <p><b>Ans:Unit tests are typically automated tests written and run by software developers to ensure that a section of an application (known as the "unit") meets its design and behaves as intended. In procedural programming, a unit could be an entire module, but it is more commonly an individual function or procedure   </b></p>
            </div>





        </div>
    );
};

export default Blog;