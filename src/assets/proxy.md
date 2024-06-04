### Proxy

**Description:**
The Proxy pattern provides a surrogate or placeholder for another object to control access to it.

**Problem Statement:**
You need to control access to an object, which could involve lazy initialization, logging, access control, or something similar. You want to add this behavior without modifying the original object.

**Solution:**

1. Define an interface for the original object.
2. Implement the original object.
3. Implement a proxy class that implements the same interface and holds a reference to the original object.
4. The proxy controls access to the original object, adding the required behavior.

**Design:**

- **User's Behavior:** The user interacts with the proxy as if it were the original object. The proxy controls access and can add additional behavior.
- **Example Scenario:** A user needs a proxy to control access to a resource-intensive object, ensuring it's only created when needed and adding logging for every access.

**Implementation with TypeScript:**

```typescript
// Subject Interface
interface Image {
  display(): void;
}

// Real Subject
class RealImage implements Image {
  private fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
    this.loadFromDisk();
  }

  private loadFromDisk(): void {
    console.log(`Loading ${this.fileName}`);
  }

  display(): void {
    console.log(`Displaying ${this.fileName}`);
  }
}

// Proxy
class ProxyImage implements Image {
  private realImage: RealImage | null = null;
  private fileName: string;

  constructor(fileName: string) {
    this.fileName = fileName;
  }

  display(): void {
    if (this.realImage === null) {
      this.realImage = new RealImage(this.fileName);
    }
    this.realImage.display();
  }
}

// Client code
const image = new ProxyImage("test_image.jpg");
image.display();
// Loading test_image.jpg
// Displaying test_image.jpg
image.display();
// Displaying test_image.jpg
```
