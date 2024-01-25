### React Episode Eleven Notes

# React Food Ordering Application :

# Q&A:

- # Q: What is Higher Order Component ?

  - Ans: A Higher-Order Component (HOC) is an advanced pattern in React where a function takes a component and returns a new component with extended or modified functionality. It's a way to enhance or reuse component logic by wrapping components in another component.

  HOCs themselves are not part of the React API; they're a pattern that emerges from the compositional nature of React components and JavaScript's functional programming features.

  `Here's how you create and use a Higher-Order Component:`

  ```js
  import React from "react";
  const withHOC = (WrappedComponent) => {
    class HOC extends React.Component {
      // Add additional functionality here
      render() {
        return <WrappedComponent {...this.props} />;
      }
    }

    return HOC;
  };
  ```

- # Q: What is Controlled & Uncontrolled components ?

  - Ans: In a controlled component, form data is handled by a React component. The alternative is uncontrolled components, where form data is handled by the DOM itself.
    To write an uncontrolled component, instead of writing an event handler for every state update, you can use a ref to get form values from the DOM.
    For example, this code accepts a single name in an uncontrolled component:

  ```js
  class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.handleSubmit = this.handleSubmit.bind(this);
      this.input = React.createRef();
    }

    handleSubmit(event) {
      alert("A name was submitted: " + this.input.current.value);
      event.preventDefault();
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" ref={this.input} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }
  ```

- # Q: What is Lifting the state means ?

  - Ans: Lifting state up is the process of moving the state from one component to the parent component. This is done to share the state between multiple components. It is also known as state hoisting or lifting state up in React.

- # Q: What is the difference between props and state ?

  - Ans: Props are used to pass data from parent to child components. They are like function arguments in JavaScript and attributes in HTML.

  - State is used to change the component state from within. It is like variables declared in a function or class method.

- # Q: What is Consists of UI layer & Data layer ?

  - Ans: The UI layer is the layer that the user interacts with. It consists of the components that are rendered on the screen. Such as the header, body, and footer components.

  The data layer is the layer that handles the data. Such as state management, fetching data from the server, and so on.

- # Q: What is Prop drilling ?

  - Ans: Prop drilling is the process of passing props from one component to another component down the hierarchy. It is a common problem in React applications because react has one way data flow. In react data is passed from parent to children components using props. If we want to pass data from a parent component to a grandchild component, we have to pass the data through the intermediate components. It's kind of top to bottom data flow.
    This is called prop drilling.

- # Q: The problem with passing props ?

  - Ans: Passing props can become verbose and inconvenient when you need to pass some props deeply through the tree, or if many components need the same prop. The nearest common ancestor could be far removed from the components that need data, and lifting state up that high can lead to a situation called prop drilling. So we should avoid prop drilling. So it would be great if there is a way to teleport data to the components in the tree that need it without passing props. It can be solved with React's context feature!

- # Q: WHat is context and why it is an alternative to passing props?

  - Ans: Context provides a way to pass data through the component tree without having to pass props down manually at every level. Context is designed to share data that can be considered “global” for a tree of React components, such as the current authenticated user, theme, or preferred language. Context is primarily used when some data needs to be accessible by many components at different nesting levels. Apply it sparingly because it makes component reuse more difficult. If you only want to avoid passing some props through many levels, component composition is often a simpler solution than context.

- # Q: Should we use context everywhere ?

  - Ans: - Now one thing to note here is that useContext helps us to access the context value from anywhere in the component tree. And it fixes the problem of prop drilling. But does it mean that we should use it everywhere? The answer is no. We should not keep all the data in context instead we should keep only the data that is required by many components in the application. If we keep all the data in context, it will be difficult to manage and debug the application. So we should use context sparingly. But one thing for sure by using context we can access the data from anywhere in the component tree without passing props manually.

## Managing Data Effectively with Higher Order Components :

- # Step 1: Implement Promoted level:

- We will use Higher Order Component to create a promoted level on top of Restaurant card component.

- From the fetched data, we will use isPromoted property to check if the restaurant is promoted or not. If it is promoted, we will add a promoted level on top of the restaurant card. If it is not promoted, we will just render the restaurant card.
  `Input = RestaurantCard ==> Output = PromotedRestaurantCard`

```js
const withPromotedLabel = (RestaurantCard) => {
  return () => {
    return (
      <div className="relative">
        <div className="absolute top-0 left-0 bg-rose-500 text-white p-1 rounded-br-md text-xs">
          <span>Promoted</span>
        </div>
        <RestaurantCard />
      </div>
    );
  };
};
```

- So what is happening here? We are creating a Higher Order Component called withPromotedLabel. It takes a component as an argument and returns a new component. The new component renders the component that is passed as an argument. In our case, it is RestaurantCard. We are also adding a promoted level on top of the RestaurantCard component.

- Now import it in Body component and wrap it around the RestaurantCard component.

```js
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";

const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

{
  restaurant?.isPromoted ? (
    <RestaurantCardPromoted key={resId} resData={restaurant} />
  ) : (
    <RestaurantCard key={resId} resData={restaurant} />
  );
}
```

```js
export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div className="relative">
        <div className="absolute top-0 left-0 bg-rose-500 text-white p-1 rounded-br-md text-xs">
          <span>Promoted</span>
        </div>
        <RestaurantCard {...props} />
      </div>
    );
  };
};
```

- Also added props to the new withPromotedLabel and passed it to the RestaurantCard component. This is because we are passing props to the RestaurantCard component from the Body component. If we don’t pass the props, the RestaurantCard component will not receive the props from the Body component.

- # Step 2: update the RestaurantMenuItem with Accordion:

- # Step 2: Understanding Context: a prop drilling alternative:

- Context solves the problem of props drilling. It provides a way to pass data through the component tree without having to pass props down manually at every level.

- Let's create a context inside Utils folder.
- We are creating an user context to keep track of a logged in user in our application.

```js
import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Default",
});

export default UserContext;
```

- Now one thing to note here is that useContext helps us to access the context value from anywhere in the component tree. And it fixes the problem of prop drilling. But does it mean that we should use it everywhere? The answer is no. We should not keep all the data in context instead we should keep only the data that is required by many components in the application. If we keep all the data in context, it will be difficult to manage and debug the application. So we should use context sparingly. But one thing for sure by using context we can access the data from anywhere in the component tree without passing props manually.

- Using context in class-based components: About component

```js
import UserContext from "../Utils/UserContext";
<div>
  Logged in user:
  <UserContext.Consumer>
    {(loggedInUser) => <h1>{loggedInUser.loggedInUser}</h1>}
  </UserContext.Consumer>
</div>;
```

```js
import UserContext from "./Utils/UserContext";
const [username, setUserInfo] = useState();

useEffect(() => {
  // Api call
  const data = {
    name: "Jadid",
  };

  setUserInfo(data.name);
}, []);

<UserContext.Provider value={{ loggedInUser: username }}>
  <div className="app">
    <UserContext.Provider value={{ loggedInUser: "Elon Musk" }}>
      <Header />
    </UserContext.Provider>
    <Outlet />
  </div>
</UserContext.Provider>;
```

- Here we can also modify the context value. For example, we can change the loggedInUser value to jadid from fetching data from api for the whole app component which was previously set as default value and we can also nest the context and use in the header component and change the loggedInUser value to Elon Musk. Now if we go to the About component, we can see that the logged in user is jadid and in the header is Elon musk. So we can modify the context value from anywhere in the component tree.
