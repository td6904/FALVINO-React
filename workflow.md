# Notes

Still need to separate CSS out of Index.css for Burger button, maybe Main page too.

----------

Next step, routing!

I want to start coding the FALVINO site in react. Will use this as a guide.

### Routing

// Import the necessary libraries and components
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </Router>
  );
}

export default App;

### Help from ChatGPT
If you want to build a website for your band from scratch using a programming language, here are some steps to follow:

1. Choose a programming language and framework: Some popular choices include JavaScript, PHP, Ruby on Rails, and Django (Python). Consider your familiarity with the language and framework, as well as their suitability for building a website.

2. Plan your website: Determine the website's purpose, the features you want to include, and the information you want to provide to your audience.

3. Design your website: Create a mockup of your website's layout and design. Use a tool like Adobe XD or Sketch to create a design prototype.

4. Develop your website: Write your website's code using your chosen programming language and framework. Consider using a web development framework like React, Angular, or Vue.js to make the development process faster and more efficient.

5. Add security features: Make sure to add security features such as SSL certificates, password protection, and firewalls to ensure your website is secure.

6. Test your website: Test your website for functionality, usability, and performance. Consider using testing frameworks like Jest, Mocha, or Selenium to automate your tests.

7. Deploy your website: Deploy your website to a hosting provider like AWS, Google Cloud, or Heroku.

Building a website from scratch requires a higher level of technical expertise and can take longer to develop than using a website builder platform. However, it gives you complete control over the design, features, and functionality of your website.

### and converting it to React thereafter:

Converting a static HTML page to a React app involves several steps, and the ease of the process depends on the complexity of the HTML page and your familiarity with React.

Here are the general steps to follow when converting a static HTML page to a React app:

1. Set up the React environment: Install Node.js and create a new React project using a tool like Create React App.

2. Convert the HTML markup: Copy the HTML markup from the static page into the React app's index.html file.

3. Split the HTML into components: Split the HTML into smaller components and convert them into React components. This involves breaking down the HTML code into reusable components, such as the header, navigation bar, footer, and main content area.

4. Refactor the CSS styles: Refactor the CSS styles into React components using CSS-in-JS libraries like Styled Components, Emotion, or CSS Modules.

5. Convert the JavaScript logic: Convert any JavaScript code in the HTML file into React components and use React state and props to manage the component's data and behavior.

6. Test the React app: Test the React app to ensure it behaves as expected and fix any errors or bugs.

The ease of converting a static HTML page to a React app depends on your familiarity with React and the complexity of the HTML page. If the HTML page is simple and does not have many interactive components, the process of converting it to React may be relatively straightforward. However, if the HTML page is complex and has many interactive components, the conversion process may be more challenging and time-consuming.

# Facebook API setup

To show Facebook event info on your band's React webpage, you can use the Facebook Graph API to retrieve the event data and display it on your website. Here are the general steps to follow:

Create a Facebook app: First, you need to create a Facebook app and obtain an access token to make API calls. To create an app, go to the Facebook Developers website and follow the instructions to create a new app.

Get event data: Once you have obtained an access token, you can use the Facebook Graph API to retrieve event data. To get event data, you can make a GET request to the following endpoint: /page_id/events. Replace page_id with your band's Facebook Page ID. You can get the Page ID by visiting your band's Facebook Page and checking the URL.

Display the event data: Once you have retrieved the event data, you can display it on your React webpage. You can use any React component or library to display the data in a visually appealing way. For example, you could create a custom component that displays the event date, time, location, and description.

Here is some sample code to get you started:

javascript
Copy code
import React, { useState, useEffect } from 'react';

function EventList({ pageId }) {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://graph.facebook.com/${pageId}/events?access_token=${process.env.FB_ACCESS_TOKEN}`);
      const data = await response.json();
      setEvents(data.data);
    };
    fetchData();
  }, [pageId]);

  return (
    <div>
      <h2>Upcoming Events:</h2>
      {events.map((event) => (
        <div key={event.id}>
          <h3>{event.name}</h3>
          <p>{event.description}</p>
          <p>{event.start_time}</p>
          <p>{event.place.name}</p>
        </div>
      ))}
    </div>
  );
}

export default EventList;
In this example, the EventList component retrieves the event data from the Facebook Graph API and displays it in a list format. The useEffect hook is used to fetch the data when the component mounts, and the useState hook is used to store the events array. You can customize this code to fit your specific use case and design.



IF IT DOESN'T WORK - THERE IS A FACEBOOK APP PLUGIN THAT I CAN INTEGRATE INTO PAGE.

-------------------------------------------------------------

# Test for API connection 

## Test 1

import React, { useState, useEffect } from "react";

function EventList({ pageId }) {
  const [profileName, setProfileName] = useState("");

  useEffect(() => {
    const fetchProfileData = async () => {
      const response = await fetch(
        `https://graph.facebook.com/${pageId}?fields=name&access_token=${process.env.REACT_APP_FB_ACCESS_TOKEN}`
      );
      const data = await response.json();
      setProfileName(data.name);
    };
    fetchProfileData();
  }, [pageId]);

  return (
    <div>
      <h2>Profile Name</h2>
      <p>{profileName}</p>
    </div>
  );
}

export default EventList;

## Test 2

