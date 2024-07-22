# React Router Usage Guide

This repository demonstrates how to use React Router for handling routing in a React application. Below is a guide covering various concepts and utilities from React Router, including their definitions.

## Core Concepts

### BrowserRouter

**Definition:** `BrowserRouter` is a high-level component that uses the HTML5 history API to keep your UI in sync with the URL. It provides the routing context to the entire application.

### Routes and Route

**Definition:** `Routes` is a container for all your route definitions. `Route` defines individual routes and their corresponding components.

### Link

**Definition:** `Link` is used to navigate to different routes in the application without causing a page reload.

### Outlet

**Definition:** `Outlet` is used to render child routes of a parent route. It acts as a placeholder for nested routes.

### useParams

**Definition:** `useParams` is a hook that returns an object containing the route parameters. It allows you to access the dynamic segments of the URL.

### useLocation

**Definition:** `useLocation` is a hook that returns the current location object, which includes properties like `pathname`, `search`, and `state`.

### useNavigate

**Definition:** `useNavigate` is a hook that provides a function to programmatically navigate to different routes.

### createBrowserRouter

**Definition:** `createBrowserRouter` is used to create a router configuration for the application using an array of route objects.

### createRoutesFromElements

**Definition:** `createRoutesFromElements` converts JSX elements representing routes into route configurations.

### RouterProvider

**Definition:** `RouterProvider` is used to provide the router configuration to your application.

### Nested Routing

**Definition:** Nested routing allows you to define routes within other routes. Child routes are rendered inside the parent route’s `Outlet`.

### Dynamic Routing

**Definition:** Dynamic routing involves using route parameters to render different components based on the URL.

### Error Handling

**Definition:** Error handling can be implemented using custom routes or components that handle errors or display a not-found page.

## Installation

To use React Router in your project, you need to install it via npm or yarn:

```bash
npm install react-router-dom
# or
yarn add react-router-dom
