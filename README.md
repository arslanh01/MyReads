# MyReads Project

This is the the MyReads project for Udacity's React Nanodegree. This project has been develop using the following concepts:

- State Management
- Hooks
- Routing

## Quickstart

To get this project up andrunning:

- Navigate to `MyReads/starter`
- install all project dependencies with `npm install`
- start the development server with `npm start`

## Backend Server

A backend server has already been made and all of the required methods are defied in the `BooksAPI.js` file.

- [`getAll`](#getall)
- [`update`](#update)
- [`search`](#search)

### `getAll`

Method Signature:

```js
getAll();
```

- Returns a Promise which resolves to a JSON object containing a collection of book objects.
- This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf);
```

- book: `<Object>` containing at minimum an `id` attribute
- shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]
- Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query);
```

- query: `<String>`
- Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
- These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Features

### Shelves

All the books show up on their own shelves in the start on the main page.

### Move between Shelves

These books can move between the shelves. If a different shelf is selected from the dropdown button next to the book, the book removes from the current shelf and places in the new shelf.

### Search

We can search for books from the search page.

### Add to collection

After searching, we can add a book to any of the shelves if it is not already in the collection. If it is already in the collection, we can change its shelf by selecting a new shelf from the dropdown.
