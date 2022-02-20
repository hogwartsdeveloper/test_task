import { Component, OnInit, SimpleChange } from "@angular/core";


export interface Service {
    name: string;
}

@Component({
    selector: "app-service",
    templateUrl: "./service.component.html",
    styleUrls: ["./service.component.sass"]
})
export class ServiceComponent implements OnInit{
    ngOnInit(): void {
        
    }
    serviceIcon: string = "/assets/smartphone_copy.svg"
    title: string = "Our Services"
    description: string =  
        `
            Lorem ipsum dolor sit amet, 
            consectetur adipisicing elit, 
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam,
        `
    buttonText: string = "READ MORE"
    
    services: Service[] = [
        {name: "Research"},
        {name: "Portfolio"},
        {name: "Support"},
        {name: "Documentation"},
        {name: "Development"},
        {name: "Design"},
    ]
}