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

- # Step 2: update the RestaurantMenu component:
