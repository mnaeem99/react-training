import Dishes from "../../redux/dishes";
const loadingState= { 
    isLoading: true,
    errMess: null,
    dishes:[]
}
describe("Reducer",()=>{
    test("should return default state when loading",()=>{
        const action = {
            type:"DISHES_LOADING",
            payload:[]
        }
        const expectedState= { 
            isLoading: true,
            errMess: null,
            dishes:[]
        }
        console.log(Dishes)
        //expect(Dishes).toEqual(loadingState);
    });
})