import { Injectable } from "../../node_modules/@angular/core";
import { LoggingService } from './logging.service';
import { EventEmitter } from '@angular/core';

@Injectable()
export class AccountService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];

  updateStatus = new EventEmitter<string>();

  constructor(private loggingService: LoggingService) {}


  addAccount(name: string, status: string) {
    this.accounts.push({name: name, status: status});
    this.loggingService.logStatusChange(status);
  }

  editAccount(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange('created');
  }
}