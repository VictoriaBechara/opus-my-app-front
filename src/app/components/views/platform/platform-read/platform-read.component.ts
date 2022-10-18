import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '../platform.model';
import { PlatformService } from '../platform.service';

@Component({
  selector: 'app-platform-read',
  templateUrl: './platform-read.component.html',
  styleUrls: ['./platform-read.component.css']
})
export class PlatformReadComponent implements OnInit {

  platform: Platform[] = [];

  displayedColumns: string[] = ['platformId', 'platformName', 'game', 'actions'];

  constructor(private service: PlatformService, private router: Router) { }

  ngOnInit(): void {
    this.findAll();
  }

  findAll(){
    this.service.findAll().subscribe(answer => {
      console.log(answer);
      this.platform = answer;
    })
  }
  
  NavToPlatformCreate(){
    this.router.navigate(["platform/createPlatform"])
  }

}
