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
}