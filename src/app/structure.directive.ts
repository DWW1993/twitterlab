import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { LoginComponent } from './login/login.component';

@Directive({ selector: '[myStructure]'})
export class StructureDirective {
    constructor() {}

        @Input() set myStructure(myStructure: string) {
            const num = myStructure.includes("1" || "2" || "3" || "4" || "5" || "6" || "7" || "8" || "9" || "0")
            if (!num) {
                console.log("weak")
            } else {
                console.log("average")
            }
            
        }
}