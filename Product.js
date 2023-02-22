import Header from "../components/hero/Header";

export default function Contact(){
    return (
        <div>
            <Header/>
            <div className="row border-top">
                <div className="col-5 px-4 py-2">
                    <div className="display-6 px-2 pt-4 pb-5">Products:</div>
                </div>

                <div className="text-center px-4 row">
                <div className="col-4">
                <div class="card">
                    <div class=" card-body">
                        <h4 class="card-title">Regionalingo <small className="text-info bg-dark rounded-4 px-2">Basic</small></h4>
                        <p class="card-text">Comes with basic text transaltion features.</p>
                        <div className="py-3 px-2">
                        <button className="btn btn-outline-success">Pay</button>
                        </div> 
                        <button className="btn text-primary">More details</button>
                    </div>
                    </div>
                </div>
                <div className="col-4">
                    <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Regionalingo <small className="text-info bg-dark rounded-4 px-2">Pro</small> </h4>
                        <p class="card-text">Comes with premium transaltion features like video, audio.</p>
                        <div className="py-3 px-2">
                        <button className="btn btn-outline-success">Pay</button>
                        </div> 
                        <button className="btn text-primary ">More details</button>
                    </div>
                    </div>
                </div>
                <div className="col-4">
                    <div class="card">
                    <div class="card-body">
                        <h4 class="card-title">Regionalingo <small className="text-info bg-dark rounded-4 px-2">Enterprise</small> </h4>
                        <p class="card-text">Comes with transaltion features for enterprise.</p>
                        <div className="py-3 px-2">
                        <button className="btn btn-outline-success">Pay</button>
                        </div>
                        <button className="btn text-primary">More details</button>
                    </div>
                    </div>
                </div>
                </div>
                
            </div>
        </div>
    )
}