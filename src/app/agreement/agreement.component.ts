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
  id: String;
  constructor(private route: ActivatedRoute, private dataService: dataService) { }
  ngOnInit() {
    this.agreements = this.dataService.getAgreement()

    this.assetsService = this.dataService.getAssets()
    this.id = this.route.snapshot.paramMap.get('id');
    this.agreement = this.agreements.find((agr) => agr.id == this.id)

    const coveredAssets =  this.agreement.assets_covered;
    this.coveredAssets = this.assetsService.filter(asset=>(coveredAssets.includes(asset.id)))
  }
}
