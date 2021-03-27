import React from 'react';
import ReactDOM from 'react-dom';
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { Component } from 'materialize-css';


export class Container extends React.Component{
    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.slider');
            var instances = M.Slider.init(elems, {});
          });
        document.addEventListener("DOMContentLoaded",function(){
            const gallery = document.querySelector(".materialboxed");
            M.Materialbox.init(gallery, {});
        });
    }

    render() {
        return(
            <div className="containerA" width="100%">
                <div class="slider">
                    <ul class="slides">
                    <li>
                        <img src="https://lorempixel.com/580/250/nature/1"/>
                        <div class="caption center-align">
                        <h3>This is our big Tagline!</h3>
                        <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                        </div>
                    </li>
                    <li>
                        <img src="https://lorempixel.com/580/250/nature/2"/>
                        <div class="caption left-align">
                        <h3>Left Aligned Caption</h3>
                        <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                        </div>
                    </li>
                    <li>
                        <img src="https://lorempixel.com/580/250/nature/3"/> 
                        <div class="caption right-align">
                        <h3>Right Aligned Caption</h3>
                        <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                        </div>
                    </li>
                    <li>
                        <img src="https://lorempixel.com/580/250/nature/4"/> 
                        <div class="caption center-align">
                        <h3>This is our big Tagline!</h3>
                        <h5 class="light grey-text text-lighten-3">Here's our small slogan.</h5>
                        </div>
                    </li>
                    </ul>
                </div>
                <div name="container">
                <div class="row">
                    <div class="col 20 s16 m3">
                        <div class="card sticky-action">
                            <div class="card-image">
                                <img src="book_1.jpg"class="materialboxed"/>
                                <a class="btn-floating halfway-fab waves-effect waves-light red pulse activator"><i class="material-icons">add</i></a>
                            </div>
                            <div class="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                            </div>
                            <div class="card-reveal">
                                <p>Here is somrthing hiding</p>
                            </div>
                            <div class="card-action">
                                <a href="https://www.amazon.com/Testaments-Novel-Margaret-Atwood-ebook/dp/B07KVLPYDQ/ref=sxin_10?ascsubtag=amzn1.osa.75b9abee-0111-4031-a408-d50ca33b061f.ATVPDKIKX0DER.en_US&creativeASIN=B07KVLPYDQ&cv_ct_cx=books&cv_ct_id=amzn1.osa.75b9abee-0111-4031-a408-d50ca33b061f.ATVPDKIKX0DER.en_US&cv_ct_pg=search&cv_ct_we=asin&cv_ct_wn=osp-single-source-earns-comm&dchild=1&keywords=books&linkCode=oas&pd_rd_i=B07KVLPYDQ&pd_rd_r=5a9f91f5-b79d-435d-83da-f35ce7c1967d&pd_rd_w=lKpKY&pd_rd_wg=uH4Uv&pf_rd_p=35b32c02-1b41-4e49-9b89-0297af2446e1&pf_rd_r=2NV4RRNEMSBD17HNRFQR&qid=1616789522&sr=1-1-64f3a41a-73ca-403a-923c-8152c45485fe&tag=amznbookrevie-20">Visit</a>
                            </div>
                        </div>
                    </div>
                    <div class="col 20 s16 m3">
                        <div class="card">
                            <div class="card-image">
                                <img src="book_1.jpg"/>
                                <span class="card-title">Card Title</span>
                                <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                            </div>
                            <div class="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col 20 s16 m3">
                        <div class="card">
                            <div class="card-image">
                                <img src="book_1.jpg"/>
                                <span class="card-title">Card Title</span>
                                <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                            </div>
                            <div class="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col 20 s16 m3">
                        <div class="card">
                            <div class="card-image">
                                <img src="book_1.jpg"/>
                                <span class="card-title">Card Title</span>
                                <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                            </div>
                            <div class="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                <div class="col 20 s16 m3">
                        <div class="card">
                            <div class="card-image">
                                <img src="book_1.jpg"/>
                                <span class="card-title">Card Title</span>
                                <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                            </div>
                            <div class="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col 20 s16 m3">
                        <div class="card">
                            <div class="card-image">
                                <img src="book_1.jpg"/>
                                <span class="card-title">Card Title</span>
                                <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                            </div>
                            <div class="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col 20 s16 m3">
                        <div class="card">
                            <div class="card-image">
                                <img src="book_1.jpg"/>
                                <span class="card-title">Card Title</span>
                                <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                            </div>
                            <div class="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col 20 s16 m3">
                        <div class="card">
                            <div class="card-image">
                                <img src="book_1.jpg"/>
                                <span class="card-title">Card Title</span>
                                <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                            </div>
                            <div class="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                <div class="col 20 s16 m3">
                        <div class="card">
                            <div class="card-image">
                                <img src="book_1.jpg"/>
                                <span class="card-title">Card Title</span>
                                <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                            </div>
                            <div class="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                            </div>
                        </div>
                    </div>
                    <div class="col 20 s16 m3">
                        <div class="card">
                            <div class="card-image">
                                <img src="book_1.jpg"/>
                                <span class="card-title">Card Title</span>
                                <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                            </div>
                            <div class="card-content">
                                <p>I am a very simple card. I am good at containing small bits of information. I am convenient because I require little markup to use effectively.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            </div>


        );
        
    }
}

export default Container;