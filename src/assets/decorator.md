### Decorator

**Description:**
The Decorator pattern allows behavior to be added to individual objects, dynamically, without affecting the behavior of other objects from the same class.

**Problem Statement:**
You need to add or augment functionality to objects at runtime without modifying their structure or code. This is particularly useful for adhering to the Open/Closed Principle.

**Solution:**

1. Define a component interface that includes the methods to be extended.
2. Implement concrete components that provide the core functionality.
3. Implement a decorator class that implements the component interface and wraps a component object.
4. Concrete decorators extend the decorator class to add functionality to the wrapped component.

**Design:**

- **User's Behavior:** The user interacts with the decorated component as if it were a standard component. The decorator adds additional behavior before or after delegating tasks to the wrapped component.
- **Example Scenario:** A user wants to add various features to a text editor (e.g., spell check, auto-correct) without modifying the original text editor code.

**Implementation with TypeScript:**

```typescript
// Component Interface
interface TextEditor {
  write(text: string): void;
}

// Concrete Component
class SimpleTextEditor implements TextEditor {
  write(text: string): void {
    console.log(`TextEditor: ${text}`);
  }
}

// Decorator
class TextEditorDecorator implements TextEditor {
  protected editor: TextEditor;

  constructor(editor: TextEditor) {
    this.editor = editor;
  }

  write(text: string): void {
    this.editor.write(text);
  }
}

// Concrete Decorators
class SpellCheckDecorator extends TextEditorDecorator {
  write(text: string): void {
    // Add spell checking behavior
    console.log("SpellCheckDecorator: Checking spelling...");
    super.write(text);
  }
}

class AutoCorrectDecorator extends TextEditorDecorator {
  write(text: string): void {
    // Add auto-correct behavior
    console.log("AutoCorrectDecorator: Auto-correcting text...");
    super.write(text);
  }
}

// Client code
const simpleEditor = new SimpleTextEditor();
const spellCheckedEditor = new SpellCheckDecorator(simpleEditor);
const autoCorrectedEditor = new AutoCorrectDecorator(spellCheckedEditor);

autoCorrectedEditor.write("Helo, wrld!");
// AutoCorrectDecorator: Auto-correcting text...
// SpellCheckDecorator: Checking spelling...
// TextEditor: Helo, wrld!
```
