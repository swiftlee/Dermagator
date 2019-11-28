import React,{useState} from 'react';
import useAboutPage from '../../views/AdminDashboard/useAboutPage';

const AboutUpdate=()=>{
    let {inputs,handleSubmit,setText,setName}=useAboutPage();
    
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <h4>Title of Section 1:</h4>
                <input type="text"
                placeholder="Name to Update"
                value={inputs.data[0].name}
                onChange={event=>setName(0,event.target.value)}
                />
                <h4>Text of Section 1</h4>
                <input type="text"
                placeholder="Text to Update"
                value={inputs.data[0].text}
                onChange={event=>setText(0,event.target.value)}
                />
                <button type="submit" onClick={handleSubmit}> Update First Section</button>
            </form>
            <form onSubmit={handleSubmit}>
                <h4>Title of Section 2:</h4>
                <input type="text"
                placeholder="Name to Update"
                value={inputs.data[1].name}
                onChange={event=>setName(1,event.target.value)}
                />
                <h4>Text of Section 2</h4>
                <input type="text"
                placeholder="Text to Update"
                value={inputs.data[0].text}
                onChange={event=>setText(1,event.target.value)}
                />
                <button type="submit" onClick={handleSubmit}> Update Second Section</button>
            </form>
            <form onSubmit={handleSubmit}>
                <h4>Title of Section 3:</h4>
                <input type="text"
                placeholder="Name to Update"
                value={inputs.data[2].name}
                onChange={event=>setName(2,event.target.value)}
                />
                <h4>Text of Section 3</h4>
                <input type="text"
                placeholder="Text to Update"
                value={inputs.data[2].text}
                onChange={event=>setText(2,event.target.value)}
                />
                <button type="submit" onClick={handleSubmit}> Update Third Section</button>
            </form>
        </div>
    );
}


export default AboutUpdate;