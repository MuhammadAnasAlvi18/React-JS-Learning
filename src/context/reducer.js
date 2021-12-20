export let data = {
    snacks: 'Rio',
    drink: 'Coffee',
    authUser:[],
    users: [
        {
            userName: 'haider',
            userEmail: 'haider@gmail.com',
            userPassword: '123456',
            userRole: 'trainer'
        },
        {
            userName: 'akram',
            userEmail: 'akram@gmail.com',
            userPassword: '123456',
            userRole: 'student'
        },
    ],
    student:[
        {
            studentname : 'Ali',
            rollnumber : '21512',
            totalmarks : '74',
            grade : 'A',
            feedback : 'Good'
        },
        {
            studentname : 'Akram',
            rollnumber : '53412',
            totalmarks : '83',
            grade : 'A+',
            feedback : 'Nice Work'
        }]
}

document.body.onload = () => {
    localStorage.setItem(data.users[0].userEmail , JSON.stringify(data.users[0]))
    localStorage.setItem(data.users[1].userEmail , JSON.stringify(data.users[1]))
}


export function reducer(state, action) {
    switch (action.type) {
        case "UPDATE_DRINK": {
            return {
                ...state,
                drink: action.payload
            }
        }
        case "UPDATE_SNACK": {
            return {
                ...state,
                snacks: action.payload
            }
        }
        case "ADD_STUDENT" : {
            let stClone = state.student.slice(0)
            stClone.push(action.payload)
            console.log(state.student)
            return{
                ...state,
                student : stClone
            }
        }
        case "ADD_USER" : {
           let userClone = state.users.slice(0)
           userClone.push(action.payload)
           console.log(state.users)
            return {
                ...state,
                users : userClone
            }
        }
        case "LOGIN_USER" : {
            console.log(state.users)
            state.users.map((val)=>{
            console.log(val)
            let loginUser = (action.payload)
            let auth = data.authUser
            let loginEmail = loginUser.userEmail
            if(loginUser.userEmail === val.userEmail && loginUser.userPassword === val.userPassword){
                console.log('User Matched' , loginUser)
                console.log(auth)
                let user = JSON.parse(localStorage.getItem(loginEmail))
                console.log(user)
                if(user.userRole === 'trainer'){
                    window.location = '/add-students'
                }
                else{
                    window.location = '/studentdetails'
                }
                }
            else{
                console.log('User Not Matched')    
            }
             return {
                ...state,
                authUser : loginUser
             }
            })
         }
        default:
            return state;

    }
}