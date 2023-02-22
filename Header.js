export default function Header() {
    return (
      <div className="px-5 pt-2 row justify-content-between align-items-baseline text-bold">
        <div className="col-3">
          <img src="./assets/logo.jpg" alt="Regionalingo" onClick={()=>window.location.href="/"} />
        </div>
        <div className="col-5 row justify-content-around  align-items-baseline">
          <div className="col-3 text-center">Platform</div>
          <div className="col-3 text-center" onClick={() => window.location.href="/product"}>Product</div>
          <div className="col-3 text-center">Team</div>
          <div className="col-3 text-center" onClick={() => window.location.href="/contact"}>Contact</div>
        </div>
        <div className="col-3 row justify-content-around align-items-baseline">
          <div className="col-4 text-success" onClick={()=>window.location.href="/login"}>Log in</div>
          <div className="col-4 text-danger" onClick={()=>window.location.href="/signup"}>Sign up</div>
        </div>
      </div>
    );
  }
  
