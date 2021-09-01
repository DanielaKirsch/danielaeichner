import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <React.Fragment>
      {/* MOBILE MENU */}
      <div className="tokyo_tm_mobile_menu">
        <div className="menu_inner">
          <div className="menu">
            <ul>
              <li className="active">
                <Link href="/home">
                  <a>Home</a>
                </Link>
              </li>
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
                <Link href="/home">
                  <a>Home</a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* /LEFTPART */}
    </React.Fragment>
  );
};

export default Navigation;
