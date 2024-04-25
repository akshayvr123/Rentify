import React, { Fragment, useContext, useState } from 'react';
import './Create.css';

import { useNavigate } from 'react-router-dom';

const Create = () => {

    const [name, setName] = useState('');
    const [category, setCategory] = useState('');
    const [price, setPrice] = useState('');
    const [image, setImage] = useState('');
    const [phone,setPhone]=useState()
    const [description,setDescription]=useState('')
    const date = new Date()

    const handleSubmit = (e) => {
        e.preventDefault()


    }
    const postImage = (pics) => {
    
        if (pics === undefined) {
        console.log("Plz upload a image");
          return;
        }
    
        if (pics.type === 'image/jpeg' || pics.type === 'image/png') {
          const data = new FormData();
          data.append('file', pics);
          data.append('upload_preset', 'Rentify');
          data.append('cloud_name', 'dpb74oqal');
    
          fetch('https://api.cloudinary.com/v1_1/dpb74oqal/image/upload', {
            method: 'POST',
            body: data,
          })
            .then((res) => res.json())
            .then((data) => {
              setImage(data.url.toString());
              console.log(data.url.toString());
            })
            .catch((err) => {
              console.log(err);
             
            });
        } else {
       
         
        }
      };
    return (
        <div>
            <div className="CreateContainer">
                <div className="nav">
                    <h1>RENTIFY</h1>
                </div>
                <card>
                    <div className="centerDiv">
                        <form onSubmit={handleSubmit}>
                            <label htmlFor="fname">Name1</label>
                            <br />
                            <input
                                className="input"
                                type="text"
                                id="fname"
                                name="Name"
                                value={name}
                                onChange={((e) => { setName(e.target.value) })}
                                defaultValue="John"
                            />
                            <br />
                            <br />
                            <label for="cars">Category:</label>

                            <select name="Category" id="Category">
                                <option value="Car">Car</option>
                                <option value="Home">Home</option>
                                <option value="Furniture">Furniture</option>
                                <option value="Appliances">HomeAppliances</option>
                                <option value="powerTools">powerTools</option>
                                <option value="Computeprs">Computers</option>
                                <option value="Mobile">Mobile Phones</option>
                                <option value="Other">Other</option>
                            </select>
                            <br />
                            <br />
                            <label htmlFor="fname">Price</label>
                            <br />
                            <input className="input" type="number" id="fname" name="Price"
                                // value={Price}
                                onChange={(e) => { setPrice(e.target.value) }}
                            />
                            <br />
                            <br />
                               <label htmlFor="fname">Phone no:</label>
                            <br />
                            <input className="input" type="number" id="PhoneNo" name="PhoneNo"
                                // value={Price}
                                onChange={(e) => { setPrice(e.target.value) }}
                            />

                            <br />
                            <br />
                            <label htmlFor="fname">Location</label>
                            <br />
                            <input className="input" type="text" id="location" name="location"
                                // value={Price}
                                onChange={(e) => { setPrice(e.target.value) }}
                            />
                            <br />
                            <br />
                                <label htmlFor="fname">Description</label>
                            <br />
                            <input className="input" type="text" id="Description" name="Description"
                                // value={Price}
                                onChange={(e) => { setPrice(e.target.value) }}
                            />
                            <br />
                            <br />
                            {/* <img alt="Posts" width="200px" height="200px" src={Image ? URL.createObjectURL(Image) : ''} ></img> */}

                            <br />
                            <input type='file' p={1.5} accept='image/*' onChange={(e) => postImage(e.target.files[0])} />
                            <br />
                            <button className="uploadBtn">upload and Submit</button>

                        </form>
                    </div>
                </card>

            </div>

        </div>
    )
}

export default Create