## Project Directory

src - folder where we put all the source code we write
public - contains different static files, like images
node_modules - folder that contains all of our project dependencies
package.json - records our project dependencies and configures our project
package-lock.json - records the exact version of packages that we install
README.md - instructions on how to use this project

---

import React from 'react';

- import: we want to get code from some other file or dependency
- React: The variable we wnt to assign this import to, this is renamable
- from: We are about to specify the name of the library or file we are importing from
- 'react': the name of the dependency or path to the file we are importing

---

## Components

- Component is a Function or Class that produces HTML to show the user(JSX) and handles feedback from the user(using event handlers)

## JSX

- Dialect of JS used in React
- Browsers don't understand JSX code, run code through babel to turn into normal JS

## Concepts

- Componenet Nesting: A component can be shown inside of another
- Component Resuability: We want to make components that can be easily reused through out application
- Component Configuration: We should be able to configure a component when it is created
