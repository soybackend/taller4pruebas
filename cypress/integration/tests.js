describe('Los estudiantes under event monkeys', function() {
  it('visits los estudiantes and event monkeys', function() {
    cy.visit('https://losestudiantes.co');
    cy.contains('Cerrar').click();
    cy.wait(1000);
    randomEvent(10);
  })
})

function randomEvent(monkeysLeft) {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  };

  var monkeysLeft = monkeysLeft;
  if(monkeysLeft > 0) {
    var method = getRandomInt(1, 5);
    console.log(method);
    switch(method) {
      case 1:
        cy.get('a').then($links => {
          var randomLink = $links.get(getRandomInt(0, $links.length));
          if(!Cypress.dom.isHidden(randomLink)) {
            cy.wrap(randomLink).click({force: true});
            monkeysLeft = monkeysLeft - 1;
          }
          setTimeout(randomEvent(monkeysLeft), 1000, monkeysLeft);
        });
        break;
      case 2:
        cy.get('input').then($inputs => {
          var randomInput = $inputs.get(getRandomInt(0, $inputs.length));
          if(!Cypress.dom.isHidden(randomInput)) {
            cy.wrap(randomInput).type(Math.random().toString(36).substring(10), {force: true});
            monkeysLeft = monkeysLeft - 1;
          }
          setTimeout(randomEvent(monkeysLeft), 1000, monkeysLeft);
        });
        break;
      case 3:
        cy.get('select').then($selects => {
          var randomSelect = $selects.get(getRandomInt(0, $selects.length));
          if(!Cypress.dom.isHidden(randomSelect)) {
            cy.wrap(randomSelect).find('option').first().click({force: true});          
            monkeysLeft = monkeysLeft - 1;
          }
          setTimeout(randomEvent(monkeysLeft), 1000, monkeysLeft);
        });
        break;
      case 4:
        cy.get('button').then($button => {
          var randomButton = $button.get(getRandomInt(0, $button.length));
          if(!Cypress.dom.isHidden(randomButton)) {
            cy.wrap(randomButton).click({force: true});
            monkeysLeft = monkeysLeft - 1;
          }
          setTimeout(randomEvent(monkeysLeft), 1000, monkeysLeft);
        });
        break;
      default:
        setTimeout(randomEvent(monkeysLeft), 1000, monkeysLeft);
    }
  }
}
