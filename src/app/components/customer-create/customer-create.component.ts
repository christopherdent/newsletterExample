import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customer = {
    name: '',
    email: '',
    available: false
  };
  submitted = false;



  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
  }


  createCustomer(): void {
    const data = {
      name: this.customer.name,
      email: this.customer.email
    };

    this.customerService.create(data)
    .subscribe(
      response => {
        console.log(response);
        this.submitted = true;
      },
      error => {
        console.log(error);
      });
}


newCustomer(): void {
  this.submitted = false;
  this.customer = {
    name: '',
    email: '',
    available: false
  };
  }


}
