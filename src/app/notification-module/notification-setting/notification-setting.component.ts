import { Component, OnInit } from '@angular/core';
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

  optionsSettings:Array<SettingOptions>;
  constructor(private _options:dataService) { }
  selectedCountry:any;

  /* ngOnInit() {
    this.optionsSettings=this._options.getNotificationOptions();
    $('#multiselect2').multiselect({
      afterMoveToRight:function ($left, $right,options) {
        //alert('notif')
        console.log('afterMoveToLeft values length',options.length)
        console.log('afterMoveToLeft values length',options)
        for (let i = 0; i < options.length; i++) {
             console.log('options[i] ',options[i].value)
             console.log('data',options[i].selected)
        }
      },
      afterMoveToLeft:function ($left, $right,options) {
        //alert('notif')        
        console.log('afterMoveToLeft values length',options.length)
        console.log('afterMoveToLeft values length',options)
        for (let i = 0; i < options.length; i++) {
          console.log('options[i] ',options[i].value)
          console.log('data',options[i])
        }
      },
    });
  } */

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
  