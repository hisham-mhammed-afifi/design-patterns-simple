### Adapter

**Description:**
The Adapter pattern allows incompatible interfaces to work together by converting the interface of a class into another interface that a client expects.

**Problem Statement:**
You have two incompatible interfaces that need to work together. You want to reuse existing functionality without modifying the existing code.

**Solution:**

1. Define an interface that the client expects.
2. Implement a class that wraps the existing interface and converts it to the expected interface.
3. Client code interacts with the adapter instead of the original interface.

**Design:**

- **User's Behavior:** The user interacts with the adapter as if it were the expected interface. The adapter handles the conversion and delegates the calls to the existing interface.
- **Example Scenario:** A user wants to use a modern logging library in an application that was originally designed to use a legacy logging system. The adapter allows the new library to be used without changing the existing codebase.

**Implementation with TypeScript:**

```typescript
// Target interface
interface ITarget {
  request(): void;
}

// Adaptee (existing interface)
class Adaptee {
  specificRequest(): void {
    console.log("Specific request from Adaptee");
  }
}

// Adapter
class Adapter implements ITarget {
  private adaptee: Adaptee;

  constructor(adaptee: Adaptee) {
    this.adaptee = adaptee;
  }

  request(): void {
    this.adaptee.specificRequest();
  }
}

// Client code
function clientCode(target: ITarget) {
  target.request();
}

const adaptee = new Adaptee();
const adapter = new Adapter(adaptee);

clientCode(adapter); // Specific request from Adaptee
```
