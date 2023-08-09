
const Login = () => {
  return (
    <div class="container" style={{backgroundColor:"white"}}>
      <div class="row justify-content-center mt-5">
        <div class="col-lg-6 mt-5 pt-5 text-md-start">
          <h1 class="text-primary">facebook</h1>
          <p>Connect with the friends and the world around you on facebook.</p>
        </div>
        <div class="col-lg-3 w-100" style={{justifyContent:"right",display:"flex",paddingTop:"10px"}}>
          <form style={{ width: "30%", backgroundColor: "whitesmoke", alignItems: "right", justifyContent: "flex-end" }}>
            <div class="mb-2" style={{marginTop:"-150px"}}>
              <input type="username" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Username" />
            </div>
            <div class="mb-2">
              <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"></input>
            </div>
            <button type="submit" class="btn btn-primary" style={{ width: "100%" }}>Login</button>

            <p style={{ color: "blue", paddingLeft: "20%" }}>Forget password</p><hr></hr>

            <button type="submit" class="btn btn-success" style={{ width: "100%" }}>Create a new account</button>
          </form>
        </div>
      </div>
    </div>

  )
}

export default Login;
