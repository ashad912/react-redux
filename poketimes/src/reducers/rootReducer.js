const initState =  {
    posts: [
        {
            id: '1', //fixed error due to incompatibility: here's id was number, not string -> problem in Post mapStateToProps
            title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            id: '2',
            title: "qui est esse",
            body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
            id: '3',
            title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
    ]
}

//state can be modified by action, Redux keep it - IS IMPORTANT that state = initState, executes only on begging, after that state is invokes
//in his modified form
const rootReducer = (state = initState, action) => { //action is what was dispatched f. ex: Post mapDispatchToProps
    if (action.type === 'DELETE_POST'){
        let newPosts = state.posts.filter((post) => {
            return action.id !== post.id
        })
        return {
            ...state, //override previous state, ALSO posts prop, but below we override again posts props
            posts: newPosts //ok, but we have remember about other future props
        }
    }
    return state; //its important - we d to save state
}

export default rootReducer