import React from 'react';

const Navigation = () => {
  return (
    <React.Fragment>
      {/* MOBILE MENU */}
      <div className="tokyo_tm_mobile_menu">
        <div className="menu_inner">
          <div className="menu">
            <ul>
              <li className="active">
                <a href="/">Home</a>
              </li>
              {/*<li>
                <a href="/resume">Resume</a>
              </li>
              <li>
                <a href="/photography">Photography</a>
              </li>*/}
            </ul>
          </div>
        </div>
      </div>
      {/* /MOBILE MENU */}

      {/* LEFTPART */}
      <div className="leftpart">
        <div className="leftpart_inner">
          <div className="menu">
            <ul>
              <li className="active">
                <a href="/">Home</a>
              </li>
              {/*<li>
                <a href="/resume">Resume</a>
              </li>
              <li>
                <a href="/photography">Photography</a>
              </li>*/}
            </ul>
          </div>
        </div>
      </div>
      {/* /LEFTPART */}
    </React.Fragment>
  );
};

export default Navigation;
