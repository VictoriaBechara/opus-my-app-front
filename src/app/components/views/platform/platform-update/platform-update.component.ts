import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { Platform } from "../platform.model";
import { PlatformService } from "../platform.service";

@Component({
  selector: "app-platform-update",
  templateUrl: "./platform-update.component.html",
  styleUrls: ["./platform-update.component.css"],
})
export class PlatformUpdateComponent implements OnInit {
  platformName = new FormControl("", [Validators.minLength(5)]);

  platform: Platform = {
    platformId: "",
    platformName: "",
  };

  constructor(
    private router: Router,
    private service: PlatformService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.platform.platformId = this.route.snapshot.paramMap.get("platformId")!;
    this.findById();
  }

  findById(): void {
    this.service.findById(this.platform.platformId!).subscribe((answer) => {
      this.platform.platformName = answer.platformName;
    });
  }

  updatePlatform(): void {
    this.service.updatePlatform(this.platform).subscribe(
      (answer) => {
        this.router.navigate(["platform"]);
        this.service.message("Successfully updated!");
      },
      (err) => {
        this.service.message("operation fail");
      }
    );
  }

  getMessage() {
    if (this.platformName.invalid) {
      return "5 - 100 characters";
    }

    return false;
  }

  cancel(): void {
    this.router.navigate(["platform"]);
  }
}
