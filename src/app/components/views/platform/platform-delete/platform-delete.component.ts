import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Platform } from '../platform.model';
import { PlatformService } from '../platform.service';

@Component({
  selector: 'app-platform-delete',
  templateUrl: './platform-delete.component.html',
  styleUrls: ['./platform-delete.component.css']
})
export class PlatformDeleteComponent implements OnInit {

  platform: Platform = {
    platformId: '',
    platformName: ''
  }

  constructor(private service: PlatformService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.platform.platformId = this.route.snapshot.paramMap.get('platformId')!
    this.findById()
  }

  findById(): void{
    this.service.findById(this.platform.platformId!).subscribe((answer) =>{
      this.platform.platformName = answer.platformName
      console.log(answer)
    })
  }

  deletePlatform(): void {
    this.service.deletePlatform(this.platform.platformId!).subscribe((answer) => {
      this.router.navigate(['platform'])
      this.service.message('Successfully deleted!')
    }, err =>{
      this.service.message(err.error.error)
    })
  }

  cancel(): void {
    this.router.navigate(['platform'])
  }
}
