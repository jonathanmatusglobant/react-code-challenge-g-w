# React Challenges

## Create a Counter but with a twist

Creating a basic counter with a button that increments the displayed value by 1 is a simple task. But with some added conditions, the same task can become tough. 

Suppose, we have a component, which contains a state variable (declared using the useState React hook) that tracks the value for the counter. The value is also displayed in this component, but the button that increments the value is present in the child component of this component. 

Find the possible ways to solve this problem. It can be solved using one of the following ways.

Using global state created with Redux  
Using render props.
Using React context

## Add and Delete Items From the List

In this challenge, the developer has to create an input field with a button.

When the button is clicked, the text in the input field should be added below in a list. Moreover, whenever any list item is clicked, it should be removed from the list.

## Displaying Data Coming From an API

In this coding challenge, you will be provided with an API that will return some data, maybe, an array of objects. You have to display the data in the UI.

The main motive here is to check how and where the API is called by the developer. In React, there are two ways to call APIs.

Axios
fetch API

While fetch API is inbuilt, Axios is installed through NPM and is considered a better option. So first, install Axios using npm and then use the following API to fetch the data.

API: https://jsonplaceholder.typicode.com/posts/1/comments

> EXTRA BONUS COMBINE THE THREE SOLUTIONS IN ONE SINGLE APP

