exports.BookPage = class BookPage{

    constructor(page){
        this.page = page;
        this.origin_airport_city_input = page.locator('input[data-test-id="origin-autocomplete-field"]')
        this.origin_airport_iata_span = page.locator('div[data-test-id="autocomplete-origin"] span.autocomplete__iata')
        this.destination_airport_city_input = page.locator('input[data-test-id="destination-autocomplete-field"]')        
        this.destination_airport_iata_span = page.locator('div[data-test-id="autocomplete-destination"] span.autocomplete__iata')
        this.depart_date_input = page.locator('input[data-test-id="departure-date-input"]')
        this.return_date_input = page.locator('input[data-test-id="return-date-input"]')
        this.passengers_field = page.locator('div[data-test-id="passengers-field"] div.additional-fields__label').first()
    }
    
    async getOriginAirportCityText(){
        await this.page.waitForLoadState('domcontentloaded')  
        return await this.origin_airport_city_input.getAttribute('value')
    }

    async getOriginAirportIATAText(){
        await this.page.waitForLoadState('domcontentloaded')          
        return await this.origin_airport_iata_span.textContent()
    }

    async getDestinationAirportCityText(){
        await this.page.waitForLoadState('domcontentloaded')  
        return await this.destination_airport_city_input.getAttribute('value')
    }

    async getDestinationAirportIATAText(){
        await this.page.waitForLoadState('domcontentloaded')          
        return await this.destination_airport_iata_span.textContent()
    }

    async getDepartDateText(){
        await this.page.waitForLoadState('domcontentloaded')  
        return await this.depart_date_input.getAttribute('value')
    }
    
    async getReturnDateText(){
        await this.page.waitForLoadState('domcontentloaded')  
        return await this.return_date_input.getAttribute('value')
    }

    async getPassengersText(){
        await this.page.waitForLoadState('domcontentloaded')
        return await this.passengers_field.textContent()
    }

}


