import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataService } from '../dataService.service';
import { Agreement } from '../agreement';
import { Asset } from '../asset';
import {Location} from '@angular/common';

@Component({
  selector: 'app-agreement',
  templateUrl: './agreement.component.html',
  styleUrls: ['./agreement.component.css', '../table.css']
})
export class AgreementComponent implements OnInit {
  agreements: Array<Agreement>
  agreement: Agreement;
  coveredAssets:Array<Asset>
  assetsService:Array<Asset>
  agreementData:Array<Agreement>;
  overDueData:Array<any>;
  paymentsObjectArray:Array<Agreement>;
  id: String;
  overDueTableVisible:boolean;
  constructor(private route: ActivatedRoute, private dataService: dataService,private _location:Location) {
    this.agreementData = []
    this.overDueData = []
    this.overDueTableVisible=false
  }
  backClicked() {
    this._location.back();
  }
  showOverDueTable(){
    this.overDueTableVisible= !this.overDueTableVisible;
  }
  ngOnInit() {
    this.agreements = this.dataService.getAgreement()
    this.assetsService = this.dataService.getAssets()
    this.id = this.route.snapshot.paramMap.get('id');
    this.agreement = this.agreements.find((agr) => agr.id == this.id)

    const coveredAssets =  this.agreement.assets_covered;
    this.coveredAssets = this.assetsService.filter(asset=>(coveredAssets.includes(asset.id)))

    this.agreementData  = this.coveredAssets.reduce((acc,asset: Asset) => {
        return acc.concat({
          "id":  asset.id,
          "name":'<a routerLink="main/asset/'+asset.id+'" routerLinkActive="active">'+asset.name+'</a>',
          "location":asset.category,
          "quantity": asset.quantity,
          "serialNo": asset.serialno,
          "supplier": asset.supplier,
        });
      },[]);

      this.paymentsObjectArray =  this.agreements;
      this.overDueData  = this.agreements.reduce((acc,agree: Agreement) => {
        return acc.concat({
          "dueDate":agree.dueDate,
          "invoiceAmount":agree.invoiceAmount,
          "amount":agree.amount,
          // "status":agree.status,
          "invoice": '<span>'+
                        '<img src="../../assets/pdf.svg">'+
                        '</span>'
            });
    },[]);
  }

  public agreementColumns:Array<any> = [
    {title: 'Asset Name', name: 'name', filtering: {filterString: '', placeholder: 'Search'},filter:'text'},
    {title: 'Location', className: ['office-header', 'text-success'], name: 'location', sort: 'asc',filtering: {filterString: '', placeholder: 'search'},filter:'text'},
    {title: 'Quantity', name: 'quantity', sort: ''},
    {title: 'Serial No', className: 'text-warning', name: 'serialNo',filtering: {filterString: '', placeholder: 'SearchNo.'},filter:'text'},
    {title: 'Supplier', name: 'supplier',filtering: {filterString: '', placeholder: 'search'},filter:'text'}
  ];
  public agreementConfig:any = {
    paging: true,
    sorting: {columns: this.agreementColumns},
    filtering: {filterString: ''},
    className: ['third-t','s-table', 'table-bordered']
  };
  public overDueColumns:Array<any> = [
    {title: 'Due Date', name: 'dueDate',filter:'text'},
    {title: 'Invoice Address', name: 'invoiceAmount',filter:'text'},
    {title: 'Open Amount', className: ['office-header', 'text-success'], name: 'amount', sort: 'asc',filter:'text'},
    // {title: 'Status paid/Unpaid', name: 'status', sort: '',filter:'text'},
    {title: 'Invoice', className: 'text-warning', name: 'invoice',filter:'text'},
    
  ];
  public overDueConfig:any = {
    paging: true,
    sorting: {columns: this.overDueColumns},
    filtering: {filterString: ''},
    className: ['third-t','s-table', 'table-bordered']
  };
}
