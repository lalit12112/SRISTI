import { Outlet } from "react-router";
import reactIgm from "/tiger.jpg";
export default function Root() {
  return (
    <>
      <div id="sidebar">
        <div id="logo-container">
          <img src={reactIgm} alt="Logo" id="logo" />
        </div>
        <div className="text-4xl text-red-500">Hello</div>
        <div id="nav-container">
          <nav>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/About">About</a>
              </li>
              <li>
                <a href="/More">More</a>
              </li>
              <li>
                <a href="/Help">Help</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}
