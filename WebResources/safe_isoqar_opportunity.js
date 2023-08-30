if (typeof Safe === "undefined")
    Safe = {};
if (typeof Safe.Opportunity === "undefined")
    Safe.Opportunity = {};

Safe.Opportunity.Isoqar = new function () {
    this.Constants = {
        Opportunity: {
            AcadOpportunityProducts: "samar_rollupacadopportunityproducts"
        },
        BpfStagesIds: {
            Propose: "a5ab5ba0-6950-4c42-9de7-9cce6cebe16a"
        },
        Subgrids: {
            "EaCodes": "SG_ActiveEACodes"
        }
    };

    this.onLoad = async function (executionContext) {
        let formContext = executionContext.getFormContext();

        // On stage change
        Safe.FormContext.addOnPreStageChange(formContext, this.validateEaCodes);
    };

    this.validateEaCodes = async function (executionContext) {
        const formContext = executionContext.getFormContext();

        let acadOpportunityProducts = Safe.FormContext.getAttributeValue(formContext, Safe.Opportunity.Isoqar.Constants.Opportunity.AcadOpportunityProducts);

        if (acadOpportunityProducts !== 0) {
            return;
        }

        const currentBpfStage = Safe.FormContext.getSelectedStage(formContext);


        let bpfArguments = executionContext.getEventArgs();

        if (currentBpfStage && currentBpfStage.getId() === Safe.Opportunity.Isoqar.Constants.BpfStagesIds.Propose && bpfArguments.getDirection() === "Next") {

            // Work around because .preventDefault() not working with web api retrieve multiple :(
            let eaCodesSubgridRecordsNumber = Safe.FormContext.getSubGridRowsLength(formContext, Safe.Opportunity.Isoqar.Constants.Subgrids.EaCodes);

            if (eaCodesSubgridRecordsNumber === 0) {
                bpfArguments.preventDefault();
                Safe.FormContext.openErrorDialog({ errorCode: "EAC002", details: "Please add EA Codes before continuing", message: "Please add EA Codes before continuing" });
            }
        }
    }
};