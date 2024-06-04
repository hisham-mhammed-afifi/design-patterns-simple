import { Routes } from '@angular/router';
import { TopicComponent } from './topic/topic.component';
import { TopicsListComponent } from './topics-list/topics-list.component';

export const routes: Routes = [
  {
    path: '',
    component: TopicsListComponent,
  },
  {
    path: ':topic',
    component: TopicComponent,
  },
];
