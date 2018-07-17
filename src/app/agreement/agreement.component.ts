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
  id: String;
  constructor(private route: ActivatedRoute, private dataService: dataService) {
    this.agreementData = []
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
          "quantity": asset.supplier,
          "serialNo": asset.serialno,
          "supplier": asset.supplier,
        });
      },[]);
  }

  public agreementColumns:Array<any> = [
    {title: 'Asset Name', name: 'name', filtering: {filterString: '', placeholder: 'Filter by name'}},
    {title: 'Location', className: ['office-header', 'text-success'], name: 'location', sort: 'asc'},
    {title: 'Quantity', name: 'quantity', sort: '', filtering: {filterString: '', placeholder: 'Filter by extn.'}},
    {title: 'Seraial No,', className: 'text-warning', name: 'serialNo'},
    {title: 'Supplier', name: 'supplier'}
  ];
  public agreementConfig:any = {
    paging: true,
    sorting: {columns: this.agreementColumns},
    filtering: {filterString: ''},
    className: ['table-striped', 'table-bordered']
  };
}
