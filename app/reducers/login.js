import { GET_LOGINMODAL_SHOW } from '../actions/login'
let init={
    display:false
};
export default function user(state=init,action){
    switch(action.type){
        case GET_LOGINMODAL_SHOW:
            return Object.assign({},state,{display:action.display});
        default :
            return state;
    }
}