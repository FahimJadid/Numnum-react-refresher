### React Episode Six Notes

# React Food Ordering Application :

# Q&A:

- # Q: Microservices vs. monolithic architecture:

  - Ans: "When monoliths grow too big it may be time to transition to microservices"

  A monolithic application is built as a single unified unit while a microservices architecture is a collection of smaller, independently deployable services. Which one is right for you? It depends on a number of factors.

  In 2009 Netflix faced growing pains. Its infrastructure couldn’t keep up with the demand for its rapidly growing video streaming services. The company decided to migrate its IT infrastructure from its private data centers to a public cloud and replace its monolithic architecture with a microservices architecture. The only problem was, the term “microservices” didn’t exist and the structure wasn’t well-known.

  Netflix became one of the first high-profile companies to successfully migrate from a monolith to a cloud-based microservices architecture. It won the 2015 JAX Special Jury award in part due to this new infrastructure that internalized DevOps. Today, Netflix has more than a thousand microservices that manage and support separate parts of the platform, while its engineers deploy code frequently, sometimes thousands of times each day.

  Netflix was an early pioneer in what has become increasingly common today: transitioning from a monolith architecture to a microservices architecture.

- # Q: What is a monolithic architecture?

  - Ans: A monolithic architecture is a traditional model of a software program, which is built as a unified unit that is self-contained and independent from other applications. The word “monolith” is often attributed to something large and glacial, which isn’t far from the truth of a monolith architecture for software design. A monolithic architecture is a singular, large computing network with one code base that couples all of the business concerns together. To make a change to this sort of application requires updating the entire stack by accessing the code base and building and deploying an updated version of the service-side interface. This makes updates restrictive and time-consuming.

  Monoliths can be convenient early on in a project's life for ease of code management, cognitive overhead, and deployment. This allows everything in the monolith to be released at once.

  ![Alt text](image.png)

- # Q: Advantages of a monolithic architecture:

  - Ans: Organizations can benefit from either a monolithic or microservices architecture, depending on a number of different factors. When developing using a monolithic architecture, the primary advantage is fast development speed due to the simplicity of having an application based on one code base.

  `The advantages of a monolithic architecture include:`

  `Easy deployment` – One executable file or directory makes deployment easier.

  `Development` – When an application is built with one code base, it is easier to develop.

  `Performance` – In a centralized code base and repository, one API can often perform the same function that numerous APIs perform with microservices.

  `Simplified testing` – Since a monolithic application is a single, centralized unit, end-to-end testing can be performed faster than with a distributed application.

  `Easy debugging` – With all code located in one place, it’s easier to follow a request and find an issue.

- # Q: Disadvantages of a monolithic architecture:

  - Ans:
    As with the case of Netflix, monolithic applications can be quite effective until they grow too large and scaling becomes a challenge. Making a small change in a single function requires compiling and testing the entire platform, which goes against the agile approach today’s developers favor.

  `The disadvantages of a monolith include:`

  `Slower development speed` – A large, monolithic application makes development more complex and slower.

  `Scalability` – You can’t scale individual components.

  `Reliability` – If there’s an error in any module, it could affect the entire application’s availability.

  `Barrier to technology adoption` – Any changes in the framework or language affects the entire application, making changes often expensive and time-consuming.

  `Lack of flexibility` – A monolith is constrained by the technologies already used in the monolith.

  `Deployment` – A small change to a monolithic application requires the redeployment of the entire monolith.

- # Q: What is a microservices architecture?

  - Ans: A microservices architecture, also simply known as microservices, is an architectural method that relies on a series of independently deployable services. These services have their own business logic and database with a specific goal. Updating, testing, deployment, and scaling occur within each service. Microservices decouple major business, domain-specific concerns into separate, independent code bases. Microservices don’t reduce complexity, but they make any complexity visible and more manageable by separating tasks into smaller processes that function independently of each other and contribute to the overall whole.

  Adopting microservices often goes hand in hand with DevOps, since they are the basis for continuous delivery practices that allow teams to adapt quickly to user requirements.

  ![Alt text](image-1.png)

- # Q: Advantages of a microservices architecture:

  - Ans: Microservices are by no means a silver bullet, but they solve a number of problems for growing software and companies. Since a microservices architecture consists of units that run independently, each service can be developed, updated, deployed, and scaled without affecting the other services. Software updates can be performed more frequently, with improved reliability, uptime, and performance. We went from pushing updates once a week, to two to three times a day.

  The benefits includes increased deployment speed, disaster recovery, reduced cost, and higher performance. This allows us to get to our target faster while delivering more incremental value to customers along the way.

  Plus, more generally, microservices make it easier for teams to update code and accelerate release cycles with continuous integration and continuous delivery (CI/CD). Teams can experiment with code and roll back if something goes wrong.

  `In short, the advantages of microservices are: `

  `Agility` – Promote agile ways of working with small teams that deploy frequently.

  `Flexible scaling` – If a microservice reaches its load capacity, new instances of that service can rapidly be deployed to the accompanying cluster to help relieve pressure. We are now multi-tenanant and stateless with customers spread across multiple instances. Now we can support much larger instance sizes.

  `Continuous deployment` – We now have frequent and faster release cycles. Before we would push out updates once a week and now we can do so about two to three times a day.

  `Highly maintainable and testable` – Teams can experiment with new features and roll back if something doesn’t work. This makes it easier to update code and accelerates time-to-market for new features. Plus, it is easy to isolate and fix faults and bugs in individual services.

  `Independently deployable` – Since microservices are individual units they allow for fast and easy independent deployment of individual features.

  `Technology flexibility` – Microservice architectures allow teams the freedom to select the tools they desire.

  `High reliability` – You can deploy changes for a specific service, without the threat of bringing down the entire application.

- # Q: Disadvantages of a microservices architecture:

  - Ans:
    When we moved from a small number of monolithic codebases to many more distributed systems and services powering our products, unintended complexity arose. We initially struggled to add new capabilities with the same velocity and confidence as we had done in the past. Microservices can add increased complexity that leads to development sprawl, or rapid and unmanaged growth. It can be challenging to determine how different components relate to each other, who owns a particular software component, or how to avoid interfering with dependent components.

  `The disadvantages of microservices can include:`

  `Development sprawl` – Microservices add more complexity compared to a monolith architecture, since there are more services in more places created by multiple teams. If development sprawl isn’t properly managed, it results in slower development speed and poor operational performance.

  `Exponential infrastructure costs` – Each new microservice can have its own cost for test suite, deployment playbooks, hosting infrastructure, monitoring tools, and more.

  `Added organizational overhead` – Teams need to add another level of communication and collaboration to coordinate updates and interfaces.

  `Debugging challenges` – Each microservice has its own set of logs, which makes debugging more complicated. Plus, a single business process can run across multiple machines, further complicating debugging.

  `Lack of standardization` – Without a common platform, there can be a proliferation of languages, logging standards, and monitoring.

  `Lack of clear ownership` – As more services are introduced, so are the number of teams running those services. Over time it becomes difficult to know the available services a team can leverage and who to contact for support.

  ![Alt text](image-2.png)

- # Q: What's the difference between monolithic and microservices architecture?

  - Ans:

  A monolithic architecture is a traditional software development model that uses one code base to perform multiple business functions. All the software components in a monolithic system are interdependent due to the data exchange mechanisms within the system. It’s restrictive and time-consuming to modify monolithic architecture as small changes impact large areas of the code base. In contrast, microservices are an architectural approach that composes software into small independent components or services. Each service performs a single function and communicates with other services through a well-defined interface. Because they run independently, you can update, modify, deploy, or scale each service as required.

  `Key differences: monolithic vs. microservices:`

  Monolithic applications typically consist of a client-side UI, a database, and a server-side application. Developers build all of these modules on a single code base.

  On the other hand, in a distributed architecture, each microservice works to accomplish a single feature or business logic. Instead of exchanging data within the same code base, microservices communicate with an API.

  ![Alt text](image-3.png)

- # Q: What is a microservices architecture?

  - Ans:

  Microservices help you innovate faster, reduce risk, accelerate time to market, and decrease your total cost of ownership. Here’s a summary of operational benefits of microservice architecture.

  `Innovate faster`
  Monolithic architecture limits an organization's ability to introduce new business capabilities and technologies in existing applications. Developers cannot rebuild certain parts of the code base with new technological frameworks, which delays your organization in adopting modern technological trends.

  Meanwhile, microservices are independent software components that developers can build with different frameworks and software technologies. The loose coupling between microservices allows businesses to innovate certain components more quickly.

  `Reduce risks`
  Both monolithic and microservices applications experience code conflict, bugs, and unsuccessful updates. However, a monolithic application carries a more significant risk when developers release new updates, as the entire application presents a single point of failure. A minor error in the code base can cause the whole application to fail. Such incidents have the potential to cause severe service outages and affect all active users.

  As such, developers prefer building microservices applications to mitigate deployment risks. If a microservice fails, other microservices remain operational, which limits the impact on the application. Developers also use tools to preempt and fix issues impacting microservices to improve the application's recoverability.

  `Accelerate time to market`
  Software development effort for monolithic applications increases exponentially as code complexity grows. Eventually, developers have to spend more time to manage and cross-reference code files and libraries at the cost of building new features. When you develop with a rigid infrastructure, it creates delays to the anticipated timeline.

  Conversely, organizations with microservices expertise can build and release digital products faster. In a distributed software architecture, each developer focuses on a smaller chunk of code instead of a large one. When developers create a specific microservice, they don't need to understand how other microservices work. They only need to use the appropriate APIs, which are faster and easier to learn.

  `Reduce total cost of ownership`
  Both microservices and monolithic applications incur expenses during development, deployment, and maintenance. However, the microservice approach is more cost-effective in the long term.

  You can scale microservice applications horizontally by adding compute resources on demand. You only have to add resources for the individual service, not the entire application. To scale monolithic systems, companies must upgrade memory and processing power for the application as a whole, which is more expensive.

  Besides infrastructure costs, the expenses of maintaining monolithic applications also increase with evolving requirements. For example, sometimes developers must run legacy monolithic software on newer hardware. This requires custom knowledge, and developers must rebuild the application so that it remains operational. Meanwhile, microservices run independently of specific hardware and platforms, which saves organizations from costly upgrades.

- # Q: When to use monolithic vs. microservices architecture

  - Ans:
    Both monolithic and microservices architecture help developers to build applications with different approaches. It's important to understand that microservices don't reduce the complexity of an application. Instead, the microservices structure reveals underlying complexities and allows developers to build, manage, and scale large applications more efficiently.

  When you decide between developing a microservices or monolithic architecture, you can consider the following factors.

  `Application size`
  The monolithic approach is more suitable when designing a simple application or prototype. Because monolithic applications use a single code base and framework, developers can build the software without integrating multiple services. Microservice applications may require substantial time and design effort, which doesn't justify the cost and benefit of very small projects.

  Meanwhile, microservices architecture is better for building a complex system. It provides a robust programming foundation for your team and supports their ability to add more features flexibly. For example, Netflix uses AWS Lambda to scale its streaming infrastructure and save development time.

  `Team competency`
  Despite its flexibility, developing with microservices requires a different knowledge set and design thinking. Unlike monolithic applications, microservices development needs an understanding of cloud architecture, APIs, containerization, and other expertise specific to modern cloud applications. Furthermore, troubleshooting microservices may be challenging for developers new to the distributed architecture.

  `Infrastructure`
  A monolithic application runs on a single server, but microservices applications benefit more from the cloud environment. While it's possible to run microservices from a single server, developers typically host microservices with cloud service providers to help ensure scalability, fault tolerance, and high availability.

  You need the right infrastructure in place before you can start with microservices. You require more effort to set up the tools and workflow for microservices, but they are preferable for building a complex and scalable application.

- # Q: Summary of differences: monolithic vs. microservices:

  | Category     | Monolithic architecture                                                                                           | Microservices architecture                                                                                                                                           |
  | ------------ | ----------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | Design       | Single code base with multiple interdependent functions.                                                          | Independent software components with autonomous functionality that communicate with each other using APIs.                                                           |
  | Development  | Requires less planning at the start, but gets increasingly complex to understand and maintain.                    | Requires more planning and infrastructure at the start, but gets easier to manage and maintain over time.                                                            |
  | Deployment   | Entire application deployed as a single entity.                                                                   | Every microservice is an independent software entity that requires individual containerized deployment.                                                              |
  | Debugging    | Trace the code path in the same environment.                                                                      | Requires advanced debugging tools to trace the data exchange between multiple microservices.                                                                         |
  | Modification | Small changes introduce greater risks as they impact the entire code base.                                        | You can modify individual microservices without impacting the entire application.                                                                                    |
  | Scale        | You have to scale the entire application, even if only certain functional areas experience an increase in demand. | You can scale individual microservices as required, which saves overall scaling costs.                                                                               |
  | Investment   | Low upfront investment at the cost of increased ongoing and maintenance efforts.                                  | Additional time and cost investment to set up the required infrastructure and build team competency. However, long-term cost savings, maintenance, and adaptability. |

- # Q: What is Shimmer UI?

  - Ans: A better way to show loading states is to use a shimmer UI. A shimmer UI is a version of the UI that doesn’t contain actual content, but instead mimics the layout and shapes of the content that will eventually appear. It uses a gradient animation that creates a shimmering effect over the placeholders, giving the user a sense of motion and progress.

  `A shimmer UI has many benefits over traditional loading indicators:`

  - It improves the perceived performance of the app by making it seem faster and more responsive.
  - It reduces the cognitive load on the user by providing visual cues about the type and structure of the content that is being loaded.
  - It eliminates surprises and confusion by showing a consistent and predictable UI before and after loading.
  - It enhances the aesthetic appeal and user satisfaction by creating a smooth and elegant transition from loading to loaded.

### Building the app with Real API Data:

# Page Loads => Render => Fetch Data/API call => Render

- In react when the page loads it renders the page and then it fetches the data from the API and then it renders the data. Benefits of this is that the page loads faster and then the data is rendered. The user experience is better because the user doesn't have to wait for the data to load.

- In previous episode we used useState hook. But in this episode we are going to use useEffect hook to fetch the data from the API and then render it.

# step 1: Introduction to useEffect hook:

- useEffect hook is used to fetch the data from the API and then render it. It is used to perform side effects in functional components. It is a function that takes two arguments. First argument is a function and second argument is an array. The function is called when the component is rendered. The array is used to specify the dependencies. If the array is empty then the function is called only once when the component is rendered. If the array is not empty then the function is called when the component is rendered and when the dependencies change.

- Let's use it in the Body component of our app. To use hooks we need to import it from react. We need to get familiar with the syntax

  ```js
  import { useState, useEffect } from "react";

  useEffect(() => {
    console.log("useEffect is called");
  }, []);
  ```

- So when the Body component is rendered the useEffect function is called. As soon as the render cycle is completed the useEffect function will call the callback function. The callback function will console log the message. The second argument is an empty array which is called dependency array. So the callback function will be called only once when the component is rendered. This is how the useEffect hook works. So whenever you want to do something after rendering the component you can write it inside the useEffect hook.

- So for test if i put a console log outside the useEffect hook and then i go to the browser and refresh the page. what should be in the console first? The console log outside the useEffect should be first and then the console log inside the useEffect should be called.

- So now we are going to fetch the data from the API and then render it.

```js
useEffect(() => {
  fetchData();
}, []);

const fetchData = async () => {
  const data = await fetch(
    "https://www.zomato.com/webroutes/getPage?page_url=/kolkata/restaurants?place_name=College+Street&dishv2_id=30308&location=&isMobile=1"
  );
  const json = await data.json();
  console.log(json);
};
```

- We have created a function called fetchData. Inside the function we are fetching the data from the API. We are using the fetch method to fetch the data. We are using the await keyword to wait for the data to be fetched. Then we are converting the data into json format. Then we are console logging the json data. Now we need to call the fetchData function inside the useEffect hook. So when the component is rendered the fetchData function will be called and it will fetch the data from the API and then it will console log the data.

- Now we want to update the UI with the fetched data from the API instead of using the fixed data. We want to render our component with the new data.

- So i need to put my new data in the listOfRestaurants array. So when my listOfRestaurants updates react will re-render the component with the new data automatically.

- updated code:

```js
import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import resList from "./../Utils/mockData";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(resList);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.zomato.com/webroutes/getPage?page_url=/kolkata/restaurants?place_name=College+Street&dishv2_id=30308&location=&isMobile=1"
        // "https://www.zomato.com/webroutes/getPage?page_url=/kolkata/must-visit-restaurants&location=&isMobile=1"
        // "https://www.zomato.com/webroutes/search/kolkata"
        // "https://www.zomato.com/webroutes/getPage?page_url=/kolkata/order-food-online?delivery_subzone=1400"
        // "https://www.zomato.com/webroutes/getPage?page_url=/kolkata/"
        // "https://www.zomato.com/webroutes/search/autoSuggest?addressId=0&entityId=2&entityType=city&locationType=&isOrderLocation=1&cityId=2&latitude=22.5726460000000000&longitude=88.3638950000000000&userDefinedLatitude=22.572646&userDefinedLongitude=88.363895&entityName=Kolkata&orderLocationName=Kolkata&cityName=Kolkata&countryId=1&countryName=India&displayTitle=Kolkata&o2Serviceable=true&placeId=1400&cellId=4180033504081346560&deliverySubzoneId=1400&placeType=DSZ&placeName=Kolkata&isO2City=true&fetchFromGoogle=false&fetchedFromCookie=true&&isO2OnlyCity=false&addressBlocker=0&&otherRestaurantsUrl=&q=resta&context=&searchMetadata={}"
      );
      const json = await data.json();
      if (
        json &&
        json.page_data &&
        json.page_data.sections &&
        json.page_data.sections.SECTION_SEARCH_RESULT
      ) {
        setListOfRestaurants(json.page_data.sections.SECTION_SEARCH_RESULT);
        // console.log(
        //   "First restaurant's resId:",
        //   json.page_data.sections.SECTION_SEARCH_RESULT[0]?.info?.resId
        // );
      } else {
        console.error("Invalid data structure in the fetched data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="body">
      <div className="filter">
        <button
          onClick={() => {
            const filteredResList = listOfRestaurants.filter((res) => {
              return Number(res?.info?.rating?.aggregate_rating) >= 4.2;
            });
            setListOfRestaurants(filteredResList);
          }}
          className="filter-btn"
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants?.map((restaurant) => {
          const resId = restaurant?.info?.resId;
          if (resId) {
            return <RestaurantCard key={resId} resData={restaurant} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Body;
```

- Now let's discuss what we have done in our updated code and how we did it:
- We have imported the useState and useEffect hooks from react. We have imported the mock data from the Utils folder for the first render to show something to the user. We have created a state called listOfRestaurants and we have set the initial value of the state to the mock data.
- We have created a useEffect hook. Inside the useEffect hook we have created a function called fetchData. Inside the fetchData function we are fetching the data from the API. We are using the fetch method to fetch the data. We are using the await keyword to wait for the data to be fetched.
- Then we are converting the data into json format. Then we are console logging the json data.
- Now we need to call the fetchData function inside the useEffect hook. So when the component is rendered the fetchData function will be called and it will fetch the data from the API.
- We have created a try catch block to handle the error. We have used the if statement to check if the data is valid. If the data is valid then we are setting the listOfRestaurants state to the fetched data. We are using the setListOfRestaurants function to set the listOfRestaurants state.
- We are using the json.page_data.sections.SECTION_SEARCH_RESULT to get the data from the API.
- We are using the else statement to console log the error if the data is invalid. We are using the catch block to console log the error if the data is invalid.
- We are using the return statement to return the data from the API. We are using the map method to map through the data.
- We are using the if statement to check if the resId is valid. If the resId is valid then we are returning the RestaurantCard component.
- We are passing the resId as a key and the restaurant data as a prop to the RestaurantCard component. We are using the return statement to return the RestaurantCard component. We are using the return statement to return null if the resId is invalid.
- We used optional chaining to check if the data is valid or not. If the data is valid then it will return the data otherwise it will return undefined. We used optional chaining to avoid the error. It is good practice to use optional chaining when you are fetching data from the API because we don't know if the data is valid or not. So we need to check if the data is valid or not. If the data is valid then we can use the data otherwise we can use the default value.

- Now let's remove the mock data and make the initial listOfRestaurants empty. We don't need the mock data anymore.

```js
const [listOfRestaurants, setListOfRestaurants] = useState([]);
```

```js
{
  listOfRestaurants?.map((restaurant) => {
    const resId = restaurant?.info?.resId;
    if (resId) {
      return <RestaurantCard key={resId} resData={restaurant} />;
    }
    return null;
  });
}
```

- The reason behind we use this if/else for the resId is because we don't want to render the component if the resId is invalid.
- There was a chance that the resId could be invalid. because the API data we are using is not perfect. Between the restaurant list there are some other data as well. So we need to check if the resId is valid or not. If the resId is valid then we can render the component otherwise we can't render the component. So we are using the if statement to check if the resId is valid. If the resId is valid then we are returning the RestaurantCard component. We are passing the resId as a key and the restaurant data as a prop to the RestaurantCard component. We are using the return statement to return the RestaurantCard component. We are using the return statement to return null if the resId is invalid.

# step 2: Improve the UI experience:

- Let's improve the UI experience. We are going to add a loading spinner or a shimmer effect to the app. So when the data is fetching from the API the loading spinner or the shimmer effect will be shown to the user so that user knows that the data is loading. When the data is loaded the loading spinner or the shimmer effect will be removed and the data will be shown to the user.

- So the logic will be like this, unless i have the data i will show the loading spinner or the shimmer effect. When i have the data i will remove the loading spinner or the shimmer effect and i will show the data to the user.

- I will write a condition that if my listOfRestaurants is empty suppose we don't have any data instead of rendering empty array we will render the loading spinner or the shimmer effect. When we have the data we will render the data.

- code:

```js
if (listOfRestaurants.length === 0) {
  return <h1>Loading...</h1>;
}
```

- Using loading spinner is not a good idea because it is not good for the user experience. So we are going to use the shimmer effect instead of the loading spinner.
- A shimmer UI is a version of the UI that doesn’t contain actual content, but instead mimics the layout and shapes of the content that will eventually appear. It uses a gradient animation that creates a shimmering effect over the placeholders, giving the user a sense of motion and progress.

- create a Shimmer component:

```js
const Shimmer = () => {
  return (
    <div className="shimmer-container">
      <div className="shimmer"></div>
    </div>
  );
};

export default Shimmer;
```

- Import and use the Shimmer component in the Body component:
- Add CSS Stylying to the Shimmer component:

```js
// conditional rendering
if (listOfRestaurants.length === 0) {
  return <Shimmer />;
}
```

- Conditional rendering is a term to describe the ability to render different user interface (UI) markup if a condition is true or false. In React, conditional rendering is done the same way conditions are handled in JavaScript. Use JavaScript operators like if or the conditional operator to create elements representing the current state, and let React update the UI to match them.

- Conditional rendering using ternary operator to render the Shimmer component:

```js
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
  )
```

- # step 3: Add the simple Login and Sign up:

- We have created a Login toggle switch. When user clicks it becomes Logout and when user clicks it again it becomes Login.

```js
const [isLogin, setLogin] = useState("Login");

<button
  className="btn login"
  onClick={() => {
    isLogin === "Login" ? setLogin("Logout") : setLogin("Login");
  }}
>
  {isLogin}
</button>;
```

- We have created a state called isLogin. We have set the initial value of the state to "Login". We have created a button. We have added a className called login to the button. We have added an onClick event handler to the button. We have used the ternary operator to toggle the button. If the isLogin state is equal to "Login" then the button will show "Login" otherwise the button will show "Logout". We have used the setLogin function to set the isLogin state. We have used the onClick event handler to toggle the button. If the user clicks the button then the isLogin state will be set to "Logout" otherwise the isLogin state will be set to "Login".

- # step 4: Implementation of Search functionality:

- code:

```js
<div className="search">
  <input type="search" value="" className="search-box" />
  <button onClick={() => {}}>Search</button>
</div>
```

- We have created a div with a className called search. We have created an input field with a className called search-box. We have created a button with an onClick event handler. The input filed is an important part of the search functionality. We have used the onClick event handler to handle the search functionality. When the user clicks the button we would implement the filter for restaurant cards and update the UI.
- So where will i get the search text from? I will be needed the search text from the input field. To get that data from the input field we need to take the value from the input field and also need to bind this input field to a local state variable to track the value of the input field, whatever the user is typing.
- So we need to create one more state variable called searchText. We need to set the initial value of the state to empty string. And we will bind the searchText state variable to the input field value attribute. So whatever the user is typing in the input field it will be stored in the searchText state variable.

- But here is an issue, when we change the value of the input field, the value of input field is not changing and it is still fixed to the searchText. So my searchText is not getting updated but we are trying to modify our input field. Because value attribute is bind to the searchText and the searchText is empty so this input field will not change unless we change the searchText.

- So to fix this we will write an onChange Handler. So whenever the user types something in the input field the onChange Handler will be called and it will update the searchText state variable. So the value of the input field will be updated and it will be bind to the searchText state variable.

- To update the searchText we will get the new value from the callback method with the event object. We will use the event object to get the new value from the input field. We will use the set function to update the searchText state variable. We will use the set function to update the searchText state variable with the new value from the input field.

- code:

```js
const [searchText, setSearchText] = useState("");

<div className="search">
  <input
    type="search"
    value={searchText}
    onChange={(e) => {
      setSearchText(e.target.value);
    }}
    className="search-box"
  />
  <button
    onClick={() => {
      console.log(searchText);
    }}
  >
    Search
  </button>
</div>;
```

- Now let's Update the UI with the filtered listOfRestaurants

```js
<button
  onClick={() => {
    console.log(searchText);
    const filteredRestaurant = listOfRestaurants.filter((res) => {
      return res?.info?.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setListOfRestaurants(filteredRestaurant);
  }}
>
  Search
</button>
```

- We have used the filter method to filter the listOfRestaurants. We have used the includes method to check if the searchText is included in the restaurant name. If the searchText is included in the restaurant name then it will return true otherwise it will return false. If it returns true then it will return the restaurant otherwise it will not return the restaurant. We have used the setListOfRestaurants function to set the listOfRestaurants state to the filteredRestaurant.

- Now there is an issue. When we search for something for a second time it will not show the data. It will show the loading spinner or the shimmer effect. Because we are setting the listOfRestaurants state to the filteredRestaurant.
  So we lost the previous data and it was updated with the new filtered data.

- So we need to fix this issue. We will create another state variable called filteredRestaurants. We will set the initial value of the state to empty array. We will use the filteredRestaurants state variable to store the filtered data. We will use the setFilteredRestaurants function to set the filteredRestaurants state variable to the filtered data. And instead of updating our setListOfRestaurants state variable we will update our setFilteredRestaurants state variable. And when we will render it we will render the filteredRestaurants state variable instead of the listOfRestaurants state variable.

- code:

  ```js
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  setFilteredRestaurants(filteredRestaurant);

  {
    filteredRestaurants?.map((restaurant) => {
      const resId = restaurant?.info?.resId;
      if (resId) {
        return <RestaurantCard key={resId} resData={restaurant} />;
      }
      return null;
    });
  }
  ```

```js
import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch(
        "https://www.zomato.com/webroutes/getPage?page_url=/kolkata/restaurants?place_name=College+Street&dishv2_id=30308&location=&isMobile=1"
      );
      const json = await data.json();

      setListOfRestaurants(json?.page_data?.sections?.SECTION_SEARCH_RESULT);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  // // Shimmer or Loading Screen using conditional rendering
  // if (listOfRestaurants.length === 0) {
  //   return <Shimmer />;
  // }

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
            className="search-box"
          />
          <button
            onClick={() => {
              console.log(searchText);
              const filteredRes = listOfRestaurants.filter((res) => {
                return res?.info?.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurants(filteredRes);
            }}
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            const filteredResList = listOfRestaurants.filter((res) => {
              return Number(res?.info?.rating?.aggregate_rating) >= 4.2;
            });
            setListOfRestaurants(filteredResList);
          }}
          className="filter-btn"
        >
          Top Rated Restaurants
        </button>
      </div>

      <div className="res-container">
        {filteredRestaurants?.map((restaurant) => {
          const resId = restaurant?.info?.resId;
          if (resId) {
            return <RestaurantCard key={resId} resData={restaurant} />;
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default Body;
```

- Slight update: Due to conflict naming changed filteredRestaurant to filteredRes..
- Also there is one thing, if you refresh the page now you will see the shimmer effect. Because we are setting the filteredRestaurants state to empty array. So we need to fix this issue.

```js
<button
  onClick={() => {
    console.log(searchText);
    const filteredRes = listOfRestaurants.filter((res) => {
      return res?.info?.name.toLowerCase().includes(searchText.toLowerCase());
    });
    setFilteredRestaurants(filteredRes);
  }}
>
  Search
</button>
```
