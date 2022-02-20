import { Component } from "@angular/core";


interface Team {
    image: string;
    name: string;
    position: string;
}

interface Messenger {
    icon: string;
}

@Component({
    selector: "app-team",
    templateUrl: "./team.component.html",
    styleUrls: ["./team.component.sass"]
})
export class TeamComponent {
    title: string = "Our Team Member"
    description: string = 
        `
            Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam,
        `
    team: Team[] = [
        {image: "/assets/nurik.jpg", name: "Nursultan Nazarbayev", position: "Former President of Kazakhstan"},
        {image: "/assets/putin.jpeg", name: "Vladimir Putin", position: "President of Russia"},
        {image: "/assets/tramp.jpg", name: "Donald Trump", position: "45th U.S. President"},
    ]

    messengers: Messenger[] = [
        {icon: "bi bi-facebook"},
        {icon: "bi bi-twitter"},
        {icon: "bi bi-chat"},
        {icon: "bi bi-globe"}
    ]
}