import { Component, OnInit } from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { Platform } from "../platform.model";
import { PlatformService } from "../platform.service";

@Component({
  selector: "app-platform-create",
  templateUrl: "./platform-create.component.html",
  styleUrls: ["./platform-create.component.css"],
})
export class PlatformCreateComponent implements OnInit {
  platform: Platform = {
    platformName: "",
  };

  platformName = new FormControl("", [Validators.minLength(3)]);

  constructor(private service: PlatformService, private router: Router) {}

  ngOnInit(): void {}

  getMessage() {
    if (this.platformName.invalid) {
      return "5 - 100 characters";
    }

    return false;
  }

  createPlatform(): void {
    this.service.createPlatform(this.platform).subscribe(
      (answer) => {
        this.router.navigate(["platform"]);
        this.service.message("platform created successfully!");
      },
      (err) => {
        for (let i = 0; i < err.error.errors.length; i++) {
          this.service.message(err.error.errors[i].message);
        }
      }
    );
  }

  cancel(): void {
    this.router.navigate(["platform"]);
  }
}
