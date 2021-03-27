import React from 'react';
import ReactDOM from 'react-dom';
import "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { Component } from 'materialize-css';


export class Container extends React.Component{
    Bookstore = [
        { Id: '0001', 
          Name: 'The Complete Adventures of Feluda: Volume II', 
          Image: 'books/book_03.jpg',
          Price: '1388.88 BDT',
          Details: 'Nineteen gripping tales of suspense and mystery for readers who enjoyed the adventures of Feluda in Volume 1, this second omnibus volume holds more delights. Accompanied by his cousin Topshe and the bumbling crime writer Lalmohan Ganguly (Jatayu), Feluda travels from Puri to Kedarnath, from Kathmandu to London in his pursuit of culprits; he tracks down Napoleon’s last letter, a forgotten painting by Tintoretto and a stolen manuscript.',
          url: 'https://www.amazon.com/Complete-Adventures-Feluda-II-ebook/dp/B06XYPK8WJ/ref=sr_1_1?dchild=1&keywords=The+Complete+Adventures+of+Feluda%3A+Volume+II&qid=1616841859&s=digital-text&sr=1-1' 
        },
        {
            Id: '0002', 
            Name: 'The Secret of Chimneys', 
            Image: 'books/book_04.jpg',
            Price: '337.47 BDT',
            Details: 'Little did Anthony Cade suspect that an errand for a friend would place him at the center of a deadly conspiracy. Drawn into a web of intrigue, he begins to realize that the simple favor has placed him in serious danger.',
            url: 'https://www.amazon.com/Secret-Chimneys-Agatha-Christie-ebook/dp/B08ZM6W4CK/ref=sr_1_8?dchild=1&keywords=agatha+christie&qid=1616840582&s=digital-text&sr=1-8'
          },
        {
            Id: '0003', 
            Name: 'The Mysterious Affair at Styles ', 
            Image: 'books/book_05.jpg',
            Price: '337.47 BDT',
            Details: 'In her first published mystery, Agatha Christie introduces readers to the heroic detective, Hercule Poirot. This is a classic murder mystery set in the outskirts of Essex. The victim is the wealthy mistress of Styles Court. The list of suspects is long and includes her gold-digging new spouse and stepsons, her doctor, and her hired companion.',
            url: 'https://www.amazon.com/Mysterious-Affair-at-Styles-ebook/dp/B091698NFP/ref=sr_1_12?dchild=1&keywords=agatha+christie&qid=1616840582&s=digital-text&sr=1-12'
          },
        {
            Id: '0004', 
            Name: 'The Adventures of Sherlock Holmes illustrated', 
            Image: 'books/book_07.jpg',
            Price: '252.89 BDT',
            Details: 'The Adventures of Sherlock Holmes is a collection of twelve stories by Sir Arthur Conan Doyle, featuring his famous detective and illustrated by Sidney Paget.These are the first of the Sherlock Holmes short stories, originally published as single stories in the Strand Magazine from July 1891 to June 1892.',
            url: 'https://www.amazon.com/Adventures-Sherlock-Holmes-illustrated-ebook/dp/B09139KBWV/ref=sr_1_4?dchild=1&keywords=sherlock+holmes&qid=1616841049&s=digital-text&sr=1-4'
          },
        {
            Id: '0005', 
            Name: 'Byomkesh Bakshi', 
            Image: 'books/book_08.jpg',
            Price: '252 BDT',
            Details: 'Detective fiction has never lacked devoted fans. The undying popularity of Sherlock Holmes and Hercule Poirot vouch for that fact. In the early thirties, a detective by the name of Byomkesh Bakshi made an unobtrusive entry into the world of Bengali fiction.',
            url: 'https://www.amazon.com/Byomkesh-Bakshi-Saradindu-Bandopadhyay-ebook/dp/B015P6AX46/ref=sr_1_4?dchild=1&keywords=bomkesh&qid=1616841150&s=digital-text&sr=1-4'
          },
        {
            Id: '0006', 
            Name: 'The Adventures of Kakababu', 
            Image: 'books/book_09.jpg',
            Price: '884.94 BDT',
            Details: 'After a secret mission in Afghanistan ends in a terrible accident, Raja Roychowdhury, fondly known as Kakababu, resigns as the director of the Archaeological Survey of India and goes home to his second-hand books. But the desire to hunt down old, unsolved mysteries of the world refuses to leave him alone.',
            url: 'https://www.amazon.com/Adventures-Kakababu-Sunil-Gangopadhyay-ebook/dp/B086QB29J4/ref=sr_1_1?dchild=1&keywords=kakababu&qid=1616841393&s=digital-text&sr=1-1'
          },
          

        {
            Id: '007', 
            Name: 'Live and Let Die', 
            Image: 'books/book_10.jpg',
            Price: '675.78 BDT',
            Details: 'James Bond is not a superstitious man, but it’s hard not to feel unnerved in the presence of Mr. Big. A ruthless Harlem gangster who uses voodoo to control his criminal empire, he’s also one of SMERSH’s top American operatives.',
            url: 'https://www.amazon.com/Live-Let-Die-James-Bond-ebook/dp/B008L40PWK/ref=sr_1_3?dchild=1&keywords=james+bond+book&qid=1616841526&s=digital-text&sr=1-3'
          },
          {
            Id: '0008', 
            Name: 'The Complete Adventures of Feluda: Volume I', 
            Image: 'books/book_02.jpg',
            Price: '1691.75 BDT',
            Details: 'This omnibus edition features the ever-popular adventures of Satyajit Ray’s enduring creation, the professional sleuth Pradosh C. Mitter (Feluda). In his escapades, Feluda is accompanied by his cousin Topshe and the bumbling crime writer Lalmohan Ganguly (Jatayu). From Jaisalmer to Simla, from the Ellora Caves to Varanasi, the trio traverse fascinating locales to unravel one devious crime after another.',
            url: 'https://www.amazon.com/Complete-Adventures-Feluda-I-ebook/dp/B06XYDVKRS/ref=sr_1_3?dchild=1&keywords=satyajit+ray+books&qid=1616837273&s=digital-text&sr=1-3'
          },
          {
            Id: '0009',
            Name: 'The Final Adventures of Professor Shonku', 
            Image: 'books/book_01.jpg',
            Price: '41.56 BDT',
            Details: 'In this last volume of Professor Shonku escapades, the brilliant and benevolent scientist travels around the world once more to face near death situations. Each nerve wracking experience is faithfully recorded in his diary.',
            url: 'https://www.amazon.com/Final-Adventures-Professor-Shonku-ebook/dp/B087XBSYY4/ref=sr_1_4?dchild=1&keywords=satyajit+ray+books&qid=1616837273&s=digital-text&sr=1-4'
          },
          {
            Id: '0010', 
            Name: 'Death on the Nile: Hercule Poirot Investigates', 
            Image: 'books/book_06.jpg',
            Price: '884.94 BDT',
            Details: 'The tranquility of a luxury cruise along the Nile was shattered by the discovery that Linnet Ridgeway had been shot through the head. She was young, stylish, and beautiful. A girl who had everything . . . until she lost her life.',
            url: 'https://www.amazon.com/Death-Nile-Hercule-Poirot-Investigates-ebook/dp/B000FCK9D6/ref=sr_1_13?dchild=1&keywords=agatha+christie&qid=1616840582&s=digital-text&sr=1-13'
          }
    ];

    state = {
        loading : true,
        Books : []
    };


     componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.slider');
            var instances = M.Slider.init(elems, {});
          });
        document.addEventListener("DOMContentLoaded",function(){
            const gallery = document.querySelector(".materialboxed");
            M.Materialbox.init(gallery, {});
        });
        this.setState({Books: this.Bookstore, loading:false});
    }

    render() {
        return(
            <div className="containerA" width="100%">
                <div class="slider">
                    <ul class="slides">
                    <li>
                        <img src="books/book_01.jpg"/>
                        <div class="caption center-align">
                        <h3>Zomaton</h3>
                        <h5 class="light grey-text text-lighten-3">A site for good books</h5>
                        </div>
                    </li>
                    <li>
                        <img src="books/book_02.jpg"/>
                        <div class="caption left-align">
                        <h3>Zomaton</h3>
                        <h5 class="light grey-text text-lighten-3">A site for good books</h5>
                        </div>
                    </li>
                    <li>
                        <img src="books/book_03.jpg"/> 
                        <div class="caption right-align">
                        <h3>Zomaton</h3>
                        <h5 class="light grey-text text-lighten-3">A site for good books</h5>
                        </div>
                    </li>
                    <li>
                        <img src="books/book_04.jpg"/> 
                        <div class="caption center-align">
                        <h3>Zomaton</h3>
                        <h5 class="light grey-text text-lighten-3">A site for good books</h5>
                        </div>
                    </li>
                    </ul>
                </div>
                <div className="containerA" width="100%">
                    <h5>Available books</h5>
                </div>

                <div name="container">
{/*                 <div class="row"> 
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
        </div> */}

                                <div class="row">
                    {this.state.Books.map(book=> (
                            <div class="col 20 s3 m3">
                            <div class="card sticky-actioncard">
                                <div class="card-image" >
                                    <img src={book.Image} class="materialboxed"/>
                                    <span class="card-title"><b>{book.Name}</b></span>
                                    <a class="btn-floating halfway-fab waves-effect waves-light red pulse activator"><i class="material-icons">add</i></a>
                                </div>
                                <div class="card-reveal">
                                    <span class="card-title">{book.Name}<i class="material-icons right">close</i></span>
                                    <p>{book.Details}</p>
                                    <p>Price: {book.Price}</p>
                                </div>
                                <div class="card-action">
                                <a href={book.url}>Go to Amazon Site</a>
                                </div>
                            </div>
                        </div>
                    ))}

                </div>
            </div>
            </div>


        );
        
    }
}

export default Container;