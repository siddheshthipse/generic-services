import { Component, OnInit } from '@angular/core';
import { DesignutilityService } from '../designutility.service';
import { UserModel } from '../user-model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(public _du:DesignutilityService<UserModel,number>) { }

  userData:UserModel[];
  endpoint:string="http://localhost:3000/Users";
  
  ngOnInit(): void {
    this._du.get(this.endpoint).subscribe((returnData)=>{
      this.userData=returnData;
      console.log(this.userData);
    })
  }

}
