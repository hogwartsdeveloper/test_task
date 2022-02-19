import { Component } from "@angular/core";


interface service {
    name: string;
}

@Component({
    selector: "app-service",
    templateUrl: "./service.component.html",
    styleUrls: ["./service.component.sass"]
})
export class ServiceComponent {
    title: string = "Our Services"
    description: string =  
        `
            Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam,
        `
    
    services: service[] = [
        {name: "Research"},
        {name: "Portfolio"},
        {name: "Support"},
        {name: "Documentation"},
        {name: "Development"},
        {name: "Design"},
    ]
}