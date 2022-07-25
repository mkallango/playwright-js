const dayjs = require('dayjs')

exports.MainPage = class MainPage{

    constructor(page){
        this.page = page;
        this.theme_switch = page.locator('label[data-test-id="switch"]')
        this.from_airport_field = page.locator('input[data-test-id="origin-autocomplete-field"]')
        this.to_airport_field = page.locator('input[data-test-id="destination-autocomplete-field"]')        
        this.depart_date_field = page.locator('[data-test-id="departure-date-field"]')
        this.return_date_field = page.locator('[data-test-id="return-date-field"]')
        this.calendar__month = page.locator('.calendar__month')
        this.passengers_field = page.locator('div[data-test-id="passengers-field"]')
        this.passengers_adults_field = page.locator('[data-test-id="passengers-adults-field"]')
        
        this.search_flights_button = page.locator('[data-test-id="form-submit"]')
    }
    
    async switchTheme(){
        await this.page.waitForLoadState('domcontentloaded')  
        await this.theme_switch.click()
    }

    async selectFromAirport(airport){
        await this.page.waitForLoadState('domcontentloaded')  
        await this.from_airport_field.fill(airport)    
        await this.page.locator('[data-test-id^="suggest-'+airport+'"]').click();        
    }

    async selectToAirport(airport){
        await this.page.waitForLoadState('domcontentloaded')  
        await this.to_airport_field.fill(airport)
        await this.page.locator('[data-test-id^="suggest-'+airport+'"]').click();
    }

    //date format required "YYYY-MM-DD"
    async selectDepartDate(date){        
        let dateFormatted = await dayjs(date).format('ddd MMM DD YYYY')
        await this.depart_date_field.click()
        await this.page.waitForLoadState('domcontentloaded')
        await this.calendar__month.locator('div[aria-label="'+dateFormatted+'"]').click()
        await this.page.waitForLoadState('domcontentloaded')
    }

    async selectReturnDate(date){
        let dateFormatted = await dayjs(date).format('ddd MMM DD YYYY')
        await this.return_date_field.click()
        await this.page.waitForLoadState('domcontentloaded')
        await this.calendar__month.locator('div[aria-label="'+dateFormatted+'"]').click()
        await this.page.waitForLoadState('domcontentloaded')
    }


    async incrementAdultPassengersTo(number){
        await this.passengers_field.click()
        await this.page.waitForLoadState('domcontentloaded')
        let num_of_passengers = await this.passengers_adults_field.locator('.additional-fields__passenger-value').innerText()        
        for(let i=parseInt(num_of_passengers); i<number; i++){
            await this.passengers_adults_field.locator('svg').nth(1).click();
        }    
        await this.passengers_field.click()
    }

}


