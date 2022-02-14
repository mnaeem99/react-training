import * as ActionTypes from './ActionType';

export const InitialFeedback = {
    firstname: '',
    lastname: '',
    telnum: '',
    email: '',
    agree: false,
    contactType: 'Tel.',
    message: ''
};


export const Feedback = (state = { isLoading: true,
    errMess: null,
    feedback:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_FEEDBACK:
            var comment = action.payload;
            return { ...state, feedback: state.feedback.concat(comment)};
        default:
            return state;
    }
};