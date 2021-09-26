import { Component, OnInit } from '@angular/core';
import { BooklistService } from '../booklist.service';
import { ServerService } from '../server.service';
import { RouterServiceService } from '../router-service.service';

@Component({
  selector: 'app-recommendation',
  templateUrl: './recommendation.component.html',
  styleUrls: ['./recommendation.component.css']
})
export class RecommendationComponent implements OnInit {

  result:Array<any>=[];
  arr1:Array<Array<string>>=[];
  arr2:Array<any>=[];
  arr3:Array<any>=[];
  arr4:Array<any>=[];
  arr5:Array<any>=[];
  arr6:Array<any>=[];
  usernames:Array<any>=[];
  i:number=0;
  j:number=0;
  k:number=0;
  m:number=0;
  constructor(private routerService:RouterServiceService ,private googleApiService:BooklistService,private internalService: ServerService) { }

  ngOnInit() {
   // if(sessionStorage.getItem('key')==null)
   //// {
     // this.routerService.routeToDashboard();
    ////}
    //else
    {

    this.internalService.getRecommendedBook().subscribe(
      data =>{
        this.result=data;
        console.log(data.length);
        console.log(this.result);
        for(this.i=0;this.i<this.result.length;this.i++)
        {
          this.arr3.push(this.result[this.i]['bookId']);
        }
        console.log(this.arr3);
        for(this.j=0;this.j<this.arr3.length;this.j++)
        {
            if(this.arr4.indexOf(this.arr3[this.j])==-1)
            {
                this.arr4.push(this.arr3[this.j]);
            }
        }
        console.log("arr4");
        console.log(this.arr4);
        
        for(this.m=0;this.m<this.arr4.length;this.m++)
        {
          this.arr1.push([]);
        }
        for(this.k=0;this.k<this.result.length;this.k++)
        {
            for(this.m=0;this.m<this.arr4.length;this.m++)
            {
              console.log(this.m);
              console.log(this.k);

              if((this.result[this.k]['bookId'])==this.arr4[this.m])
              {
                console.log(this.result[this.k]['username']);
                
                this.arr1[this.m].push(this.result[this.k]['username']);
              }
              
              
              
            }
            
            this.usernames=[];
            //console.log(this.usernames);
          //console.log(this.arr2);
        }

        //console.log(this.usernames);
        console.log(this.arr1);


        for(this.m=0;this.m<this.arr4.length;this.m++){



          for(let s=0;s<this.result.length;s++)
          {
          if(this.arr4[this.m]==this.result[s]['bookId'])
          {
            
          this.arr6.push(this.arr5);
          this.arr5=[];
          break;
          }
          }
        }
        console.log(this.arr6);
       
       },
      error =>
        {
          console.log("error");
        }
    );
    
  }
}

}
