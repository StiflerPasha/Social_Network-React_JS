let ava_png = "https://png2.kisspng.com/sh/17024a4fdbf0db9c1cc0a38f5d5b3d46/L0KzQYm3VsI3N6Z8i5H0aYP2gLBuTfF3aaVmip9Ac3X1PbT2jgB2fJZ3Rdtsb372PcT2hwR4aaNqRdZudnXvf8Hskr02amQ3T9VsOXPmQYbtV745P2M8SqkDMEG4Q4G3U8U1OGI9S6g3cH7q/kisspng-avatar-user-computer-icons-software-developer-5b327cc9cc15f7.872727801530035401836.png";

const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";


let store = {
    _state: {
        friends: [
            {id: 1, name: "Pasha", ava: ava_png, best: true},
            {id: 2, name: "Andrey", ava: ava_png, best: false},
            {id: 3, name: "John", ava: ava_png, best: false},
            {id: 4, name: "Sasha", ava: ava_png, best: false},
            {id: 5, name: "Smith", ava: ava_png, best: false},
            {id: 6, name: "Valera", ava: ava_png, best: false},
            {id: 7, name: "Yana", ava: ava_png, best: true},
        ],
        sideBar: {
            menu: [
                {id: 1, menuItem: "/profile", name: "Profile"},
                {id: 2, menuItem: "/dialogs", name: "Messages"},
                {id: 3, menuItem: "/news", name: "News"},
                {id: 4, menuItem: "/music", name: "Music"},
                {id: 5, menuItem: "/settings", name: "Settings"},
                {id: 6, menuItem: "/test", name: "It's work"},
            ],
        },
        profilePage: {
            posts: [
                {id: 1, msg: "Hi, how are you", like: 12},
                {id: 2, msg: "It's my first post", like: 5},
            ],
            newPostText: "Pasha Stifler",
        },
        dialogsPage: {
            messages: [
                {id: 1, msg: "Hi"},
                {id: 2, msg: "How are you?"},
                {id: 3, msg: "Yo man!"},
            ],
        },
    },
    _callSubscriber() {
        console.log('State was change')
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost = {
                id: 5,
                msg: this._state.profilePage.newPostText,
                like: 0,
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === UPDATE_NEW_POST_TEXT) {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    },
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) =>
    ({type: UPDATE_NEW_POST_TEXT, newText: text});

export default store
window.store = store;