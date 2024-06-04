### Command

**Description:**
The Command pattern encapsulates a request as an object, thereby allowing for parameterization of clients with queues, requests, and operations, and providing support for undoable operations.

**Problem Statement:**
You need to decouple the sender of a request from the receiver, allowing for flexible and extensible command handling, including features like queuing commands, logging commands, and supporting undoable operations.

**Solution:**

1. Define a command interface with an execute method.
2. Implement concrete command classes that execute specific actions.
3. Create an invoker class that stores and invokes commands.
4. Client code creates command objects and passes them to the invoker.

**Design:**

- **User's Behavior:** The user interacts with the invoker to execute commands. The invoker delegates the execution to the appropriate command object.
- **Example Scenario:** A user interacts with a text editor that supports undo and redo operations. Each operation (e.g., typing, deleting) is encapsulated as a command object, allowing for easy undo/redo functionality.

**Implementation with TypeScript:**

```typescript
// Command Interface
interface Command {
  execute(): void;
}

// Receiver
class Light {
  turnOn(): void {
    console.log("Light is ON");
  }

  turnOff(): void {
    console.log("Light is OFF");
  }
}

// Concrete Commands
class TurnOnCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.turnOn();
  }
}

class TurnOffCommand implements Command {
  private light: Light;

  constructor(light: Light) {
    this.light = light;
  }

  execute(): void {
    this.light.turnOff();
  }
}

// Invoker
class RemoteControl {
  private command: Command;

  setCommand(command: Command): void {
    this.command = command;
  }

  pressButton(): void {
    this.command.execute();
  }
}

// Client code
const light = new Light();
const turnOn = new TurnOnCommand(light);
const turnOff = new TurnOffCommand(light);

const remote = new RemoteControl();

remote.setCommand(turnOn);
remote.pressButton(); // Light is ON

remote.setCommand(turnOff);
remote.pressButton(); // Light is OFF
```
