import { Injectable } from '@angular/core';
import { NotificationMne } from './notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor() { }

  notification: Array<NotificationMne> = [
    {
      "id":"N1",
      "image":"../assets/FemaleAvatar.png",
      "headText":"Printer",
      "shortText":"Toner Level below Threshold",
      "type":"asset",
      "contentId":"02",
      // "link":'<a routerLink="main/asset/'+asset.id+'" routerLinkActive="active">'+asset.name+'</a>',
      /* "link":'<a routerLink="main/home/asset/01" routerLinkActive="active">'+'link'+'</a>', */
      "readFlag":true,
      "timeStamp":"23 hours"
    },
    {
      "id": 'N9',
      "image":"../assets/MaleAvatar.png",
      "headText":"Agreement Expired",
      "type":"contract",
      "link":"anything",
      "shortText":"Needs servicing for Agreement",
      "contentId":"AGR01",
      "readFlag":false,
      "timeStamp":"5 Min"
    },
    {
      "id": 'N2',
      "image":"../assets/FemaleAvatar.png",
      "headText":"Vaccum",
      "type":"asset",
      "contentId":"03",
      "shortText":"Motor needs to be replace",
      "link":'<a routerLink="main/home/asset/03" routerLinkActive="active">'+'link'+'</a>',
      "readFlag":false,
      "timeStamp":"14 hours"
    },
    {
      "id": 'N3',
      "image":"../assets/MaleAvatar.png",
      "headText":"Coffee Machine",
      "type":"asset",
      "contentId":"01",
      "shortText":"Coffee Powder Required",
      "link":'<a routerLink="main/home/asset/01" routerLinkActive="active">'+'link'+'</a>',
      "readFlag":false,
      "timeStamp":"13 hours"
    },
    {
      "id": 'N4',
      "image":"../assets/FemaleAvatar.png",
      "headText":"Coffee Machine",
      "type":"asset",
      "contentId":"02",
      "shortText":"Needs servicing for coffee machine",
      "link":'<a routerLink="main/home/asset/02" routerLinkActive="active">'+'link'+'</a>',
      "readFlag":false,
      "timeStamp":"5 Min"
    },
    /*{
      "id": 'N5',
      "image":"../assets/FemaleAvatar.png",
      "headText":"Printer",
      "type":"asset",
      "contentId":"02",
      "shortText":"Toner Level below Threshold",
      // "link":'<a routerLink="main/asset/'+asset.id+'" routerLinkActive="active">'+asset.name+'</a>',
      "link":'<a routerLink="main/asset/01" routerLinkActive="active">'+'link'+'</a>',
      "readFlag":false,
      "timeStamp":"23 hours"
    },
    {
      "id": 'N6',
      "image":"../assets/FemaleAvatar.png",
      "headText":"Vaccum",
      "type":"asset",
      "contentId":"03",
      "shortText":"Motor needs to be replace",
      "link":'<a routerLink="main/asset/03" routerLinkActive="active">'+'link'+'</a>',
      "readFlag":false,
      "timeStamp":"14 hours"
    },
    {
      "id": 'N7',
      "image":"../assets/MaleAvatar.png",
      "headText":"Coffee Machine",
      "type":"asset",
      "contentId":"01",
      "shortText":"Coffee Powder Required",
      "link":'<a routerLink="main/asset/01" routerLinkActive="active">'+'link'+'</a>',
      "readFlag":false,
      "timeStamp":"13 hours"
    },
    {
      "id": 'N8',
      "image":"../assets/FemaleAvatar.png",
      "headText":"Coffee Machine",
      "type":"asset",
      "contentId":"01",
      "shortText":"Needs servicing for coffee machine",
      "link":'<a routerLink="main/asset/02" routerLinkActive="active">'+'link'+'</a>',
      "readFlag":false,
      "timeStamp":"5 Min"
    }*/
  ];
  getNotification(): NotificationMne[] {
    return this.notification;
  }
}
