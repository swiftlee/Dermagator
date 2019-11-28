import React,{useState} from 'react';
import useAboutPage from '../../views/AdminDashboard/useAboutPage';
const AboutUpdate=()=>{
    let {inputs,handleSubmit,setText,setName,setInfoCardName,setInfoCardPerson,setInfoCardText,handleNewSection,handleNewSectionChange,section}=useAboutPage();
    return(
        <div>
            {
                inputs.data.map((stuff,index)=>{
                    console.log(stuff)
                    if(stuff.type==="section"){
                        return(
                            <form onSubmit={handleSubmit}>
                                <h4>Title of Section {index+1}:</h4>
                                <input type="text"
                                placeholder="Name to Update"
                                value={inputs.data[index].name}
                                onChange={event=>setName(index,event.target.value)}
                                />
                                <h4>Text of Section {index+1}</h4>
                                <input type="text"
                                placeholder="Text to Update"
                                value={inputs.data[index].text}
                                onChange={event=>setText(index,event.target.value)}
                                />
                                <button type="submit" onClick={handleSubmit}> Update Section {index}</button>
                            </form>
                        )
                    }
                    else{
                        return(
                            <div>
                                <form onSubmit={handleSubmit}>
                                    <h4>Title of Section {index+1}:</h4>
                                    <input type="text"
                                        placeholder="Name to Update"
                                        value={inputs.data[index].name}
                                        onChange={event=>setInfoCardName(index,event.target.value)}
                                    />
                                    {stuff.team.map((information,index2)=>(
                                        <div>
                                        <h4>Person {index2+1} of Section {index+1}</h4>
                                        <input type="text"
                                        placeholder="Name to Update"
                                        value={information.personName}
                                        onChange={event=>setInfoCardPerson(index,index2,event.target.value)}
                                        />
                                        <h4>Information of Person {index2+1} Section {index+1}</h4>
                                        <input type="text"
                                        placeholder="Information to Update"
                                        value={information.info}
                                        onChange={event=>setInfoCardText(index,index2,event.target.value)}
                                        />
                                        <button type="submit" onClick={handleSubmit}> Update Employee</button>
                                        </div>
                                    )
                                        
                                    )}
                                </form>
                            </div>
                        )
                    }
                })
            }
            <h2>Add new section</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Name for New Section" name="name" value={section.name} onChange={handleNewSectionChange} required></input>
                <input type="text" placeholder="Text for New Section" name="text" value={section.text} onChange={handleNewSectionChange} required></input>
                <button type="submit" onClick={handleNewSection}> Update Employee</button>
            </form>
        </div>
    );
}


export default AboutUpdate;