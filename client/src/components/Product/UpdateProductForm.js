import React,{useState} from 'react';
import useProductPage from './useProductPage';
const ProductUpdate=()=>{
    let {inputs,handleSubmit,setText,setName,handleNewSection,
        handleNewSectionChange,section,deleteSection}=useProductPage();
    return(
        <div>
            {
                inputs.data.map((stuff,index)=>{
                    if(stuff.type==="info"){
                        return(
                            <form>
                                <h4>Title of Section {index+1}:</h4>
                                <input type="text"
                                placeholder="Name to Update"
                                value={inputs.data[index].name}
                                onChange={event=>setName(index,event.target.value)}
                                required/>
                                <h4>Text of Section {index+1}</h4>
                                <textarea type="text"
                                placeholder="Text to Update"
                                value={inputs.data[index].text}
                                onChange={event=>setText(index,event.target.value)}
                                required/>
                                <button type="submit" onClick={handleSubmit}> Update Section {index+1}</button>
                                <button type="submit" onClick={event=>deleteSection(index,event)}>Delete Section {index+1}</button>
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
                                        value={stuff.name}
                                        onChange={event=>setName(index,event.target.value)}
                                    />
                                    <h4>Input the Link</h4>
                                    <input type="text"
                                        placeholder="Link to Update"
                                        value={stuff.text}
                                        onChange={event=>setText(index,event.target.value)}
                                    />
                                </form>
                            </div>
                        )
                    }
                })
            }
            <h2>Add new section</h2>
            <form onSubmit={handleSubmit}>
                <label>Section Title:</label><p></p>
                <input type="text" placeholder="Name for New Section" name="name" value={section.name} onChange={handleNewSectionChange} required></input>
                <p></p><label>Section Information:</label><p></p>
                <textarea type="text" placeholder="Text for New Section" name="text" value={section.text} onChange={handleNewSectionChange} required></textarea>
                <p></p><label>Section Unique id:</label><p></p>
                <input type="text" placeholder="ID for New Section" name="id" value={section.id} onChange={handleNewSectionChange} required></input>
                <button type="submit" onClick={handleNewSection}>Make new Section</button>
            </form>
        </div>
    );
}


export default ProductUpdate;