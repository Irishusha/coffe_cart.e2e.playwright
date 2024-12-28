# Automated Tests for Coffee Cart App

This repository contains automated tests for the [Coffee Cart App]
(https://coffee-cart.app), designed to validate its functionality and ensure reliability across various scenarios. 

The tests are written using [Playwright](https://playwright.dev/), a robust end-to-end testing framework.

## Features

- **End-to-End Tests**: Validate the user flows such as adding items to the cart, navigating the homepage, and interacting with promo features.

## Project Structure
```
project-root/
├── tests/
│   ├── e2e/                 # end-to-end Tests
│   │   ├── cart.spec.ts     # Tests for shopping cart
│   │   ├── homepage.spec.ts # Tests for home page
│   │   ├── checkout.spec.ts # Tests for checkout page
│   │   └── promo.spec.ts    # Tests for promo
│   ├── api/                 # Here can be API tests
│   ├── utils/               # Support functions and utilities
│       └── helpers.ts
├── page-objects/            # Page Object Model
│   ├── cart-page.ts
│   ├── homepage.ts
│   └── promo-page.ts
├── config/                  # Config files
│   └── test-data.ts         # Test data
├── playwright-report/       # Reports after running tests
└── README.md                # Information about project 
```
### Key Folders

1. **tests/**: Contains all test cases organized into subcategories
   - e2e/: End-to-end tests that simulate user interactions
   - api/: API tests 
   - utils/: Helper functions for common test operations

2. **page-objects/**: Implements the Page Object Model (POM) pattern, encapsulating page-specific operations

3. **config/**: 
   - test-data.ts: Test data

4. **playwright-report/**: Reports after running tests

---

## Getting Started

1. Install [Node.js](https://nodejs.org/)

2. Install dependencies:
   npm install

3. Running Tests
To execute all tests, run: 
                           npx playwright test
To run a specific test file: 
                           npx playwright test tests/e2e/cart.spec.ts
To run tests with tag: 
                           npx playwright test --grep @checkout 

4.Viewing Reports: npx playwright show-report


## **Naming Conventions for Tests**

We follow a specific naming convention for our tests to ensure clarity and traceability. 
Each test name follows this format:

CCART - <test number> <test description>


- **CCART**: Prefix denoting the project.
- **<test number>**: A unique, sequential number assigned to the test(or from TMS).
- **<test description>**: A brief, descriptive title summarizing the test's purpose.

### **Example**
- `CCART - 005 Removing ALL cups from the Shopping cart`

This convention ensures that tests are easily identifiable and organized.

Note! On the folder tests/unit are Unit tests for function(just for record)

The last tests for Coffee Cart App is CCART - 015

