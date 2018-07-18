
export interface NotificationMne{
  "id":string;
  "type":string;
  "contentId":string,
  "image": string;
  "headText": string;
  "shortText": string;
  "link"?:string;
  "readFlag":boolean;
  "timeStamp":string;
}
