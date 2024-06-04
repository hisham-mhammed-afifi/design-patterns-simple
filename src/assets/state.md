### State

**Description:**
The State pattern allows an object to alter its behavior when its internal state changes, making the object appear to change its class.

**Problem Statement:**
You need to change the behavior of an object based on its state, but you want to avoid complex conditional logic.

**Solution:**

1. Define a state interface with methods representing different behaviors.
2. Implement concrete state classes for each possible state, implementing the state interface.
3. Create a context class that maintains a reference to the current state and delegates state-specific behavior to the current state object.

**Design:**

- **User's Behavior:** The user interacts with the context object, which changes its behavior depending on its current state.
- **Example Scenario:** A user wants to implement a TCP connection that behaves differently when it's in various states like listening, connecting, established, and closed.

**Implementation with TypeScript:**

```typescript
// State Interface
interface State {
  handle(context: Context): void;
}

// Concrete States
class ConcreteStateA implements State {
  handle(context: Context): void {
    console.log("ConcreteStateA: Handling request and transitioning to State B.");
    context.setState(new ConcreteStateB());
  }
}

class ConcreteStateB implements State {
  handle(context: Context): void {
    console.log("ConcreteStateB: Handling request and transitioning to State A.");
    context.setState(new ConcreteStateA());
  }
}

// Context
class Context {
  private state: State;

  constructor(state: State) {
    this.setState(state);
  }

  setState(state: State): void {
    console.log(`Context: Transitioning to ${(<any>state).constructor.name}.`);
    this.state = state;
  }

  request(): void {
    this.state.handle(this);
  }
}

// Client code
const context = new Context(new ConcreteStateA());
context.request(); // ConcreteStateA: Handling request and transitioning to State B.
context.request(); // ConcreteStateB: Handling request and transitioning to State A.
context.request(); // ConcreteStateA: Handling request and transitioning to State B.
context.request(); // ConcreteStateB: Handling request and transitioning to State A.
```
