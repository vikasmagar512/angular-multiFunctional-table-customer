import {Component, Input, OnInit,TemplateRef,ViewChild, Output, EventEmitter} from '@angular/core';
import {TableData} from '../../tableData';
import {Router} from '@angular/router';
import {Format} from '../Format';
import {BsModalRef, BsModalService} from 'ngx-bootstrap';
// import any = jasmine.any;

@Component({
  selector: 'app-table-demo',
  templateUrl: './table-demo.component.html',
  styleUrls: ['./table-demo.component.css','../../table.css']
})
export class TableDemoComponent implements OnInit {
  @Input() columns: any[];
  @Input() config: Object;
  @Input() data: Array<any>;
  @Output() change: EventEmitter<string> = new EventEmitter<string>();

  exportFileName:string = "csv";
  /* @ViewChild('template')
  public assetRef: TemplateRef<any>;  */ 

  public rows:Array<any> = [];
  /*public columns:Array<any> = [
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
  ];*/

  public page:number = 1;
  public itemsPerPage:number = 10;
  public maxSize:number = 5;
  public numPages:number = 1;
  public length:number = 0;

  /*
    public config:any = {
      paging: true,
      sorting: {columns: this.columns},
      filtering: {filterString: ''},
      className: ['table-striped', 'table-bordered']
    };
  */

  // private data:Array<any> = TableData;

  public constructor(    private router: Router,
  ) {
    // this.length = this.data.length;
  }

  public ngOnInit():void {

    this.length = this.data.length;
    this.onChangeTable(this.config);

   /*  $(document).on('click','.service',function(data:any){
      let j=$(this).attr('data-id');
      debugger

      // moduleviewservice.putSingleId(j);
      // route.navigate( ['/home', {outlets: {'menu': 'home/singleViewModule'}}]);
    });
    $(document).on('click','.report',function(data:any){
      let j=$(this).attr('data-id');
      debugger

      // moduleviewservice.putSingleId(j);
      // route.navigate( ['/home', {outlets: {'menu': 'home/editModule'}}]);
    }); */
  }

  public changePage(page:any, data:Array<any> = this.data):Array<any> {
    let start = (page.page - 1) * page.itemsPerPage;
    let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
    return data.slice(start, end);
  }

  public changeSort(data:any, config:any):any {
    if (!config['sorting']) {
      return data;
    }

    let columns = this.config['sorting'].columns || [];
    let columnName:string = void 0;
    let sort:string = void 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i].sort !== '' && columns[i].sort !== false) {
        columnName = columns[i].name;
        sort = columns[i].sort;
      }
    }

    if (!columnName) {
      return data;
    }

    // simple sorting
    return data.sort((previous:any, current:any) => {
      if (previous[columnName] > current[columnName]) {
        return sort === 'desc' ? -1 : 1;
      } else if (previous[columnName] < current[columnName]) {
        return sort === 'asc' ? -1 : 1;
      }
      return 0;
    });
  }

  public globalSearch(globalSearchText){
    let config = {
      ...this.config,
      filtering:{
        ...this.config['filtering'],
        "filterString":globalSearchText
      }
    }
    this.onChangeTable(config);
  }

  public changeFilter(data:any, config:any):any {
    console.log(this.config)
    let filteredData:Array<any> = data;
    this.columns.forEach((column:any) => {
      if (column.filtering) {
        filteredData = filteredData.filter((item:any) => {
          return item[column.name].toLowerCase().match(column.filtering.filterString.toLowerCase());
        });
      }
    });

    if (!config.filtering) {
      return filteredData;
    }

    if (config.filtering.columnName) {
      return filteredData.filter((item:any) =>
        item[config['filtering'].columnName].toLowerCase().match(this.config['filtering'].filterString.toLowerCase()));
    }

    let tempArray:Array<any> = [];
    filteredData.forEach((item:any) => {
      let flag = false;
      this.columns.forEach((column:any) => {
        if (item[column.name].toString().toLowerCase().match(this.config['filtering'].filterString.toLowerCase())) {
          flag = true;
        }
      });
      if (flag) {
        tempArray.push(item);
      }
    });
    filteredData = tempArray;

    return filteredData;
  }

  public onChangeTable(config:any, page:any = {page: this.page, itemsPerPage: this.itemsPerPage}):any {
    if (config.filtering) {
      Object.assign(this.config['filtering'], config.filtering);
    }

    if (config['sorting']) {
      Object.assign(this.config['sorting'], config['sorting']);
    }

    let filteredData = this.changeFilter(this.data, this.config);
    let sortedData = this.changeSort(filteredData, this.config);
    this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;
    this.length = sortedData.length;
  }

  public onCellClick(data: any): any {
    console.log(data)
    // If Button View
    if (data.column == "name") {
      this.router.navigate(['/main/home/asset/',data.row['id'] ]);
    }
    if (data.column == "agreement_no") {
      this.router.navigate(['/main/home/agreementNo/',data.row['id'] ]);
    }    
    if (data.column == "actionAsset") {
      // data.row['id']
      // alert("actionAsset")
      this.change.emit(data.row['id']);
    }
    if (data.column == "actionAgreement") {
      // data.row['id']
      // alert("actionAsset")
      this.change.emit(data.row['id']);
    }
    // If Button View
    // if (data.column == "action") {
    //   this.router.navigate(['/view', this.selectedDocument.doknr]);
    // }
  }
  public static downloadcsv(data: any, exportFileName: string) {
    var csvData = this.convertToCSV(data);

    var blob = new Blob([csvData], { type: "text/csv;charset=utf-8;" });

    if (navigator.msSaveBlob) { // IE 10+
      navigator.msSaveBlob(blob, this.createFileName(exportFileName))
    } else {
      var link = document.createElement("a");
      if (link.download !== undefined) { // feature detection
        // Browsers that support HTML5 download attribute
        var url = URL.createObjectURL(blob);
        link.setAttribute("href", url);
        link.setAttribute("download", this.createFileName(exportFileName));
        //link.style = "visibility:hidden";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      }
    }
  }
  exporttoCSV() {
    let exprtcsv: any[] = [];
    // let columns = this.config.columns;
    (<any[]>JSON.parse(JSON.stringify(this.data))).forEach(x => {
        var obj = new Object();
        var frmt = new Format();
        for (var i = 0; i < this.columns.length; i++) {
          let transfrmVal = frmt.transform(x[this.columns[i].name],
            this.columns[i].filter);
          obj[this.columns[i].title] = transfrmVal;
        }
        exprtcsv.push(obj);
      }
    );
    TableDemoComponent.downloadcsv(exprtcsv, this.exportFileName);
  }
  private static convertToCSV(objarray: any) {
    var array = typeof objarray != 'object' ? JSON.parse(objarray) : objarray;

    var str = '';
    var row = "";

    for (var index in objarray[0]) {
      //Now convert each value to string and comma-separated
      row += index + ',';
    }
    row = row.slice(0, -1);
    //append Label row with line break
    str += row + '\r\n';

    for (var i = 0; i < array.length; i++) {
      var line = '';
      for (var index in array[i]) {
        if (line != '') line += ','
        line += JSON.stringify(array[i][index]);
      }
      str += line + '\r\n';
    }
    return str;
  }

  private static createFileName(exportFileName: string): string {
    var date = new Date();
    return (exportFileName +
      date.toLocaleDateString() + "_" +
      date.toLocaleTimeString()
      + '.csv')
  }
}
