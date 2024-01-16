const myDailyTodos = ()=>{
    // // 1. Get the current date and time using JavaScript's Date object:
    // let now = new Date();
    // // 2. Extract the day of the week (0-6) from
    // //   the "now" variable, which represents the current date and time.
    // let today = now.getDay();
    // // The "getDay()" method returns a number between 0 and 6,
    // // where 0 is Sunday and 6 is Saturday.
    // console.log("today's value:"+today);
    // if(today == 1){//Monday
    //     return 'You have classes today! Be on time!';
    //     }else if(today==0 || today==6){
    //         return 'It\'s the weekend! Relax and enjoy your free time!';
    //         } else {
    //             return 'Today is not Monday. Try again tomorrow.';
    //             }
                return(
                    <div>
                        <h3> My Today's todos</h3>
                    </div>
                )
}

export default myDailyTodos;