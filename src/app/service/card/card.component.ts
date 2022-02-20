import { AfterViewInit, Component, Input, OnChanges, OnInit, SimpleChanges } from "@angular/core";
import { Service } from "../service.component";

@Component({
    selector: "service-card",
    templateUrl: "./card.component.html",
    styleUrls: ["card.component.sass"]
})
export class CardComponent implements OnInit, OnChanges{

    @Input() service: Service = {
        name: ""
    }

    @Input() serviceIcon: string = ''
    @Input() serviceDescription: string = ''
    @Input() serviceButton: string = ''

    constructor(){}

    ngOnInit(): void {
        
    }

    ngOnChanges(changes: SimpleChanges): void {
    }

    changeServiceIcon() {
        this.serviceIcon = "/assets/smartphone.svg";
        console.log(this.serviceIcon)

        
    }

    reChangeServiceIcon() {
        this.serviceIcon = "/assets/smartphone_copy.svg"
        console.log(this.serviceIcon)
    }
}