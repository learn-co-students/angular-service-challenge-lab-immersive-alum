# Service Challenge

## Objectives

- Write a new Service to fetch data from an API
- Write another new Service to fetch more data from an API
- Display the fetched data from both Services inside the View

## Instructions

Run `npm install`, and then run `node server.js` to start up a local server on port 8080.

Create a service named `SubRedditService`. This will be used to get data from the reddit API.

This should have a method named `getData`, accepting the subreddit name as a paramater. This should use `$http` to make a request to `http://localhost:8080/rest/subreddit/javascript` - replacing `javascript` with the actual subreddit name. Display this data in the view.

Create another service named `DomainService`. This will be used to find all the posts on reddit for a certain domain.

This will use the endpoint `http://localhost:8080/rest/domain/google.co.uk`, replacing `google.co.uk` with the domain. Create the appropriate method, and then query the API and display it in the view.
