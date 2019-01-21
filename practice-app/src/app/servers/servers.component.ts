import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServe: boolean = false;
  serverCreationStatus = 'No server created!';
  serverName: string = 'Test';
  serverCreated: boolean = false;
  servers: string[] = ['Server1', 'Server2'];
  show: boolean = true;
  logs: number[] = [];

  constructor() { 
    setTimeout(() => {
      this.allowNewServe = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created! Name is: ' + this.serverName;
  }

  onUpdateName(event: any) {
    this.serverName = event.target.value;
  }

  onDisplayDetails() {
    this.logs.push(this.logs.length + 1);
    this.show = !this.show;
  }
  
  getBColor(log) {
    return log> 4 ? 'blue' : 'transparent';
  }
}
