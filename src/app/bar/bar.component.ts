import { Component } from "@angular/core";

interface navProps {
    name: string;
    icon: boolean;
}

@Component({
    selector: "bar",
    templateUrl: "./bar.component.html",
    styleUrls: ["./bar.component.sass"]
})
export class BarComponent {
    logoText: string = "Test Task Project";
    navLinks: navProps[] = [
        {name: 'Home', icon: false},
        {name: 'About', icon: false},
        {name: 'Servising', icon: false},
        {name: 'Portfolio', icon: false},
        {name: 'Blog', icon: false},
        {name: "Contact us", icon: false},
        {name: "bi bi-search", icon: true}
    ]
}