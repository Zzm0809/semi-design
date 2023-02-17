// form.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

/**
 * why use `.then`?
 * @see https://docs.cypress.io/guides/core-concepts/variables-and-aliases#Return-Values
 */
describe('Form', () => {
    it('formApi-setValue with array field path, 3 -> 2, remove middle line field', () => {
        cy.visit('http://127.0.0.1:6006/iframe.html?path=/story/form--use-form-api-set-value-update-array');
        cy.get(':nth-child(3) > .semi-button').click();
        // line 1
        cy.get('[x-field-id="effects[0].name"] > .semi-form-field-main > .semi-input-wrapper > input').should('have.value', '1-name');
        cy.get('[x-field-id="effects[0].type"] > .semi-form-field-main > .semi-input-wrapper > input').should('have.value', '1-type');
        // line 2
        cy.get('[x-field-id="effects[1].name"] > .semi-form-field-main > .semi-input-wrapper > input').should('have.value', '3-name');
        cy.get('[x-field-id="effects[1].type"] > .semi-form-field-main > .semi-input-wrapper > input').should('have.value', '3-type');
        // cy.get('body').find('.semi-popover .semi-datepicker').should('have.length', 0);
    });

    it('Basic usage - add、remove、modify', () => {

    });
    it('Basic usage - add、remove、modify、reset', () => { });
    it('Basic usage - add、remove、reset', () => { });

    //
    it('2 -> 1, reset', () => {});
    it('2 -> 0 -> 3, reset', () => { });
    it('2 -> 0 -> 2, reset', () => { });
    it('2 -> 0 -> 1, reset', () => { });

    // 一个 Form 三个 ArrayField
    it('Init - Form Props initValues、ArrayField initValue、Field initValue', () => { });

    it('Init - combine', () => {});

    it('Async setValue - modify, 2 -> 2', () => { });

    it('Async setValue - add, 2- > 3, add first', () => { });
    it('Async setValue - add, 2- > 3, add last', () => { });

    it('Async setValue - remove, 3 -> 2, remove last', () => { });
    it('Async setValue - remove, 3 -> 2, remove first', () => { });
    it('Async setValue - remove, 3 -> 2, remove second', () => { });
    it('Async setValue - remove, 3 -> 0', () => { });

    it('Async setValues - modify', () => { });
    it('Async setValues - add', () => { });
    it('Async setValues - remove', () => { });

    it('sync setValues', () => { });
    it('sync setValue', () => { });
    it('sync setValue', () => { });

    it('2 Nested ArrayField - add/remove', () => { });
    it('2 Nested ArrayField - reset', () => { });

    it('2 Nested ArrayField - formApi.setValues', () => { });

    it('2 Nested ArrayField - formApi.setValue level-1', () => { });

    it('2 Nested ArrayField - formApi.setValue level-2', () => { });

    it('3 Nested ArrayField - add/remove', () => {});
});