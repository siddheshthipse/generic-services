import { Component, OnInit } from '@angular/core';
import { CompanyModel } from '../company-model';
import { DesignutilityService } from '../designutility.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  constructor(public _du: DesignutilityService<CompanyModel, number>) { }

  companyData: CompanyModel[];
  endpoint: string = "http://localhost:3000/company";

  ngOnInit(): void {
    this._du.get(this.endpoint).subscribe((returnData) => {
      this.companyData = returnData;
      console.log(this.companyData);
    })
  }

  newCompany: CompanyModel = {
    bs: "Healthy Eating Simplified",
    catchPhrase: "Eat Healthy, Think Better",
    id: 1269,
    name: "Britania Biscuits",
    turnover: "6 Million"
  }

  addCompany(){
    this._du.post(this.endpoint,this.newCompany).subscribe((returnData)=>{
      console.log("New Company Posted!!!");
    })
  }

  getByID(companyID){
    this._du.getById(this.endpoint,companyID).subscribe((returnData)=>{
      console.log(returnData);
    })
  }

  deleteCompany(companyID){
    this._du.delete(this.endpoint,companyID).subscribe((returnData)=>{
      console.log("Company deleted successfully");
    })
  }
}
