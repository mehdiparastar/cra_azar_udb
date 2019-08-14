import React, { Component } from 'react';
// import bg01 from '../images/bg-08.jpg'

class MainPage extends Component {
    render() {
        return (
            <div className="container-fluid text-justify ">
                {/* <ol className="list-unstyled">
                    <li className="list-inline-item">mehdi 1</li>
                    <li className="list-inline-item">mehdi 2</li>
                    <li className="list-inline-item">mehdi 3</li>
                </ol>
                <blockquote className="blockquote text-success alert bg-secondary">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt debitis, deserunt doloremque provident enim, saepe accusantium animi, amet deleniti eaque quas tenetur dignissimos autem nemo fugit tempore modi veniam id.
                    <div className="blockquote-footer">mehdi parastar</div>
                </blockquote>
                <img src={bg01} className="img-thumbnail rounded" alt="" srcset=""/>
                <figure className="figure">
                    <img className="img-fluid figure-img" src={bg01} alt="" srcset=""/>
                    <figcaption className="figure-caption">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos, quibusdam modi fugit repellendus amet tempora, ad voluptatibus maiores asperiores aliquid nam expedita rem magnam vitae commodi, optio numquam mollitia quaerat?
                    </figcaption>
                </figure> */}
                <div className="row">
                    <div className="bg-info col col-sm-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A, debitis excepturi est, vero maiores accusamus laudantium obcaecati quod iste at dignissimos corporis qui perspiciatis cumque iure beatae repudiandae sed error!
                    </div>
                    <div className="bg-primary col col-sm-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A, debitis excepturi est, vero maiores accusamus laudantium obcaecati quod iste at dignissimos corporis qui perspiciatis cumque iure beatae repudiandae sed error!
                    </div>
                    <div className="bg-danger col col-sm-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. A, debitis excepturi est, vero maiores accusamus laudantium obcaecati quod iste at dignissimos corporis qui perspiciatis cumque iure beatae repudiandae sed error!
                    </div>
                </div>

            </div>
        );
    }
}

export default MainPage;