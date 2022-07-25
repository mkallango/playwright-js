# Playwright-JS

Test POC with Playwright

-----

## Requirements

* Nodejs ^15.4.0
* Playwright (installed with npm install command)
* dayjs (installed with npm install command)
* path (installed with npm install command)

-----
Task: implement web UI auto test for ticket search
To do:

* Navigate to  https://www.aviasales.com/
* Enable Night Theme
* For FROM field set NEW York, Kennedy airport
* For TO field set Berlin
* For DATE field set July, 30 
* No returning ticket
* Passengers – 2
* Click search flight

* Assert that:
  * New search page is opened
  * All previous data is displayed on the new page

-----

### Test structure

* The page_objects folder contains the scripts that map the elements and take some actions on these.
  * Main Page is the first page where we are searching data
  * Book Page is the page after return data from search
* The tests folder contains the script with the test case

-----

### Configure project

* To configure the project run the following command:
```sh
npm install
```

* To configure which browser to run, modify the property config.projects at file **_playwright.config.js_**.

-----

### Run tests

To run the test cases you can use the following commands:

```sh
npm test
```
or
```sh
npx playwright test
```
------

### Show tests report

To show the test cases result Report you can use the following commands:

```sh
npm run report
```
or
```sh
npx playwright show-report
```
-----

### Debug tests

To run test cases in Debug mode you can use the following commands:

```sh
npm run debug
```
or
```sh
npx playwright test --debug
```
-----
