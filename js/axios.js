//console.log("Hola mundo")
// https://jsonplaceholder.typicode.com/posts


function getUsers() {

        axios({
            url:"https://jsonplaceholder.typicode.com/posts",
            method: "GET",
            params: {
                _limit:3
            }
        })
        .then(res => console.log(res))
        .catch((error) => console.log(error));

}

function postUser(){
    axios({
        method: "POST",
        url:    "https://reqres.in/api/register",
        data:   {
                    email: "eve.holt@reqres.in",
                    password: "pistol0"
                },
    })
    .then ((res) => console.log(res))
    .catch((error) => console.log(error));
}

function postUserSimple(){
    axios.post("https://reqres.in/api/register",
        {
            email: "eve.holt@reqres.in",
            //password: "pistol0"
        })
    .then ((res) => console.log(res))
    .catch((error) => console.log(error));
}

function updateUser(){
    axios.put("https://jsonplaceholder.typicode.com/users/1",
    {
        name: "Hernan",
        username: "hernanp",
    })
    .then((res) => console.log(res.data))
    .catch((error) => console.log(error));
}

//getUsers();
//postUser();
//postUserSimple()
updateUser()