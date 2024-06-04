### Mediator

**Description:**
The Mediator pattern defines an object that encapsulates how a set of objects interact, promoting loose coupling by preventing objects from referring to each other directly.

**Problem Statement:**
You need to manage complex communications between multiple objects without having them refer to each other directly, which can lead to tight coupling and complex dependencies.

**Solution:**

1. Define a mediator interface with methods for communication between objects.
2. Implement a concrete mediator class that handles the communication logic.
3. Define colleague classes that communicate through the mediator instead of directly with each other.
4. Colleague objects interact with the mediator to communicate with other colleagues.

**Design:**

- **User's Behavior:** The user interacts with colleague objects, which in turn communicate through the mediator. This centralizes the communication logic and reduces direct dependencies.
- **Example Scenario:** A user wants to manage the communication between different components of a chat application, such as users, groups, and messages, without having each component directly refer to others.

**Implementation with TypeScript:**

```typescript
// Mediator Interface
interface Mediator {
  notify(sender: object, event: string): void;
}

// Concrete Mediator
class ConcreteMediator implements Mediator {
  private component1: Component1;
  private component2: Component2;

  setComponent1(component: Component1): void {
    this.component1 = component;
  }

  setComponent2(component: Component2): void {
    this.component2 = component;
  }

  notify(sender: object, event: string): void {
    if (event === "A") {
      console.log("Mediator reacts on A and triggers B.");
      this.component2.doC();
    }
    if (event === "D") {
      console.log("Mediator reacts on D and triggers A.");
      this.component1.doB();
    }
  }
}

// Colleague Classes
class Component1 {
  private mediator: Mediator;

  constructor(mediator: Mediator) {
    this.mediator = mediator;
  }

  doA(): void {
    console.log("Component 1 does A.");
    this.mediator.notify(this, "A");
  }

  doB(): void {
    console.log("Component 1 does B.");
    this.mediator.notify(this, "B");
  }
}

class Component2 {
  private mediator: Mediator;

  constructor(mediator: Mediator) {
    this.mediator = mediator;
  }

  doC(): void {
    console.log("Component 2 does C.");
    this.mediator.notify(this, "C");
  }

  doD(): void {
    console.log("Component 2 does D.");
    this.mediator.notify(this, "D");
  }
}

// Client code
const mediator = new ConcreteMediator();

const component1 = new Component1(mediator);
const component2 = new Component2(mediator);

mediator.setComponent1(component1);
mediator.setComponent2(component2);

component1.doA(); // Component 1 does A.
// Mediator reacts on A and triggers B.
// Component 2 does C.

component2.doD(); // Component 2 does D.
// Mediator reacts on D and triggers A.
// Component 1 does B.
```
