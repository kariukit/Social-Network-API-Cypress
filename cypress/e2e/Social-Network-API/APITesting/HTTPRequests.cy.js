describe("HTTP Requests", ()=>{

  it("GET Call", ()=>{
  cy.request('GET', 'http://localhost:3001/api/users/')
  .its('status')
  .should('equal', 200);
  })
  

  it ("Post Call", ()=>{

    cy.request({

      method: 'POST',
      url: 'http://localhost:3001/api/users',
      body: {
        username: "Mary",
        email: "mary@gmail.com"
          }
             })
 .its ('status')
 .should('equal', 200);
  })


  it ("Put Call", ()=>{

    cy.request({

      method: 'PUT',
      url: 'http://localhost:3001/api/users/64ab40ac4dcc8d3c6c1121ca',
      body: {
        
          username: "Cess",
          email: "cess@gmail.com"	
             
          }
             })
 .its ('status')
 .should('equal', 200);
  })
  
  it ("Delete Call", ()=>{

    cy.request({

      method: 'DELETE',
      url: 'http://localhost:3001/api/users/64ac8f6023fd212be8cf803b'
      
             })
 .its ('status')
 .should('equal', 200);
  })

  })