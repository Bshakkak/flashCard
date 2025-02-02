import { createSlice } from '@reduxjs/toolkit';

export const topicsSlice = createSlice({
    name: 'topics',
    initialState: {
        topics: {}
    },
    reducers:{
        addTopic: (state, action) =>{
            state.topics = {...state.topics, [action.payload.id]: {...action.payload, quizIds: []}}
        },
        addQuiz: (state, action) =>{
            state.topics[action.payload.topicId].quizIds.push(action.payload.id);
            console.log('activated')
        }
    }
});

export const selectTopics = (state) => state.topics.topics;
export const { addTopic, addQuiz } = topicsSlice.actions;
export default topicsSlice.reducer;