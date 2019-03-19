import { Component, OnInit } from '@angular/core';
import { products } from '../home/products';
import { User } from '../_models/index';
import { UserService } from '../_services/index';

@Component({
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    private IsSwapCostRuning;
    private IsSwapCostRuning1;
    private IsSwapCostRuning2;
    private gridData: any[] = products;
    hitAnchor1(e){
         // alert("You have clicked the anchor-1 tag");
         this.IsSwapCostRuning = true;
         this.IsSwapCostRuning1 = false;
         this.IsSwapCostRuning2 = false;
       
      }
      hitAnchor2(e){
         // alert("You have clicked the anchor-2 tag");
          this.IsSwapCostRuning = false;
          this.IsSwapCostRuning2 = false;
          this.IsSwapCostRuning1 = true;
      }
      hitAnchor3(e){
        // alert("You have clicked the anchor-2 tag");
         this.IsSwapCostRuning = false;
         this.IsSwapCostRuning1 = false;
         this.IsSwapCostRuning2 = true;
     }

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
}