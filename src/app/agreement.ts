export interface Agreement {
	"id":string
	"agreement_no": string;
	"type": string;
	"contact": string;
	"start_date": string;
	"end_date": string;
	"termination_date": string;
	"payment_freq": string;
	"Remaining_term": string;
	"term": string;
	"assets_covered": Array<string>;
	"dueDate":string;
    "amount":string;
	"status":string,      
	"invoiceAddress":string;
	/* "customerAddressNumber": number,
	"marketProduct":string,
	"statusCode":string ,
	"balanceOutstanding": string,
	"remainingPayments":number ,
	"futureRentals":number ,
	"leaseStartDate":number ,
	"term":number ,
	"leaseEndDate":number ,
	"primaryArrears":number ,
	"lastDueDate":number ,
	"financedAmount":number ,
	"residualAmount":number ,
	"earlySettlementAmount":number ,
	"upgradeAmount":number ,
	"dealerBranchReference":number ,
	"nextDueDate":number ,
	"maintenanceChargeAmount":number ,
	"salesPersonId": string,
	"branchId":string ,
	"divisionId":string ,
	"upgradeQuoteExpiryDate": number,
	"earlySettlementQuoteExpiryDate": number,
	"vendorSalesId":string ,
	"agreementCurrency":string,
	"invoicingCustomerNumber": number,
	"invoicingCustomerBillingAddress": number,
	"repurchaserNumber": number,
	"repurchaserBillingAddress":string ,
	"siesmartProposalId":string ,
	"rentalAge":number ,
	"rentalRemaining":number ,
	"actualAge":number ,
	"actualRemaining":number ,
	"activationDate":number ,
	"activationUser":string,	
	"activationUserDescription":string,
	"originalMaturityDate": number,
	"dealerArrears": number,
	"totalWriteOffs": number,
	"salesAdministrator":number,
	"thirtyDayArrears":number,
	"badDebtWriteOffs": number,
	"lesseeIrr": number,
	"lessorIrr":number ,
	"pto":number,
	"buybackGuaranteeAmount":number ,
	"rvCoveredByRvGuarantee":number ,
	"otherRvGuarantee":number ,
	"firstYearBadDebt":string,
	"noticeOfTerminationReceived":string,
	"terminationNoticeDate":string ,
	"agreementNumber":string ,
	"scheduleNumber": number */
}