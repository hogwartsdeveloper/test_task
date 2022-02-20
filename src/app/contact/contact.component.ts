import { Component } from "@angular/core";

interface Contacts {
    icon: string;
    contact: string;
}

@Component({
    selector: "app-contact",
    templateUrl: "./contact.component.html",
    styleUrls: ["./contact.component.sass"]
})
export class ContactComponent {
    title: string = "Contact Us"
    description: string = `
        Lorem ipsum dolor sit amet, 
        consectetur adipisicing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
        Ut enim ad minim veniam,
        `
    contacts: Contacts[] = [
        {icon: "bi bi-geo-alt", contact: "Astana Expo"},
        {icon: "bi bi-telephone", contact: "+77056481305"},
        {icon: "bi bi-envelope", contact: "jannuraidynuly@gmail.com"},
    ]
}