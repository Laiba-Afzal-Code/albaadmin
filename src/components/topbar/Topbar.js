import './topbar.css';
export default function Topbar() {
  return (
    <>
    <div className="topbar">
        <div className="topbarwarpper">
            <div className="left">
                <span className="logo">Albaadmin</span>
            </div>
            <div className="right">
                <div className="topbaricons">
                <i className="fa-regular fa-bell"></i>
                <span className="bellBedge">2</span>
                </div>
                <div className="topbaricons">
                <i className="fa-solid fa-globe"></i>
                <span className="bellBedge">1</span>
                </div>
                <div className="topbaricons">
                <i className="fa-solid fa-gear"></i>
                
                </div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6AKpZOZlzx3vYgr2UCyfHwQlrxYADVbPNjg&usqp=CAU" alt="" className="topProfile" />
                </div>
        </div>

    </div>
      
    </>
  )
}
