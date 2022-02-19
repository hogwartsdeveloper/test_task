import { Component } from "@angular/core";

interface itemProps {
    icon: string;
    title: string;
    description: string;
}

@Component({
    selector: "app-about",
    templateUrl: "./about.component.html",
    styleUrls: ["./about.component.sass"]
})
export class AboutComponent {
    title: string = "About Us";
    description: string = 
        `
            Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam,
        `
    aboutItems: itemProps[] = [
        {icon: "/assets/internet.svg", title: "Awesome Icons", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"},
        {icon: "/assets/transfer.svg", title: "One Page", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"},
        {icon: "/assets/head.svg", title: "Fully Responsive", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"},
    ]
}