import { Component, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Hub } from 'src/app/models/hub.model';
import { HubService } from 'src/app/services/hub.service';

@Component({
  selector: 'app-add-hub',
  templateUrl: './add-hub.component.html',
  styleUrls: ['./add-hub.component.css']
})
export class AddHubComponent {
  @ViewChild('hubname') hubNameObj: ElementRef;
  @ViewChild('hubrefid') hubRefIdObj: ElementRef;

  editHub: boolean = false;
  hubName: string;
  hubId: string;
  hubRefId: string;
  hub: Hub;
  hubPort: string;

  constructor(private route: ActivatedRoute, private hubService: HubService, private router: Router){}

  ngOnInit(){
    this.editHub = this.route.snapshot.queryParams['edit']
    this.hubId = this.route.snapshot.queryParams['id']
    this.route.queryParams.subscribe(
      (params) => {
        this.editHub = params['edit']
        this.hubId = params['id']
        this.hub = this.hubService.GetHub(this.hubId)
       }
    );
  }

  addHub(){
    this.hubName = this.hubNameObj.nativeElement.value
    this.hubRefId = this.hubRefIdObj.nativeElement.value
    
    if (this.hubName ==="" || this.hubRefId === ""){
      return null
    }
    this.hubService.AddHub(this.hubName, this.hubRefId)
    alert("Successfully Added Hub");
    this.router.navigate(['/']);
  }

  editHubInfo(){
    this.hubName = this.hubNameObj.nativeElement.value
    this.hubRefId = this.hubRefIdObj.nativeElement.value
    
    if (this.hubName ==="" || this.hubRefId === ""){
      return null
    }
    this.hubService.EditHub(this.hubId, this.hubName, this.hubRefId)
    alert("Successfully Updated Hub");
    this.router.navigate(['/']);
  }
  deleteHubInfo(){
    this.hubService.DeleteHub(this.hubId)
    alert("Successfully Deleted Hub")
    this.router.navigate(['/'])
  }
}
