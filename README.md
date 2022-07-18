# Original repository

Sourced from:

https://github.com/SchoolOfCode/project-front-end-thefullstackfive

Ammendments have been made.

# Run the project

Firstly, make sure to do a correct npm install, to install all the packages .etc

Then run the project as follows:

`npm start`

# Packages used

```
npm install --save react-s3  
npm install --save react-modal-hook
npm i catenary-curve
npm i react-canvas-draw
npm i react-bootstrap
npm install -S react-router-bootstrap
npm i semantic-ui-react
npm i use-callback-ref
npm i react-transition-group
npm install react-onclickoutside --save
npm i @material-ui/core
npm install --save react-modal
npm install --save react-modal-hook
```

# homework object

Example:

```javascript
  {
    name: `English - Conjunctions`,
    image: `${host}eng.PNG`,
    dateSet: `September 14th, 2020`,
    dateDue: `Wednesday`,
    comment:
      `Complete each sentence using the correct conjunction. Make sure to read the sentences carefully as you will be using them in class later this week.`,
    children: [...children],
  }
```

# child object ( children / classroom )

Example:

```javascript
  {
    name: "Amelia",
    avatar: `${host}1.png`,
    individualHomeworkImage: null,
    annotation: null,
    comment: null
}
```
# Backend

Connecting to a remote Heroku deployment of the backend. Note, this slows down data retrieval somewhat.

The URL is below:

https://homelearn-hut.herokuapp.com/homework/

The code for the backend is found at:

https://github.com/ParadigmZero/HomeLearnHutBackend

or

https://github.com/SchoolOfCode/project-back-end-thefullstackfive

# Environmental variables for AWS S3 upload

You will need to input the following environmental variables into a .env file ( root directory).

These relate to an Amazon AWS S3 bucket. For security reasons these cannot be given.

(Place them after the = sign )

```
REACT_APP_domainId=
REACT_APP_clientCode=
REACT_APP_BUCKETNAME=
REACT_APP_REGION=
REACT_APP_ACCESS_KEY_ID=
REACT_APP_SECRET_ACCESS_KEY=
```
