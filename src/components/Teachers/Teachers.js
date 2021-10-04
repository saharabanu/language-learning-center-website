import React from 'react';

const Teachers = () => {
    const teacherStyle={
        display:'grid',
        gridTemplateColumns:'repeat(3,1fr)',
        gridGap:'20px',
    }
    const imgStyle={
        height:'80%',
        width:'80%'
    }
    return (
        <div>
            <h2>Our techers</h2>
            <div style={teacherStyle} >
                <div >
                    <img style={imgStyle} src="https://image.freepik.com/free-photo/positive-teacher-posing-with-open-notebok_114579-77686.jpg" alt="" />
                    <h3>Rubya Serte</h3>
                </div>
                <div >
                    <img style={imgStyle} src="https://as1.ftcdn.net/v2/jpg/02/82/19/44/500_F_282194469_qFCkPmeSZZDHxG3Qo2oDD47n6ANc77Dn.jpg" alt="" />
                    <h3>Milon Kumar</h3>
                </div>
                <div>
                    <img style={imgStyle} src="https://t3.ftcdn.net/jpg/03/56/38/30/240_F_356383054_uuRegY4bnDgzrYRXsah2wu3VcENfadFK.jpg" alt="" />
                    <h3>Ronjoy Iqbal</h3>
                </div>
            </div>
        </div>
    );
};

export default Teachers;