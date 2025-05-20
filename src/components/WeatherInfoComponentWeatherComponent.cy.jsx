/// <reference types="cypress" />
import WeatherComponent from './WeatherInfoComponent'

describe('<WeatherComponent />', () => {
  it('renders', () => {
    cy.intercept(/.*\/icons\/cloudy-night.svg/, { fixture: 'icons/cloudy-night.svg' }).as('cloudyNight')
    cy.intercept(/.*\/icons\/cloudy.svg/, { fixture: 'icons/cloudy.svg' }).as('cloudy')
    cy.intercept(/.*\/icons\/day.svg/, { fixture: 'icons/day.svg' }).as('day')
    cy.intercept(/.*\/icons\/humidity.svg/, { fixture: 'icons/humidity.svg' }).as('humidity')
    cy.intercept(/.*\/icons\/night.svg/, { fixture: 'icons/night.svg' }).as('night')
    cy.intercept(/.*\/icons\/perfect-day.svg/, { fixture: 'icons/perfect-day.svg' }).as('perfectDay')
    cy.intercept(/.*\/icons\/pressure.svg/, { fixture: 'icons/pressure.svg' }).as('pressure')
    cy.intercept(/.*\/icons\/rain-night.svg/, { fixture: 'icons/rain-night.svg' }).as('rainNight')
    cy.intercept(/.*\/icons\/rain.svg/, { fixture: 'icons/rain.svg' }).as('rain')
    cy.intercept(/.*\/icons\/storm.svg/, { fixture: 'icons/storm.svg' }).as('storm')
    cy.intercept(/.*\/icons\/sunny-beautiful.svg/, { fixture: 'icons/sunny-beautiful.svg' }).as('sunnyBeautiful')
    cy.intercept(/.*\/icons\/sunny.svg/, { fixture: 'icons/sunny.svg' }).as('sunny')
    cy.intercept(/.*\/icons\/temp.svg/, { fixture: 'icons/temp.svg' }).as('temp')
    cy.intercept(/.*\/icons\/wind.svg/, { fixture: 'icons/wind.svg' }).as('wind')
    const weatherInfo = {"coord":{"lon":105.8412,"lat":21.0245},"weather":[{"id":800,"main":"Clear","description":"clear sky","icon":"01n"}],"base":"stations","main":{"temp":302.15,"feels_like":301.35,"temp_min":302.15,"temp_max":302.15,"pressure":1003,"humidity":35,"sea_level":1003,"grnd_level":1002},"visibility":10000,"wind":{"speed":2.71,"deg":73,"gust":3.29},"clouds":{"all":0},"dt":1673694125,"sys":{"type":1,"id":9308,"country":"VN","sunrise":1673652961,"sunset":1673692464},"timezone":25200,"id":1581130,"name":"Hanoi","cod":200}
    // see: https://on.cypress.io/mounting-react
    cy.mount(<WeatherComponent
    weather={weatherInfo}
       />)
    cy.get('span').contains('Hanoi')
    cy.get('span').contains('35')
    cy.get('span').contains('1003')
  })
})