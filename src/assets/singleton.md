### Singleton

**Description:**
The Singleton pattern ensures a class has only one instance and provides a global point of access to it.

**Problem Statement:**
You need to ensure that a class has only one instance and provide a way to access this instance globally. This is useful when exactly one object is needed to coordinate actions across the system.

**Solution:**

1. Define a class with a private constructor to prevent instantiation from outside the class.
2. Implement a static method in the class that returns the single instance. This method ensures that only one instance is created.
3. Provide a global point of access to the instance through the static method.

**Design:**

- **User's Behavior:** The user accesses the singleton instance through a static method. The first call creates the instance, and subsequent calls return the same instance.
- **Example Scenario:** A user needs a single instance of a logging class to manage logging operations across an application, ensuring that all parts of the application use the same logger instance.

**Implementation with TypeScript:**

```typescript
class Singleton {
  private static instance: Singleton;

  // Private constructor to prevent instantiation
  private constructor() {
    // Initialize any properties here
  }

  // Static method to get the single instance
  public static getInstance(): Singleton {
    if (!Singleton.instance) {
      Singleton.instance = new Singleton();
    }
    return Singleton.instance;
  }

  // Example method
  public logMessage(message: string): void {
    console.log(`Log: ${message}`);
  }
}

// Client code
const singleton1 = Singleton.getInstance();
const singleton2 = Singleton.getInstance();

singleton1.logMessage("Singleton instance 1 logging"); // Log: Singleton instance 1 logging
singleton2.logMessage("Singleton instance 2 logging"); // Log: Singleton instance 2 logging

console.log(singleton1 === singleton2); // true
```
