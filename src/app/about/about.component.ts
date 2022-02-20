import { Component } from "@angular/core";
import { Title } from "../section-title/section-title.component";

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
    title: Title = {
        title: "About Us",
        description: `
            Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam,
        `,
        color: true
    }

    aboutItems: itemProps[] = [
        {icon: "/assets/internet.svg", title: "Awesome Icons", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"},
        {icon: "/assets/transfer.svg", title: "One Page", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"},
        {icon: "/assets/head.svg", title: "Fully Responsive", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor"},
    ]
}