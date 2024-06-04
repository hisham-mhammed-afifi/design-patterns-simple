### Facade

**Description:**
The Facade pattern provides a simplified interface to a complex subsystem, making it easier for clients to use the subsystem without needing to understand its intricacies.

**Problem Statement:**
You need to interact with a complex system or a set of interfaces, but the complexity makes it difficult to use. You want to provide a simpler, unified interface to clients.

**Solution:**

1. Identify the subsystem classes and their interfaces.
2. Create a facade class that provides a simplified interface to the complex subsystem.
3. The facade class delegates calls to the appropriate subsystem classes.

**Design:**

- **User's Behavior:** The user interacts with the facade rather than the complex subsystem. The facade handles the complexity and provides a straightforward interface.
- **Example Scenario:** A user wants to interact with a complex library for multimedia processing. The facade simplifies the common tasks like playing, pausing, and stopping media files.

**Implementation with TypeScript:**

```typescript
// Subsystem Classes
class CPU {
  freeze(): void {
    console.log("CPU: Freezing");
  }

  jump(position: number): void {
    console.log(`CPU: Jumping to ${position}`);
  }

  execute(): void {
    console.log("CPU: Executing");
  }
}

class Memory {
  load(position: number, data: string): void {
    console.log(`Memory: Loading data '${data}' at position ${position}`);
  }
}

class HardDrive {
  read(lba: number, size: number): string {
    console.log(`HardDrive: Reading ${size} bytes from ${lba}`);
    return "data";
  }
}

// Facade
class ComputerFacade {
  private cpu: CPU;
  private memory: Memory;
  private hardDrive: HardDrive;

  constructor() {
    this.cpu = new CPU();
    this.memory = new Memory();
    this.hardDrive = new HardDrive();
  }

  start(): void {
    this.cpu.freeze();
    this.memory.load(0, this.hardDrive.read(0, 1024));
    this.cpu.jump(0);
    this.cpu.execute();
  }
}

// Client code
const computer = new ComputerFacade();
computer.start();
// Output:
// CPU: Freezing
// HardDrive: Reading 1024 bytes from 0
// Memory: Loading data 'data' at position 0
// CPU: Jumping to 0
// CPU: Executing
```
