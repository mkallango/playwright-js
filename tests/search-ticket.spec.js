const { test, expect } = require('@playwright/test');
const { BookPage } = require('../page_objects/book_page');
const { MainPage } = require('../page_objects/main_page')
const dayjs = require('dayjs')

test('Ticket Search', async ({ page, context }) => {
  const originAirportIATAString = 'JFK'
  const originAirportCityString = 'New York'
  const destinationAirportIATAString = 'BER'  
  const destinationAirportCityString = 'Berlin'
  const departDateNotFormatted = '2022-07-30'
  const num_of_passengers = 2

  const mainPage = new MainPage(page)
    
  await page.goto('https://www.aviasales.com/', 'waitUntil?: "load"')

  await mainPage.switchTheme()

  await mainPage.selectFromAirport(originAirportIATAString)
  await mainPage.selectToAirport(destinationAirportIATAString)    
  await mainPage.selectDepartDate(departDateNotFormatted)  
  await mainPage.incrementAdultPassengersTo(2)

  await mainPage.page.screenshot({ path: '0.png' })

  const [book_page] = await Promise.all([
    context.waitForEvent('page', 'timeout?: 60000'),
    mainPage.search_flights_button.click()
  ]);
  await book_page.waitForLoadState()  
  
  const bookPage = new BookPage(book_page)  

  let originAirportCity = await bookPage.getOriginAirportCityText()
  let originAirportIATA = await bookPage.getOriginAirportIATAText()
  let destinationAirportCity = await bookPage.getDestinationAirportCityText()
  let destinationAirportIATA = await bookPage.getDestinationAirportIATAText()
  let departDate = await bookPage.getDepartDateText()
  let returnDate = await bookPage.getReturnDateText()
  let passengers = await bookPage.getPassengersText()

  let departDateFormatted = await dayjs(departDateNotFormatted).format('ddd, MMMM DD')
  expect(originAirportCity).toBe(originAirportCityString)
  expect(originAirportIATA).toBe(originAirportIATAString)
  expect(destinationAirportCity).toBe(destinationAirportCityString)
  expect(destinationAirportIATA).toBe(destinationAirportIATAString)
  expect(departDate).toBe(departDateFormatted)
  expect(returnDate).toBe("")
  expect(passengers).toBe(num_of_passengers + ' passengers')
  await bookPage.page.screenshot({ path: '1.png' });
  
});