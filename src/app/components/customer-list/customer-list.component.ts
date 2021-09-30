import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: any;
  currentCustomer = null;
  currentIndex = -1;
  name = '';


  constructor(
    private customerService: CustomerService,
    private route: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    this.readCustomers();
  }

  sortByDate( a, b ) {
    if ( a.created_on < b.created_on ){
      return -1;
    }
    if ( a.created_on > b.created_on ){
      return 1;
    }
    return 0;
  }

  readCustomers(): void {
    this.customerService.readAll()
      .subscribe(
        customers => {
          this.customers = customers;
            
          customers.sort(this.sortByDate).reverse()
          console.log(customers);
        },
        error => {
          console.log(error);
        });
  }

  refresh(): void {
    this.readCustomers();
    this.currentCustomer = null;
    this.currentIndex = -1;
  }

  setCurrentCustomer(customer, index): void {
    this.currentCustomer = customer;
    this.currentIndex = index;
  }
  
  deleteCustomer(): void {
    this.customerService.delete(this.currentCustomer.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/customers']);
          this.refresh();
        },
        error => {
          console.log(error);
        });
  }


}
