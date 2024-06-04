### Flyweight

**Description:**
The Flyweight pattern minimizes memory usage by sharing as much data as possible with other similar objects; it is particularly useful when working with a large number of similar objects.

**Problem Statement:**
You need to efficiently manage a large number of fine-grained objects that share a lot of common data, to reduce memory usage.

**Solution:**

1. Identify the intrinsic (shared) and extrinsic (unique) state of objects.
2. Create a Flyweight interface and concrete Flyweight class to manage the intrinsic state.
3. Use a Flyweight Factory to manage and reuse Flyweight objects.
4. Store extrinsic state externally, and pass it to Flyweight objects when needed.

**Design:**

- **User's Behavior:** The user requests objects through the Flyweight Factory. The factory returns existing Flyweight objects or creates new ones if needed. The user provides extrinsic state separately.
- **Example Scenario:** A user wants to render a large number of characters on a screen. Each character shares font information (intrinsic state) but has a unique position (extrinsic state).

**Implementation with TypeScript:**

```typescript
// Flyweight Interface
interface Flyweight {
  draw(context: string): void;
}

// Concrete Flyweight
class CharacterFlyweight implements Flyweight {
  private readonly char: string;

  constructor(char: string) {
    this.char = char;
  }

  draw(context: string): void {
    console.log(`Drawing character '${this.char}' with context '${context}'`);
  }
}

// Flyweight Factory
class FlyweightFactory {
  private flyweights: { [key: string]: Flyweight } = {};

  getFlyweight(char: string): Flyweight {
    if (!(char in this.flyweights)) {
      this.flyweights[char] = new CharacterFlyweight(char);
    }
    return this.flyweights[char];
  }

  listFlyweights(): void {
    const count = Object.keys(this.flyweights).length;
    console.log(`Factory has ${count} flyweights.`);
    for (const key in this.flyweights) {
      console.log(`Flyweight: ${key}`);
    }
  }
}

// Client code
const factory = new FlyweightFactory();

const context1 = "Position: (10, 20)";
const context2 = "Position: (30, 40)";

const charA = factory.getFlyweight("A");
const charB = factory.getFlyweight("B");

charA.draw(context1); // Drawing character 'A' with context 'Position: (10, 20)'
charA.draw(context2); // Drawing character 'A' with context 'Position: (30, 40)'
charB.draw(context1); // Drawing character 'B' with context 'Position: (10, 20)'

factory.listFlyweights(); // Factory has 2 flyweights: A, B
```
