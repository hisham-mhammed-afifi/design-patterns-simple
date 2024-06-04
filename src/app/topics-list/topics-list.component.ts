import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface DesignPatternsCategory {
  name: string;
  patterns: { name: string; url: string }[];
}

@Component({
  selector: 'app-topics-list',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './topics-list.component.html',
  styles: [],
})
export class TopicsListComponent {
  designPatterns: DesignPatternsCategory[] = [
    {
      name: 'Creational Patterns',
      patterns: [
        { name: 'Factory Method', url: '/factory-method' },
        { name: 'Abstract factory', url: '/abstract-factory' },
        { name: 'Builder', url: '/builder' },
        { name: 'Prototype', url: '/prototype' },
        { name: 'Singleton', url: '/singleton' },
      ],
    },
    {
      name: 'Structural Patterns',
      patterns: [
        { name: 'Adapter', url: '/adapter' },
        { name: 'Bridge', url: '/bridge' },
        { name: 'Composite', url: '/composite' },
        { name: 'Decorator', url: '/decorator' },
        { name: 'Facade', url: '/facade' },
        { name: 'Flyweight', url: '/flyweight' },
        { name: 'Proxy', url: '/proxy' },
      ],
    },
    {
      name: 'Behavioral Patterns',
      patterns: [
        { name: 'Chain of Responsibility', url: '/chain-of-responsibility' },
        { name: 'Command', url: '/command' },
        { name: 'Iterator', url: '/iterator' },
        { name: 'Mediator', url: '/mediator' },
        { name: 'Memento', url: '/memento' },
        { name: 'Observer', url: '/observer' },
        { name: 'State', url: '/state' },
        { name: 'Strategy', url: '/strategy' },
        { name: 'Template Method', url: '/template-method' },
        { name: 'Visitor', url: '/visitor' },
      ],
    },
  ];
}
