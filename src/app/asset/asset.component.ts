import { Component, OnInit } from '@angular/core';
import {dataService} from '../dataService.service';
import {ActivatedRoute} from '@angular/router';
import {Asset} from '../asset';
import {TableData} from '../tableData';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css','../table.css']
})
export class AssetComponent implements OnInit {

  assets:Array<Asset>;
  id:String;
  asset:Asset
  constructor(private route: ActivatedRoute, private dataService: dataService) { }


  ngOnInit() {
    this.assets = this.dataService.getAssets()
    this.id = this.route.snapshot.paramMap.get('id');

    this.asset = this.assets.find((agr) => agr.id == this.id)
  }
  public columns:Array<any> = [
    {title: 'Name', name: 'name', filtering: {filterString: '', placeholder: 'Filter by name'}},
    {
      title: 'Position',
      name: 'position',
      sort: false,
      filtering: {filterString: '', placeholder: 'Filter by position'}
    },
    {title: 'Office', className: ['office-header', 'text-success'], name: 'office', sort: 'asc'},
    {title: 'Extn.', name: 'ext', sort: '', filtering: {filterString: '', placeholder: 'Filter by extn.'}},
    {title: 'Start date', className: 'text-warning', name: 'startDate'},
    {title: 'Salary ($)', name: 'salary'}
  ];
  public config:any = {
    paging: true,
    sorting: {columns: this.columns},
    filtering: {filterString: ''},
    className: ['table-striped', 'table-bordered']
  };
  public data:Array<any> = TableData;



}
