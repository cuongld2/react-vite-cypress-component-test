/// <reference types="cypress" />
import { mount } from 'cypress/react';
import CityComponent from './CityComponent'

describe('<CityComponent />', () => {

  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.intercept(/.*\/icons\/.*/, { fixture: 'logo192.png' }).as('loadImage')
    const cityComponent = mount(<CityComponent
        name="city"
        updateCity={() => {}}
        fetchWeather={() => {}}
         /> );
    cy.get('input[placeholder="City"]');
    cy.get('button[type="submit"]').should('be.enabled');
    cy.get('button[type="submit"]').should('have.text', 'Search');
    cy.get('input[placeholder="City"]').type('Hanoi');
    
    // cy.get('[data-cy=counter]').should('have.text', '0')
        // const cityField = cityComponent.locator(cityLocator)
        
        // cityField.fill(cityName)
    
        // expect(cityField).contain(cityName)
  })
})