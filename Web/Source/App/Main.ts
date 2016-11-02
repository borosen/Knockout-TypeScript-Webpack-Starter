﻿import * as ko from 'knockout';
require("expose?ko!knockout");
import es6promise = require('es6-promise');

import { ComponentRegistration } from "App/ComponentRegistration";
import { BookingData } from "App/Models/BookingData";
import { ProductService} from "App/Services/ProductService";


export class Main {

    constructor() {
        
        ComponentRegistration.registerComponents();

        const productsPromise = ProductService.getProductList();

        let loadData = es6promise.Promise.all([productsPromise]).then(
            (result) => {

                let viewModel = new BookingData();

                ko.applyBindings(viewModel);
                Main.initializeValidation();
            });

              
    }

    static initializeValidation() {

        //TussenvoegselValidationRule.init();
        //GeslachtRequiredValidationRule.init();
        //PostcodeValidationRule.init();
        //PhonenumberValidationRule.init();
        //ConditionalRequiredValidationRule.init();
        //IbanValidationRule.init();
        //BirthdateValidationRule.init();
        //NoHtmlValidationRule.init();

        ko.validation.rules['required'].message = 'Dit veld is verplicht';
        ko.validation.rules['email'].message = 'E-mail adres heeft een ongeldig formaat';
        ko.validation.rules['pattern'].message = 'Dit veld heeft een ongeldig formaat';
        ko.validation.rules['maxLength'].message = 'Een maximum van {0} karakters is toegestaan';
        ko.validation.rules['minLength'].message = 'Een minimum van {0} karakters is vereist';
        ko.validation.rules['min'].message = 'Een getal gelijk of groter dan {0} is vereist';
        ko.validation.registerExtenders();

        ko.validation.init({
            insertMessages: false,
            grouping: {
                deep: true,
                live: true,
                observable: true
            }
        }, true);
    }

}


let main = new Main();