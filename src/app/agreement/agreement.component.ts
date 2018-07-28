import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataService } from '../dataService.service';
import { Agreement } from '../agreement';
import { Asset } from '../asset';

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
  constructor(private route: ActivatedRoute, private dataService: dataService) {
    this.agreementData = []
    this.overDueData = []
  }
  ngOnInit() {
    // this.agreements = this.dataService.getAgreement()
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
          "quantity": asset.supplier,
          "serialNo": asset.serialno,
          "supplier": asset.supplier,
        });
      },[]);

      this.paymentsObjectArray =  this.agreements;
      this.overDueData  = this.agreements.reduce((acc,agree: Agreement) => {
        return acc.concat({
          "dueDate":agree.dueDate,
          "amount":agree.amount,
          "status":agree.status,
          "invoice": '<span>'+
                        '<img src="../../assets/pdf.svg">'+
                        '</span>',
          "invoiceAddress":agree.invoiceAddress
        });
    },[]);
  }

  public agreementColumns:Array<any> = [
    {title: 'Asset Name', name: 'name', filtering: {filterString: '', placeholder: 'Filter by name'},filter:'text'},
    {title: 'Location', className: ['office-header', 'text-success'], name: 'location', sort: 'asc',filter:'text'},
    {title: 'Quantity', name: 'quantity', sort: '', filtering: {filterString: '', placeholder: 'Filter by extn.'},filter:'text'},
    {title: 'Seraial No,', className: 'text-warning', name: 'serialNo',filter:'text'},
    {title: 'Supplier', name: 'supplier',filter:'text'}
  ];
  public agreementConfig:any = {
    paging: true,
    sorting: {columns: this.agreementColumns},
    filtering: {filterString: ''},
    className: ['third-t','s-table','table-striped', 'table-bordered']
  };


  public overDueColumns:Array<any> = [
    {title: 'Due Date', name: 'dueDate',filter:'text'},
    {title: 'Open Amount', className: ['office-header', 'text-success'], name: 'amount', sort: 'asc',filter:'text'},
    {title: 'Status paid/Unpaid', name: 'status', sort: '',filter:'text'},
    {title: 'Invoice', className: 'text-warning', name: 'invoice',filter:'text'},
    {title: 'Invoice Address', name: 'invoiceAddress',filter:'text'}
  ];
  public overDueConfig:any = {
    paging: true,
    sorting: {columns: this.overDueColumns},
    filtering: {filterString: ''},
    className: ['third-t','s-table','table-striped', 'table-bordered']
  };
}
