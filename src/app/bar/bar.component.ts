import { Component } from "@angular/core";

interface navProps {
    name: string;
    icon: boolean;
    path: string;
}

@Component({
    selector: "bar",
    templateUrl: "./bar.component.html",
    styleUrls: ["./bar.component.sass"]
})
export class BarComponent {
    logoText: string = "Test Task Project";
    navLinks: navProps[] = [
        {name: 'Home', icon: false, path: ""},
        {name: 'About', icon: false, path: "about"},
        {name: 'Servising', icon: false, path: "services"},
        {name: 'Our Team', icon: false, path: "team"},
        {name: "Contact us", icon: false, path: "contact"},
        {name: "bi bi-search", icon: true, path: ""}
    ]
}