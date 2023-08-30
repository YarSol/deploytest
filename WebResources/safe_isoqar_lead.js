if (typeof
    Safe === "undefined")
    Safe = {};

Safe.IsoqarLead = new function () {
    this.Constants = {
        Attributes:
        {
            Brand: "safe_brand",
            LostReasons: "samar_leadlostreasons",
            LostDetails: "samar_eadlostdetails"
        },
        Entities:
        {
            Brand: "safe_brand"
        },
        LostReasonOptionSet: {
            Competitor: 405140000,
            Duplicate: 405140001,
            NotRequired: 405140002,
            UnableToContact: 405140003,
            Other: 405140004,
            ProductNotAvailable: 405140005,
            PriceValue: 405140006,
            PoorService: 405140007,
            Covid19: 405140008,
            Software: 405140013,
            ChangeToBusinessOperation: 405140014

        },
        LostDetailsOptionSet: {
            TwelveMonthsToCertification: 127150008,
            SixMonthsToCertification: 127150009,
            TwelvePlusMonthsAwayFromDecision: 127150000,
            TreeCallCloseNoContact: 127150010,
            SixPlusMonthsAwayFromDecision: 127150001,
            AchievedObjectives: 405140072,
            Acquisition: 405140088,
            AdditionalFunctionalityAvailableElsewhere: 405140079,
            Administration: 405140089,
            AerospaceAS9100: 127150014,
            AgedDebt: 405140076,
            AlcumusCompetitor: 405140090,
            BAFESubSP203205Etc: 127150015,
            BAFEStandalone: 127150016,
            BespokeOffering: 405140068,
            BetterProduct: 405140064,
            BRCVariants: 127150017,
            CampaignCancelled: 405140046,
            CannotAffordTooExpensive: 405140052,
            CannotAffordCashflow: 405140051,
            ChangeToOrganisationalStructure: 405140070,
            ChangeToScopeOfWork: 405140071,
            CheaperPrice: 405140016,
            ClientExemptionConfirmedWithClient: 405140058,
            CompanyDownsize: 405140069,
            CompetitorAccreditation: 405140057,
            CompetitorCheaper: 127150005,
            CompetitorOfferAllRequiredStandards: 127150011,
            CompletedSCAudit: 405140029,
            Consultancy: 405140091,
            ConsultantGuidanceSupport: 405140074,
            ContactHasLeftCompany: 405140034,
            ContactNotAvailable3CC: 127150012,
            ContractorElsewhere: 405140042,
            Cost: 127150018,
            CouldNotReachDecisionMaker: 405140060,
            Decline3rdPartyVerificationRequests: 405140049,
            DoNotRecogniseClient: 405140055,
            DoNotWorkForClient: 405140054,
            DoesntHaveRequiredFeatures: 405140085,
            Duplicate: 127150013,
            eLearningNotProvided: 405140025,
            ExistingClientSalesProcess: 127150003,
            ExistingClientCurrentService: 127150004,
            ExistingCustomer: 405140092,
            ExistingSafeContractorMember: 405140043,
            ExistingSafeSupplierMember: 405140041,
            FinancialDifficulties: 405140075,
            HumanError: 405140008,
            ImprovedServiceOffering: 405140065,
            IncorrectContactDetails: 405140014,
            InsufficientContactDetails: 405140059,
            InsufficientContractValue: 405140053,
            InternationalLead: 405140038,
            JoinedOnline: 127150023,
            LackOfUsage: 405140080,
            LEINotProvided: 405140026,
            LostTender: 405140036,
            LostTenderBid: 405140020,
            MedicalDevices13485: 127150019,
            MergerToExistingAccount: 405140087,
            MoreClients: 405140063,
            MoreScaledBackSolutionRequired: 405140078,
            MultipleSources: 405140007,
            NeedTimeToConsider: 405140050,
            NewClientSalesProcess: 405140019,
            NoAdvantageInTransferring: 405140006,
            NoAdvantageInSwitchingProvider: 405140023,
            NoAuthority: 405140011,
            NoBudget: 405140010,
            NoEngagement: 405140082,
            NoFollowUp: 405140081,
            NoLongerRequired: 405140012,
            NoLongerRequiresCertification: 127150002,
            NoLongerTrading: 405140044,
            NoReasonProvided: 405140024,
            NoReasonProvided2: 405140030,
            NoResponse: 405140032,
            NoResponseFromContact: 405140013,
            NonAccredited: 127150020,
            NonSalesEnquiry: 405140028,
            NonSalesEnquiry2: 405140037,
            NotASupplier: 405140040,
            InContractElsewhere: 779150011,
            NotCurrentlyWorkingForClient: 405140056,
            NotPreparedToCompleteQuestionnaire: 405140035,
            NotPreparedToInstallMS: 405140033,
            NotToBeContacted: 405140061,
            NotUserFriendly: 405140086,
            NotValueForMoney: 405140048,
            OnlyRequiredEstCost: 127150021,
            Other: 405140015,
            OutsideUK: 405140045,
            PoorAdvice: 405140083,
            PoorOnboardingExperience: 405140084,
            PriceDayRate: 405140000,
            PriceDayVolume: 405140001,
            PriceIncrease: 127150006,
            ProductEaseOfSetUp: 405140017,
            ProductFeatureSet: 405140018,
            ProductNotAvailable: 405140039,
            QuickQuoteToHigh: 127150022,
            RefusedToDiscuss: 405140047,
            RefusedToDiscuss2: 127150024,
            RemoveContactDetailsGDPR: 405140062,
            RemovedByClient: 779150000,
            Researching: 405140009,
            Resource: 127150007,
            ResponseTimes: 405140067,
            Service: 405140021,
            ServiceAvailableDates: 405140005,
            ServiceInvoicing: 405140004,
            ServiceProduct: 405140002,
            ServiceSales: 405140003,
            ServiceUndefined: 405140031,
            ServiceExpectationsNotMet: 405140066,
            System: 405140022,
            TakenInHouse: 405140027,
            UpskilledInternallyOrRecruited: 405140077,
            VisitsNotCompleted: 405140073,
            NoQualifications: 779150001,
            LostToCompetitor: 779150002,
            ExistingOpenProspect: 779150003,
            AdminFix: 779150004,
            SupplyOnly: 779150005,
            NeverWorkedForClient: 779150006,
            NoLongerWorkingForClient: 779150010,
            EnquiryMadeInError: 779150007,
            OwnDivision: 779150008,
            OtherDivision: 779150009
        },
        Brands: {
            Alcumus: "f2933ac2-4f14-eb11-a813-000d3a2ed518",
            Epermits: "fae6296c-328e-eb11-b1ac-000d3aab9f8e",
            EGS: "b784debb-9335-ec11-8c64-000d3a2ed514",
            InfoExchange: "210e66d6-4a14-eb11-a813-000d3a2ed518",
            ISOQAR: "5c7362ca-4a14-eb11-a813-000d3a2ed518",
            Mango: "c8f3ddc1-9335-ec11-8c64-000d3a2ed514",
            PQQ: "0db562f4-b344-ed11-bba2-000d3aaae53e",
            Reportline: "ef831cfb-4a14-eb11-a813-000d3a2ed518",
            SafeContractor: "e48cc69f-c14b-ed11-bba1-000d3aaae992",
            SafeSupplier: "19fa7c92-83c6-ea11-a812-000d3a4b274e",
            SafeWorkforce: "4c8bf7ee-4a14-eb11-a813-000d3a2ed518",
            SCCClient: "82df1499-83c6-ea11-a812-000d3a4b274e",
            SimpleCompliance: "074522ff-723d-ec11-8c63-000d3a4a0c5d",
            Sypol: "6eb8fbf4-4a14-eb11-a813-000d3a2ed518"
        }
    };

    // On Load
    this.onLoad = async function (executionContext) {
        const formContext = executionContext.getFormContext();

        Safe.IsoqarLead.leadLostReasonsByBrand(executionContext);

        Safe.FormContext.addOnChange(formContext, Safe.IsoqarLead.Constants.Attributes.LostReasons, Safe.IsoqarLead.OnLosReasonsChange);
    }

    // Fields on change
    this.OnLosReasonsChange = function (executionContext) {
        Safe.IsoqarLead.Leadlostdetails(executionContext);
    }

    // Functions
    this.Leadlostdetails = async function (executionContext) {
        var formContext = executionContext.getFormContext();
        const brandField = Safe.FormContext.getAttributeValue(formContext, Safe.IsoqarLead.Constants.Attributes.Brand);

        if (!brandField || brandField[0].id === null) {
            return;
        }

        const brandId = brandField[0].id.slice(1, -1).toLowerCase();

        if (!brandId) {
            return;
        }

        var lostReason = Safe.FormContext.getAttributeValue(formContext, Safe.IsoqarLead.Constants.Attributes.LostReasons);

        const lostDetailsValues = Safe.FormContext.getPicklistOptions(formContext, Safe.IsoqarLead.Constants.Attributes.LostDetails);
        Safe.FormContext.clearPickListOptions(formContext, Safe.IsoqarLead.Constants.Attributes.LostDetails);

        lostDetailsValues.forEach(function (element) {
            //competitor
            if (brandId === Safe.IsoqarLead.Constants.Brands.ISOQAR && lostReason === Safe.IsoqarLead.Constants.LostReasonOptionSet.Competitor) {
                if (element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.PriceDayRate ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.PriceDayVolume ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.ServiceProduct ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.ServiceSales ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.ServiceInvoicing ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.ServiceAvailableDates ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.NoAdvantageInTransferring ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.ServiceUndefined ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.CompetitorOfferAllRequiredStandards ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.NoAccredited ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.QuickQuoteToHigh) {
                    Safe.FormContext.addPicklistOption(formContext, Safe.IsoqarLead.Constants.Attributes.LostDetails, element);
                }
            }
            //duplicate
            else if ((brandId === Safe.IsoqarLead.Constants.Brands.Alcumus ||
                brandId === Safe.IsoqarLead.Constants.Brands.Sypol ||
                brandId === Safe.IsoqarLead.Constants.Brands.Epermits ||
                brandId === Safe.IsoqarLead.Constants.Brands.SCCClient ||
                brandId === Safe.IsoqarLead.Constants.Brands.InfoExchange ||
                brandId === Safe.IsoqarLead.Constants.Brands.Reportline ||
                brandId === Safe.IsoqarLead.Constants.Brands.ISOQAR ||
                brandId === Safe.IsoqarLead.Constants.Brands.EGS ||
                brandId === Safe.IsoqarLead.Constants.Brands.SimpleCompliance ||
                brandId === Safe.IsoqarLead.Constants.Brands.Mango ||
                brandId === Safe.IsoqarLead.Constants.Brands.SafeWorkforce) &&
                lostReason === Safe.IsoqarLead.Constants.LostReasonOptionSet.Duplicate) {
                if (element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.MultipleSources ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.HumanError ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.ExistingCustomer) {
                    Safe.FormContext.addPicklistOption(formContext, Safe.IsoqarLead.Constants.Attributes.LostDetails, element);
                }
            }
            //not required
            else if (brandId === Safe.IsoqarLead.Constants.Brands.ISOQAR && lostReason === Safe.IsoqarLead.Constants.LostReasonOptionSet.NotRequired) {
                if (element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.Researching ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.NoBudget ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.NoAuthority ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.NotPreparedToInstallMS ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.NotPreparedToCompleteQuestionnaire ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.NonSalesEnquiry ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.TwelveMonthsToCertification ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.SixMonthsToCertification ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.OnlyRequiredEstCost ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.LostTender ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.InternationalLead) {
                    Safe.FormContext.addPicklistOption(formContext, Safe.IsoqarLead.Constants.Attributes.LostDetails, element);
                }
            }
            //unable to contact
            else if (brandId === Safe.IsoqarLead.Constants.Brands.ISOQAR && lostReason === Safe.IsoqarLead.Constants.LostReasonOptionSet.UnableToContact) {
                if (element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.NoResponseFromContact ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.IncorrectContactDetails ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.TreeCallCloseNoContact ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.ContactNotAvailable3CC) {
                    Safe.FormContext.addPicklistOption(formContext, Safe.IsoqarLead.Constants.Attributes.LostDetails, element);
                }
            }
            //other
            else if (brandId === Safe.IsoqarLead.Constants.Brands.ISOQAR && lostReason === Safe.IsoqarLead.Constants.LostReasonOptionSet.Other) {
                if (element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.Other) {
                    Safe.FormContext.addPicklistOption(formContext, Safe.IsoqarLead.Constants.Attributes.LostDetails, element);
                }
            }
            //product not available
            else if (brandId == Safe.IsoqarLead.Constants.Brands.ISOQAR && lostReason === Safe.IsoqarLead.Constants.LostReasonOptionSet.ProductNotAvailable) {
                if (element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.ProductNotAvailable) {
                    Safe.FormContext.addPicklistOption(formContext, Safe.IsoqarLead.Constants.Attributes.LostDetails, element);
                }
            }
            //price or value
            else if (brandId === Safe.IsoqarLead.Constants.Brands.ISOQAR && lostReason === Safe.IsoqarLead.Constants.LostReasonOptionSet.PriceValue) {
                if (element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.CompetitorCheaper ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.PriceIncrease) {
                    Safe.FormContext.addPicklistOption(formContext, Safe.IsoqarLead.Constants.Attributes.LostDetails, element);
                }
            }
            // poor service
            else if (brandId === Safe.IsoqarLead.Constants.Brands.ISOQAR && lostReason === Safe.IsoqarLead.Constants.LostReasonOptionSet.PoorService) {
                if (
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.ExistingClientSalesProcess ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.ExistingClientCurrentService ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.PoorService
                ) {
                    Safe.FormContext.addPicklistOption(formContext, Safe.IsoqarLead.Constants.Attributes.LostDetails, element);
                }
            }
            // Covid19
            else if (brandId === Safe.IsoqarLead.Constants.Brands.ISOQAR && lostReason === Safe.IsoqarLead.Constants.LostReasonOptionSet.Covid19) {
                if (
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.Cost ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.Resource ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.NoLongerRequiresCertification
                ) {
                    Safe.FormContext.addPicklistOption(formContext, Safe.IsoqarLead.Constants.Attributes.LostDetails, element);
                }
            }
            // competitor
            else if (brandId === Safe.IsoqarLead.Constants.Brands.SafeWorkforce && lostReason == Safe.IsoqarLead.Constants.LostReasonOptionSet.Competitor) {
                if (
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.TakenInHouse ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.Researching ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.NoBudget ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.NoAuthority ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.NonSalesEnquiry ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.CheaperPrice ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.CompletedSCAudit ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.NoReasonProvided2
                ) {
                    Safe.FormContext.addPicklistOption(formContext, Safe.IsoqarLead.Constants.Attributes.LostDetails, element);
                }
            }// not required
            else if (brandId == Safe.IsoqarLead.Constants.Brands.SafeWorkforce && lostReason === Safe.IsoqarLead.Constants.LostReasonOptionSet.NotRequired) {
                if (
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.TakenInHouse ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.Researching ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.NoBudget ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.NoAuthority ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.NonSalesEnquiry ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.CheaperPrice ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.CompletedSCAudit ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.NoReasonProvided2
                ) {
                    Safe.FormContext.addPicklistOption(formContext, Safe.IsoqarLead.Constants.Attributes.LostDetails, element);
                }
            }
            // unable to contact
            else if (brandId === Safe.IsoqarLead.Constants.Brands.SafeWorkforce && lostReason === Safe.IsoqarLead.Constants.LostReasonOptionSet.UnableToContact) {
                if (
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.NoResponseFromContact ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.IncorrectContactDetails ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.ContactHasLeftCompany
                ) {
                    Safe.FormContext.addPicklistOption(formContext, Safe.IsoqarLead.Constants.Attributes.LostDetails, element);
                }
            }
            // other
            else if (brandId === Safe.IsoqarLead.Constants.Brands.SafeWorkforce && lostReason === Safe.IsoqarLead.Constants.LostReasonOptionSet.Other) {
                if (element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.OtherValue) {
                    Safe.FormContext.addPicklistOption(formContext, Safe.IsoqarLead.Constants.Attributes.LostDetails, element);
                }
            }
            // product not available
            else if (brandId === Safe.IsoqarLead.Constants.Brands.SafeWorkforce && lostReason === Safe.IsoqarLead.Constants.LostReasonOptionSet.ProductNotAvailable) {
                if (element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.ProductNotAvailableValue) {
                    Safe.FormContext.addPicklistOption(formContext, Safe.IsoqarLead.Constants.Attributes.LostDetails, element);
                }
            }
            // price or value
            else if (brandId === Safe.IsoqarLead.Constants.Brands.SafeWorkforce && lostReason === Safe.IsoqarLead.Constants.LostReasonOptionSet.PriceValue) {
                if (
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.CompetitorCheaper ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.PriceIncrease
                ) {
                    Safe.FormContext.addPicklistOption(formContext, Safe.IsoqarLead.Constants.Attributes.LostDetails, element);
                }
            }
            // poor service
            else if (brandId === Safe.IsoqarLead.Constants.Brands.SafeWorkforce && lostReason == Safe.IsoqarLead.Constants.LostReasonOptionSet.PoorService) {
                if (
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.ExistingClientSalesProcess ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.ExistingClientCurrentService ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.NewClientSalesProcess
                ) {
                    Safe.FormContext.addPicklistOption(formContext, Safe.IsoqarLead.Constants.Attributes.LostDetails, element);
                }
            }
            // Covid19
            else if (brandId === Safe.IsoqarLead.Constants.Brands.SafeWorkforce && lostReason === Safe.IsoqarLead.Constants.LostReasonOptionSet.Covid19) {
                if (
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.Cost ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.Resource
                ) {
                    Safe.FormContext.addPicklistOption(formContext, Safe.IsoqarLead.Constants.Attributes.LostDetails, element);
                }
            }

            // competitor
            else if ((brandId === Safe.IsoqarLead.Constants.Brands.Alcumus ||
                brandId === Safe.IsoqarLead.Constants.Brands.Sypol ||
                brandId === Safe.IsoqarLead.Constants.Brands.Epermits ||
                brandId === Safe.IsoqarLead.Constants.Brands.SCCClient ||
                brandId === Safe.IsoqarLead.Constants.Brands.InfoExchange ||
                brandId === Safe.IsoqarLead.Constants.Brands.Reportline ||
                brandId === Safe.IsoqarLead.Constants.Brands.EGS ||
                brandId === Safe.IsoqarLead.Constants.Brands.SimpleCompliance ||
                brandId === Safe.IsoqarLead.Constants.Brands.Mango) &&
                lostReason === Safe.IsoqarLead.Constants.LostReasonOptionSet.Competitor) {
                if (element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.CheaperPrice ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.MoreScaledBackSolutionRequired ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.AdditionalFunctionalityAvailableElsewhere ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.AlcumusCompetitor ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.Consultancy) {
                    Safe.FormContext.addPicklistOption(formContext, Safe.IsoqarLead.Constants.Attributes.LostDetails, element);
                }
            }
            // price or value
            else if ((brandId === Safe.IsoqarLead.Constants.Brands.Alcumus ||
                brandId === Safe.IsoqarLead.Constants.Brands.Sypol ||
                brandId === Safe.IsoqarLead.Constants.Brands.Epermits ||
                brandId === Safe.IsoqarLead.Constants.Brands.SCCClient ||
                brandId === Safe.IsoqarLead.Constants.Brands.InfoExchange ||
                brandId === Safe.IsoqarLead.Constants.Brands.Reportline ||
                brandId === Safe.IsoqarLead.Constants.Brands.EGS ||
                brandId === Safe.IsoqarLead.Constants.Brands.SimpleCompliance ||
                brandId === Safe.IsoqarLead.Constants.Brands.Mango) &&
                lostReason === Safe.IsoqarLead.Constants.LostReasonOptionSet.PriceValue
            ) {
                if (
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.LackOfUsage ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.TakenInHouse
                ) {
                    Safe.FormContext.addPicklistOption(formContext, Safe.IsoqarLead.Constants.Attributes.LostDetails, element);
                }
            }
            // poor service
            else if ((brandId === Safe.IsoqarLead.Constants.Brands.Alcumus ||
                brandId === Safe.IsoqarLead.Constants.Brands.Sypol ||
                brandId === Safe.IsoqarLead.Constants.Brands.Epermits ||
                brandId === Safe.IsoqarLead.Constants.Brands.SCCClient ||
                brandId === Safe.IsoqarLead.Constants.Brands.InfoExchange ||
                brandId === Safe.IsoqarLead.Constants.Brands.Reportline ||
                brandId === Safe.IsoqarLead.Constants.Brands.EGS ||
                brandId === Safe.IsoqarLead.Constants.Brands.SimpleCompliance ||
                brandId === Safe.IsoqarLead.Constants.Brands.Mango) &&
                lostReason === Safe.IsoqarLead.Constants.LostReasonOptionSet.PoorService
            ) {
                if (
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.NoFollowUp ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.NoEngagement ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.PoorAdvice ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.PoorOnboardingExperience
                ) {
                    Safe.FormContext.addPicklistOption(formContext, Safe.IsoqarLead.Constants.Attributes.LostDetails, element);
                }
            }
            // software
            else if ((brandId === Safe.IsoqarLead.Constants.Brands.Alcumus ||
                brandId === Safe.IsoqarLead.Constants.Brands.Sypol ||
                brandId === Safe.IsoqarLead.Constants.Brands.Epermits ||
                brandId === Safe.IsoqarLead.Constants.Brands.SCCClient ||
                brandId === Safe.IsoqarLead.Constants.Brands.InfoExchange ||
                brandId === Safe.IsoqarLead.Constants.Brands.Reportline ||
                brandId === Safe.IsoqarLead.Constants.Brands.EGS ||
                brandId === Safe.IsoqarLead.Constants.Brands.SimpleCompliance ||
                brandId === Safe.IsoqarLead.Constants.Brands.Mango) &&
                lostReason === Safe.IsoqarLead.Constants.LostReasonOptionSet.Software
            ) {
                if (
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.DoesntHaveRequiredFeatures ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.NotUserFriendly
                ) {
                    Safe.FormContext.addPicklistOption(formContext, Safe.IsoqarLead.Constants.Attributes.LostDetails, element);
                }
            }

            //Unable to Contact
            else if ((brandId === Safe.IsoqarLead.Constants.Brands.Alcumus ||
                brandId === Safe.IsoqarLead.Constants.Brands.Sypol ||
                brandId === Safe.IsoqarLead.Constants.Brands.Epermits ||
                brandId === Safe.IsoqarLead.Constants.Brands.SCCClient ||
                brandId === Safe.IsoqarLead.Constants.Brands.InfoExchange ||
                brandId === Safe.IsoqarLead.Constants.Brands.Reportline ||
                brandId === Safe.IsoqarLead.Constants.Brands.EGS ||
                brandId === Safe.IsoqarLead.Constants.Brands.SimpleCompliance ||
                brandId === Safe.IsoqarLead.Constants.Brands.Mango) &&
                lostReason === Safe.IsoqarLead.Constants.LostReasonOptionSet.UnableToContact) {

                if (element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.NoResponseFromContact ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.IncorrectContactDetails ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.ContactHasLeftCompany) {
                    Safe.FormContext.addPicklistOption(formContext, Safe.IsoqarLead.Constants.Attributes.LostDetails, element);
                }
            }
            //change to business operation
            else if ((brandId == Safe.IsoqarLead.Constants.Brands.Alcumus ||
                brandId === Safe.IsoqarLead.Constants.Brands.Sypol ||
                brandId === Safe.IsoqarLead.Constants.Brands.Epermits ||
                brandId === Safe.IsoqarLead.Constants.Brands.SCCClient ||
                brandId === Safe.IsoqarLead.Constants.Brands.InfoExchange ||
                brandId === Safe.IsoqarLead.Constants.Brands.Reportline ||
                brandId === Safe.IsoqarLead.Constants.Brands.EGS ||
                brandId === Safe.IsoqarLead.Constants.Brands.SimpleCompliance ||
                brandId === Safe.IsoqarLead.Constants.Brands.Mango) &&
                lostReason === Safe.IsoqarLead.Constants.LostReasonOptionSet.ChangeToBusinessOperation) {

                if (element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.MergerToExistingAccount ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.Acquisition ||
                    element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.Administration) {

                    Safe.FormContext.addPicklistOption(formContext, Safe.IsoqarLead.Constants.Attributes.LostDetails, element);
                }
            } else if ((brandId === Safe.IsoqarLead.Constants.Brands.SafeSupplier) && lostReason === Safe.IsoqarLead.Constants.LostReasonOptionSet.Other) {
                if (element.value === Safe.IsoqarLead.Constants.LostDetailsOptionSet.JoinedOnline) {
                    Safe.FormContext.addPicklistOption(formContext, Safe.IsoqarLead.Constants.Attributes.LostDetails, element);
                }
            }
        });
    }


    this.leadLostReasonsByBrand = function (executionContext) {
        const formContext = executionContext.getFormContext();
        const brand = Safe.FormContext.getAttributeValue(formContext, Safe.IsoqarLead.Constants.Attributes.Brand);

        if (!brand || brand[0].id == null) {
            return;
        }

        const brandId = brand[0].id.slice(1, -1).toLowerCase();

        const lostReasonOptionSetValues = Safe.FormContext.getPicklistOptions(formContext, Safe.IsoqarLead.Constants.Attributes.LostReasons);
        Safe.FormContext.clearPickListOptions(formContext, Safe.IsoqarLead.Constants.Attributes.LostReasons);

        lostReasonOptionSetValues.forEach(function (element) {

            if (brandId === Safe.IsoqarLead.Constants.Brands.ISOQAR ||
                brandId === Safe.IsoqarLead.Constants.Brands.SafeWorkforce) {
                if (element.value === Safe.IsoqarLead.Constants.LostReasonOptionSet.Competitor ||
                    element.value === Safe.IsoqarLead.Constants.LostReasonOptionSet.Duplicate ||
                    element.value === Safe.IsoqarLead.Constants.LostReasonOptionSet.NotRequired ||
                    element.value === Safe.IsoqarLead.Constants.LostReasonOptionSet.UnableToContact ||
                    element.value === Safe.IsoqarLead.Constants.LostReasonOptionSet.Other ||
                    element.value === Safe.IsoqarLead.Constants.LostReasonOptionSet.ProductNotAvailable ||
                    element.value === Safe.IsoqarLead.Constants.LostReasonOptionSet.PriceValue ||
                    element.value === Safe.IsoqarLead.Constants.LostReasonOptionSet.PoorService ||
                    element.value === Safe.IsoqarLead.Constants.LostReasonOptionSet.Covid19) {
                    Safe.FormContext.addPicklistOption(formContext, Safe.IsoqarLead.Constants.Attributes.LostReasons, element);
                }
            } else if (brandId === Safe.IsoqarLead.Constants.Brands.Alcumus ||
                brandId === Safe.IsoqarLead.Constants.Brands.Sypol ||
                brandId === Safe.IsoqarLead.Constants.Brands.Epermits ||
                brandId === Safe.IsoqarLead.Constants.Brands.SCCClient ||
                brandId === Safe.IsoqarLead.Constants.Brands.SafeSupplier ||
                brandId === Safe.IsoqarLead.Constants.Brands.InfoExchange ||
                brandId === Safe.IsoqarLead.Constants.Brands.Reportline ||
                brandId === Safe.IsoqarLead.Constants.Brands.EGS ||
                brandId === Safe.IsoqarLead.Constants.Brands.SimpleCompliance ||
                brandId === Safe.IsoqarLead.Constants.Brands.Mango) {
                if (element.value === Safe.IsoqarLead.Constants.LostReasonOptionSet.Competitor ||
                    element.value === Safe.IsoqarLead.Constants.LostReasonOptionSet.Duplicate ||
                    element.value === Safe.IsoqarLead.Constants.LostReasonOptionSet.UnableToContact ||
                    element.value === Safe.IsoqarLead.Constants.LostReasonOptionSet.PriceValue ||
                    element.value === Safe.IsoqarLead.Constants.LostReasonOptionSet.PoorService ||
                    element.value === Safe.IsoqarLead.Constants.LostReasonOptionSet.Software ||
                    element.value === Safe.IsoqarLead.Constants.ChangeToBusinessOperation) {
                    Safe.FormContext.addPicklistOption(formContext, Safe.IsoqarLead.Constants.Attributes.LostReasons, element);
                }
            }
        });
    }
};
