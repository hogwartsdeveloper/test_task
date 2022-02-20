import { Component, Input } from "@angular/core";

export interface Title {
    title: string;
    description: string;
    color: boolean;
}

@Component({
    selector: "section-title",
    templateUrl: "./section-title.component.html",
    styleUrls: ["./section-title.component.sass"]
})
export class SectionTitleComponent {
    @Input() title: Title = {
        title: '',
        description: '',
        color: true
    }
}