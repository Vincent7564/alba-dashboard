import axios from "axios";

const check = (email,password) =>{
    if(email ==='eve.holt@reqres.in' && password !==""){
        window.location.href = '/NewPages';
        axios.get('https://reqres.in/api/login')
  .then(response => {
    console.log(response.data);
    <div>
        {response.data}
    </div>
  })
  .catch(error => {
    console.error(error);
  });
    }
}

const Login = () =>{
    return(
        <>
            <div className=" flex justify-center">
        <img className=" w-60 h-50" src={require("../images/alba-logo.png")} alt="" />
      </div>
      <div className=" flex justify-center mb-3">
        <h1 className=" text-[30px] font-sans">Sign In</h1>
      </div>
      <div className=" bg-white pl-5 w-[25%] m-auto pb-3">
        <div class="grid grid-cols-2 gap-2 h-[50%] pt-4 m-auto font-sans">
          <div class="col-span-2">Username</div>
          <div class="col-span-2"><input type="text" className="w-[95%] h-8 rounded-md border-2 border-yellow-300" name="" id="" /></div>
          <div class="col-span-2">Password</div>
          <div class="col-span-2"><input type="text" className="w-[95%] h-8 rounded-md border-2 border-yellow-300" name="" id="" /></div>
        </div>
        </div>
        <div class="col-span-2 text-center pb-2 pe-4"><button className="w-[95%] py-2 rounded" >Login</button></div>
        </>
    )
}

export default Login;