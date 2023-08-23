import { Component, Input } from '@angular/core';
import { Hub } from 'src/app/models/hub.model';

@Component({
  selector: 'app-hubs-list-item',
  templateUrl: './hubs-list-item.component.html',
  styleUrls: ['./hubs-list-item.component.css']
})
export class HubsListItemComponent {
  @Input() hubItem: Hub;
}
