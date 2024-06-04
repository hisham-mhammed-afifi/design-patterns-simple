### Memento

**Description:**
The Memento pattern provides the ability to restore an object to its previous state, allowing for undo operations.

**Problem Statement:**
You need to capture and externalize an object's internal state so that it can be restored later without violating encapsulation. This is useful for implementing undo functionality.

**Solution:**

1. Define a memento class to store the internal state of the originator.
2. Implement an originator class that creates and restores mementos.
3. Create a caretaker class that requests mementos from the originator and restores the originator's state when needed.

**Design:**

- **User's Behavior:** The user interacts with the caretaker to save and restore the state of the originator. The caretaker manages mementos without accessing their contents.
- **Example Scenario:** A user wants to implement an undo feature in a text editor, allowing the user to revert to previous states of the document.

**Implementation with TypeScript:**

```typescript
// Memento
class Memento {
  private state: string;

  constructor(state: string) {
    this.state = state;
  }

  getState(): string {
    return this.state;
  }
}

// Originator
class TextEditor {
  private state: string;

  setState(state: string): void {
    console.log(`TextEditor: Setting state to '${state}'`);
    this.state = state;
  }

  getState(): string {
    return this.state;
  }

  save(): Memento {
    console.log("TextEditor: Saving to Memento.");
    return new Memento(this.state);
  }

  restore(memento: Memento): void {
    this.state = memento.getState();
    console.log(`TextEditor: State after restoring from Memento: '${this.state}'`);
  }
}

// Caretaker
class Caretaker {
  private mementos: Memento[] = [];
  private originator: TextEditor;

  constructor(originator: TextEditor) {
    this.originator = originator;
  }

  backup(): void {
    console.log("Caretaker: Saving state.");
    this.mementos.push(this.originator.save());
  }

  undo(): void {
    if (!this.mementos.length) {
      return;
    }
    const memento = this.mementos.pop();
    console.log("Caretaker: Restoring state.");
    this.originator.restore(memento);
  }

  showHistory(): void {
    console.log("Caretaker: Here's the list of mementos:");
    for (const memento of this.mementos) {
      console.log(memento.getState());
    }
  }
}

// Client code
const editor = new TextEditor();
const caretaker = new Caretaker(editor);

editor.setState("State #1");
caretaker.backup();

editor.setState("State #2");
caretaker.backup();

editor.setState("State #3");
caretaker.backup();

editor.setState("State #4");

console.log("");
caretaker.showHistory();

console.log("\nClient: Now, let's undo!\n");
caretaker.undo();

console.log("\nClient: Once more!\n");
caretaker.undo();
```
