import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MarkdownComponent } from 'ngx-markdown';

@Component({
  selector: 'app-topic',
  standalone: true,
  imports: [MarkdownComponent, RouterLink],
  templateUrl: './topic.component.html',
  styleUrl: './topic.component.css',
})
export class TopicComponent {
  topicTitle = '';
  dir = '';

  constructor(private route: ActivatedRoute) {
    route.params.subscribe((params) => {
      this.topicTitle = 'assets/' + params['topic'] + '.md';
    });

    route.queryParams.subscribe((params) => {
      this.dir = params['dir'];
    });
  }
}
