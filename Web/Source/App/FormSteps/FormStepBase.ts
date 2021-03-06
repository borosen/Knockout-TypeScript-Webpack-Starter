﻿import { FormStepsManager } from "App/FormSteps/FormStepsManager";

export class FormStepBase  {

    visible: KnockoutObservable<boolean>;
    active: KnockoutObservable<boolean>;
    order: number;
    formStep: FormStepEnum;
    
    nextStep: FormStepBase;
    previousStep: FormStepBase;
    
    validationModel: KnockoutObservable<any>[];

    constructor(params) {

        this.order = params.order;
        this.validationModel = new Array<KnockoutObservable<any>>();

        FormStepsManager.addFormStep(this);

        this.visible = ko.observable(false);
        this.active = ko.observable(true);
    }
}

export enum FormStepEnum {

    FormStepSelectProducts,
    FormStepPersonalDetails,
    FormStepCheck,
    FormStepThanks
}