const employee = require("../library/employee");
describe('employee',()=>{
    describe("initialization", () => {
        
        it("should get initialized correctly", () => {
           
            let newEmployee = new employee("Alex", 1, "alexluce85@gmail.com@gmail.com");
            expect(newEmployee.name).toEqual("Alex");
            expect(newEmployee.id).toEqual(1);
            expect(newEmployee.email).toEqual("alexluce85@gmail.com@gmail.com");
        });
        
        
    });
    
    describe("getName", () =>{
        
        it('should return the name I give it on initiation', () => {
            let name = "Alex"
            let newEmployee = new employee("Alex", 1, "alexluce85@gmail.com@gmail.com");

            expect(newEmployee.getName()).toEqual(name);
          });


        })
        describe("getId", () =>{
            
            it('should be the ID number I assign it', () => {
                let id = 1000
                let newEmployee = new employee("Alex", 1000, "alexluce85@gmail.com@gmail.com");
                
                expect(newEmployee.getId()).toEqual(id);
            });
            
           
        })
        
        describe("getRole", () =>{
            it('should return their role in the company', () => {
                let role = "employee"
                let newEmployee = new employee("Alex", 1000, "alexluce85@gmail.com@gmail.com");
                
                expect(newEmployee.getRole()).toEqual(role);
            });
        })
        });