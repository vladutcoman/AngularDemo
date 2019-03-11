import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/shared/data-storage.service';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private dataStorageServiceL: DataStorageService, public authService: AuthService) { }

  ngOnInit() {
  }

  onSaveData() {
    this.dataStorageServiceL.storeRecipe()
      .subscribe((response: Response) => {
        console.log(response);
        
      });
  }

  onLogout() {
    this.authService.logout();
  }

}
