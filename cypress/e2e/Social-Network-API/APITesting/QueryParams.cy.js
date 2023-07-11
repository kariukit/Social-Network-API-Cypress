describe("API Testing", ()=>{


    it("Passing Query Parameters", ()=>{

        cy.request({

            method: 'GET',
            url: 'http://localhost:3001/api/users'


        })
 
        .then( (response)=>{
            expect(response.status).to.eq(200);
            expect(response.body[1]).have.property('username', 'Dennis');
            expect(response.body[0]).have.property('email', 'cess@gmail.com');
        })



    })

})