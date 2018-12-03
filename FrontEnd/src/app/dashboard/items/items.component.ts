import { Component,AfterViewChecked } from '@angular/core';
import {Router} from "@angular/router";

declare let paypal :any
@Component({
  selector: 'app-dashboard-items',
  templateUrl: `./items.html`
})
export class ItemsComponent implements AfterViewChecked {
constructor(private router: Router){}
  addScript : boolean = false;
  finalAmount : number = 1;

  paypalConfig = {
    env:'sandbox',
    client:{
      sandbox:'AbRql4dSMuxN_xBoXxai9fug4dY3LL47TbALfBFER90qoYdSvR0r3sO_cUFGiSEQuWvETaD5F7GFQF_P',
      production:'ECosL7UYFYaK455jMjG2C54-scg-HRLfWE1a5Us71j-K3XCrOlNu_q5_OExBgkGwstP6TjFlNNPfj0tu'
    },
    commit:true,
    payment: (data,actions) =>{
      return actions.payment.create({
        payment:{
          transactions:[
            {
              amount:{total:this.finalAmount,currency:'USD'}
            }
          ]
        }
      });
    },
    onAuthorize:(data,actions) =>{
      return actions.payment.execute().then((payment) =>
      {

      })
    }
  }
  ngAfterViewChecked() :void{
    if(!this.addScript){
      this.addPayPalScript().then(()=>{
        paypal.Button.render(this.paypalConfig,'#paypal-checkout-btn')
      })
    }
  }
  Route(){
    this.router.navigate(["/dashboard/groups"]);
  }
  addPayPalScript(){
    this.addScript = true;
    return new Promise((resolve,reject)=>
    {
      let scriptTagElement = document.createElement('script');
      scriptTagElement.src = 'https://www.paypalobjects.com/api/checkout.js';
      scriptTagElement.onload = resolve;
      document.body.appendChild(scriptTagElement);
    })
  }


}
