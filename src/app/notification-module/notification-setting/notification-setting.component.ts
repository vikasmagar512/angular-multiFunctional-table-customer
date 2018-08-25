import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { SettingOptions } from '../../SettingOptions';
import { dataService } from '../../dataService.service';

@Component({
  selector: 'app-notification-setting',
  templateUrl: './notification-setting.component.html',
  styleUrls: ['./notification-setting.component.css']
})
export class NotificationSettingComponent implements OnInit {
  @ViewChild('field') elField: ElementRef;
  @ViewChild('selectField') elSelectField: ElementRef;
  userList : any = [];

  selectedUserList : any = [];
  allUsers : any = []
  userList1: Array<SettingOptions> = []
  notSelectedUserList : any = [];
  selectedCountry:any;
  optionsSettings:Array<SettingOptions>;
  constructor(private _options:dataService) {
    this.getUserList();
  }
  getUserList(){
    this._options.notifSetting.subscribe(message => {
      console.log('message ',message)
      this.optionsSettings = message
      // this.userList = response["data"];
      this.userList = message;
      this.allUsers =[]
      this.notSelectedUserList =[]
      this.selectedUserList =[]
      for(let user of this.userList){
        // var tempUser = new memberUser(user)
        this.allUsers.push(user);
        // var tempUser1 = new memberUser(user)
        this.notSelectedUserList.push(user);
      }
    })
  }
  findField=(allUsers,v: any): any => allUsers.find((f)=>f.name === v)
  findNotSelectedVariable = (notSelectedUserList,nm: string): number =>notSelectedUserList.findIndex((item)=>nm === item.name)
  findSelectedVariable=(selectedUserList,nm: string)=> selectedUserList.findIndex((item)=>nm === item.name)

  arrowClick(valueStatus: boolean, all:boolean=false) {
    let option = valueStatus ? this.elField.nativeElement.options : this.elSelectField.nativeElement.options;
    for (let l of option) {
      let v: any = this.findField(this.allUsers,l.value);
      if (l.selected || all) {
        if (valueStatus) {
          //right arrow click
          this.selectedUserList.push(v);
          this.notSelectedUserList.splice(this.findNotSelectedVariable(this.notSelectedUserList,v.name), 1);
        } else {
          //left arrow click
          this.notSelectedUserList.push(v);
          this.selectedUserList.splice(this.findSelectedVariable(this.selectedUserList,v.name), 1);
        }
      }
    }
    let finalArray = [...this.selectedUserList.map((item)=>({...item,selected:true})),...this.notSelectedUserList.map((item)=>({...item,selected:false}))]
    debugger
    // this._options.sendSettings(finalArray,0)
  }
  ngOnInit() {  }
}
