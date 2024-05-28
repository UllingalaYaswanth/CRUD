import React from "react";

function Practice(){
    return(
        <div className="bg-primary vh-100 d-flex justify-content-center align-items-center">
            <div className="col-md-5 bg-white p-4 rounded">
                <form>
                    <h2 className="text-center">Login</h2>
                    <div>
                        <label>UserName:</label>
                        <input type="text"  className="form-control"/>
                    </div>
                    <div className="mt-3">
                        <label>Password:</label>
                        <input type="password" className="form-control"/>
                    </div>
                    <div className="form-check mt-3">
                        <input type="checkbox" className="form-check-input" ></input>
                        <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
                    </div>   
                    <button type="submit" className="btn btn-outline-primary mt-3 text-center">Submit</button>
                </form>
            </div>
        </div>
    )


    
    // return (
    //     <div className="bg-primary vh-100">
    //       <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
    //         <div className="col-md-4 bg-white p-3 rounded">
    //           <h2 className="text-center">Login</h2>
    //           <form>
    //             <div className="form">
    //               <label >Username</label>
    //               <input type="text" className="form-control" id="username" placeholder="Enter username" />
    //             </div>
    //             <div className="form-group">
    //               <label htmlFor="password">Password</label>
    //               <input type="password" className="form-control" id="password" placeholder="Password" />
    //             </div>
    //             <div className="form-group form-check">
    //               <input type="checkbox" className="form-check-input" id="rememberMe" />
    //               <label className="form-check-label" htmlFor="rememberMe">Remember me</label>
    //             </div>
    //             <button type="submit" className="btn btn-primary btn-block">Submit</button>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   );
    }
    

export default Practice