import React from 'react';
import Typed from 'react-typed';




function Header() {
    return (
        <div className="header-wraper" id="Home">
            <div className="main-info">
            <h1 data-text="Thibaud Robillard"><span>Thibaud Robillard</span></h1>
                <Typed className="string"
                strings={[
                    'Web Developer',
                    '웹 개발자',
                    'นักพัฒนาเว็บไซต์',
                    'WEBデベロッパー',
                    'Web Designer',
                    '디자이너',
                    'นักออกแบบเว็บไซต์',
                    'WEBデザイナー',
                    'Front-End',
                    '프런트 엔드',
                    'หน้าบ้าน',
                    'フロントエンド',
                    'Back-End',
                    '백엔드',
                    'หลังบ้าน',
                    'バックエンド']}
                    typeSpeed={60}
                    backSpeed={70}
                    loop >
                </Typed>
                <div>
                <p className="neon arrow"><ion-icon name="chevron-down-outline"></ion-icon></p>
                </div>
            </div>
        </div>
    )
}

export default Header

