import React, { useState } from "react";
import InnerHeadingFrame from "../shared/InnerHeadingFrame";
import { GrDocumentUpdate } from "react-icons/gr";
import {BsFilePost} from "react-icons/bs";
import {GiPostStamp} from "react-icons/gi";
import Input from "../../../portal/components/shared/Input";
import './CollectionUpdateView.css';

const CollectionUpdateView = () => {

    
      const [data, setData] = useState({
        postcode: "",
        timestamp: "",
       
      });
      const changehandler=(e)=>{
        console.log(e.target.id);
        console.log(e.target.value);
        if (e.target.id == "postcode"){
            setData({ ...data, postcode: e.target.value });
        }
        if (e.target.id == "timestamp"){
            setData({ ...data, timestamp: e.target.value });
        }
      }
      const submit = (e) => {
        e.preventDefault();
        console.log(data);
        
      }
  return (
    <InnerHeadingFrame
      heading="Collection Update"
      icon={<GrDocumentUpdate className="mt-3" size={45} />}
    >
      <div className="card-wrapper shadow collection_Update">
          <h2>Collection Update</h2>
        <div className="d-flex justify-content-end m-5">
          <button
            className="btn btn-primary"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Update
          </button>

          <div
            class="modal fade"
            id="exampleModal"
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">
                  Collection Update
                  </h5>
                  <button
                    type="button"
                    class="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                <Input
                    label="Post Code"
                    type="int"
                    id="postcode"
                    value={data.postcode}
                    onChange={changehandler}
                    
                  />
                  <Input
                    label="Time stamp"
                    type="string"
                    id="timestamp"
                    value={data.timestamp}
                    onChange={changehandler}
                  />
                </div>
                <div class="modal-footer">
                  <button
                    type="button"
                    class="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" onClick={submit} class="btn btn-primary">
                    Save changes
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row collection-data">
            <div className="col-md-6">
                <div className="box d-flex justify-content-between">
                    <div>
                <h4 className="p-4">Post Code: 12345</h4>
                </div>
                <div className="m-4">
                <BsFilePost size={45}/>
                </div>
                <div>
                <h4 className="p-2">Time Stamp<br/> 12345</h4>
                </div>
                <div className="m-4">
                <GiPostStamp size={45}/>
                </div>
                
                </div>
            </div>
           
            

        </div>

      </div>
    </InnerHeadingFrame>
  );
};
export default CollectionUpdateView;
