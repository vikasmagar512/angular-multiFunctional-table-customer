import { Component, OnInit } from '@angular/core';
import { SettingOptions } from '../../SettingOptions';
import { dataService } from '../../dataService.service';
declare var multiselect:any;
declare var $ :any;

@Component({
  selector: 'app-dashboard-setting',
  templateUrl: './dashboard-setting.component.html',
  styleUrls: ['./dashboard-setting.component.css']
})
export class DashboardSettingComponent implements OnInit {
  optionsSettings:Array<SettingOptions>;
  constructor(private _options:dataService) { }
  selectedCountry:any;
  //message:string;
  ngOnInit() {
    this._options.currentDashSetting.subscribe(message => {
      console.log('message ',message)
      this.optionsSettings = message
    })
    // this.optionsSettings=this._options.getDashboardOptions();
    const optionsSettingsTemp =  this.optionsSettings
    let that = this
    $('#multiselect1').multiselect({
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
        debugger

        arr.map(ar=>{
          debugger
          let foundIndex = optionsSettingsTemp.findIndex(opt=>opt.id===ar)
          console.log(foundIndex)
          
           k = [...k.slice(0, foundIndex), 
            Object.assign({}, k[foundIndex], {selected: true}),
            ...k.slice(foundIndex + 1)] 
        }); 
          console.log('k',k)    
          debugger    
          that._options.sendSettings(k,1)
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
        debugger

        arr.map(ar=>{
          debugger
          let foundIndex = optionsSettingsTemp.findIndex(opt=>opt.id===ar)
          console.log(foundIndex)
          
           k = [...k.slice(0, foundIndex), 
            Object.assign({}, k[foundIndex], {selected: false}),
            ...k.slice(foundIndex + 1)] 
        }); 
        console.log('k',k)    
        debugger    
        that._options.sendSettings(k,1)
      },
    });
  }
  
  /* setDashboardOptions(){
    return this.optionsSettings;
  }
   */

}
  