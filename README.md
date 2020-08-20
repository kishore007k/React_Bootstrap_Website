# React Website:

<img src='https://user-images.githubusercontent.com/34863222/90806847-392c4680-e33b-11ea-88e1-1671f6156595.gif' alt='project-img' width='600' align='center' />
<br>

## Dependencies Used in this Project:

- ### bootstrap: 4.5.2
- ### react: 16.13.1
- ### react-bootstrap: 1.3.0
- ### react-dom: 16.13.1
- ### react-router-dom: 5.2.0
- ### react-scripts: 3.4.3
- ### styled-components: 5.1.1

## Styled-Components:

```javascript
import styled from 'styled-components';

const Styles = styled.div`
	.navbar {
		background-color: #222;
	}

	.navbar-toggler-icon {
		background-color: grey;
		border-radius: 5px;
	}

	a,
	.navbar-brand,
	.navbar-nav .nav-link {
		color: #fff;

		&:hover {
			color: white;
		}
	}
`;
```

In this way u can create your own custom CSS Component using the Styled Components.

## Code structure:

```javascript
import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NoMatch from './components/NoMatch';
import Layout from './components/Layout';
import NavigationBar from './components/NavigationBar';
import Jumbotron from './components/Jumbotron';

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Jumbotron />
      <Layout>
        <Router>
          <Switch>
            <Route exact path ='/' component={Home} />
            <Route exact path ='/about' component={About} />
            <Route exact path ='/contact' component={Contact} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
```

## No-Match:

If you entered a wrong link or if the link is not available then the React will redirect you to the NoMatch page.

```html
<div>
  <h2>No Match</h2>
</div>
```

## Install all the Dependencies:

### `npm install`

This will install the dependencies for you. You can also check all the dependencies in the *package.json* file.

Once the installation is finished `$ cd React_Bootstrap_Website` into the folder.

## Run the Website:

### `npm start`

This will start the website in the *localhost:5000*