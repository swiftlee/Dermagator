import React from "react"
import Standard from "../../components/Product/Standard";
import AA_ME from "../../components/Product/AA_ME";
import SS from "../../components/Product/SS";
import NavBar from "../../components/Header/NavBar";
import navItems from "../../utils/navItems";
import data from "../../data/ProductPage"
function ProductPage() {
    return (
        <div className="text-center m-auto">
            <header id="welcome" className="Welcome">Products</header>
            <div className="page-element m-auto" style={{"padding": "0px",}}></div>
            <div className='sticky-top mb-3'>
                <NavBar items={navItems['product-bar']}/>
            </div>
            {
                data.data.map(stuff=>{
                    
                    if(stuff.type==="info"){
                        console.log(stuff.text)
                        return(
                        <div id={stuff.id} className='mb-5'>
                            <div data-aos='fade-right' data-aos-duration="1000" className='standard' id='productpage'>
                                <h1>{stuff.name}</h1>
                                <p>
                                    {stuff.text.split("\n").map((i,key)=>{
                                        return <div key={key}>{i}</div>
                                    })}
                                </p>
                            </div>
                        </div>
                    )
                    }
                    else{
                        return(
                            <div id={stuff.id} className='mb-5' >
                                <div data-aos='fade-left' data-aos-duration="1000">
                                    <h1>{stuff.name}</h1>
                                    <a href={stuff.text}>External Link </a>
                                </div>
                            </div>
                        )
                    }
                })
            }
        </div>
    );
}

export default ProductPage