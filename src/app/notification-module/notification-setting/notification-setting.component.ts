import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { SettingOptions } from '../../SettingOptions';
import { dataService } from '../../dataService.service';
declare var multiselect:any;
declare var $ :any;

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
    this._options.currentNotifSetting.subscribe(message => {
      console.log('message ',message)
      this.optionsSettings = message
      // this.userList = response["data"];
      this.userList = message;
      for(let user of this.userList){
        // var tempUser = new memberUser(user)
        this.allUsers.push(user);
        // var tempUser1 = new memberUser(user)
        this.notSelectedUserList.push(user);
      }
    })
  }
  findField(v: any): any {
    for (let f of this.allUsers){
      if (f.name === v)
        return f;
    }
    return null;
  }
  findNotSelectedVariable(nm: string): number {
    // debugger
    for (let i: number = 0; i < this.notSelectedUserList.length; i++){
      if (nm === this.notSelectedUserList[i].name)
        return i;
    }
    return -1;
  }
  findSelectedVariable(nm: string) {
    // debugger
      for (let i: number = 0; i < this.selectedUserList.length; i++)
        if (nm === this.selectedUserList[i].name)
          return i;
    return -1;
  }
  arrowClick(valueStatus: boolean, all:boolean=false) {
    // debugger
    let option = valueStatus ? this.elField.nativeElement.options : this.elSelectField.nativeElement.options;
    // debugger
    for (let l of option) {
      let v: any = this.findField(l.value);
      if (l.selected || all) {
        if (valueStatus) {
          //right arrow click
          this.selectedUserList.push(v);
          this.notSelectedUserList.splice(this.findNotSelectedVariable(v.name), 1);
        } else {
          //left arrow click
          this.notSelectedUserList.push(v);
          this.selectedUserList.splice(this.findSelectedVariable(v.name), 1);
        }
      }
    }
  }

  ngOnInit() {
    this._options.currentNotifSetting.subscribe(message => {
      console.log('message ',message)
      this.optionsSettings = message
    })
    // this.optionsSettings=this._options.getDashboardOptions();
    const optionsSettingsTemp =  this.optionsSettings
    let that = this
    $('#multiselect2').multiselect({
      afterMoveToRight:function ($left, $right,options) {
        console.log('afterMoveToLeft values length',options.length)
        console.log('afterMoveToLeft values length',options)
        const arr = []
        for (let i = 0; i < options.length; i++) {
             console.log('options[i] ',options[i])
             console.log('options[i] ',options[i].value.split(`'`)[1])
             console.log('data',options[i].selected)
             arr.push(options[i].value.split(`'`)[1])
        }
        console.log('arr',arr)
        let k = [...optionsSettingsTemp]

        arr.map(ar=>{
          let foundIndex = optionsSettingsTemp.findIndex(opt=>opt.id===ar)
          console.log(foundIndex)
           k = [...k.slice(0, foundIndex),
            Object.assign({}, k[foundIndex], {selected: true}),
            ...k.slice(foundIndex + 1)]
        });
          console.log('k',k)
          that._options.sendSettings(k,2)
      },
      
      afterMoveToLeft:function ($left, $right,options) {
        console.log('afterMoveToLeft values length',options.length)
        console.log('afterMoveToLeft values length',options)
        const arr = []
        debugger
        for (let i = 0; i < options.length; i++) {
             console.log('options[i] ',options[i])
             console.log('options[i] ',options[i].value.split(`'`)[1])
             console.log('data',options[i].selected)
             arr.push(options[i].value.split(`'`)[1])
        }
        console.log('arr',arr)
        let k = [...optionsSettingsTemp]

        arr.map(ar=>{
          let foundIndex = optionsSettingsTemp.findIndex(opt=>opt.id===ar)
          console.log(foundIndex)

           k = [...k.slice(0, foundIndex),
            Object.assign({}, k[foundIndex], {selected: false}),
            ...k.slice(foundIndex + 1)]
        });
        console.log('k',k)
        that._options.sendSettings(k,2)
      },
    });
  }
}
