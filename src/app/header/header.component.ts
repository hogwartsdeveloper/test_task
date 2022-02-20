import { Component } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.sass"]
})
export class HeaderComponent {
    title: string = "Web development project";
    description: string = "Very suitable to support all web development projects";
    service_btn: string = "our services"
    hire_btn: string = "hire is now"
}