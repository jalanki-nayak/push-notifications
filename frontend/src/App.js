import {React, useEffect, useState} from 'react';
import ReactNotification from 'react-notifications-component';
import {store} from 'react-notifications-component';
import "animate.css";
import 'react-notifications-component/dist/theme.css';

const App = () => {
  const [list, setList] = useState([]);
  const getList = async () => {
    try {
      const response = await fetch("http://localhost:5000/lists");
      const final = await response.json();
      setList(final);
    } catch (error) {
      console.log(error.message);
    }
  }

  useEffect(()=>{
    getList();
  },[]);


  const color = ["success","danger","info","default","warning"];
  
  
  const displayPush = async (id) => {
    const response = await fetch(`http://localhost:5000/list/${id}`);
    const final = await response.json();
    console.log(final[0].name);
    store.addNotification({
      title : `Notification for ${final[0].name}`,
      message : final[0].notification,
      type: color[Math.floor(Math.random()*color.length)],
      container:"top-right",
      insert:"top",
      animationIn: ["animated", "fadeIn"],
      animationOut: ["animated", "fadeOut"],
      dismiss: {
        duration: 4000,
        showIcon : true,
        onScreen : true,
        pauseOnHover: true
      }
    });
  }

  return(
    <>
      <h1 className="display-3 text-center mt-4 mb-2">Push Notification</h1>
      <ReactNotification />
      <p className="subhead text-center">Click on any Name given below and get a Push Notification Corresponding to it.</p>
      <div className="container">
        <div className="row">
          {
            list.map((val)=>{
              return (
                <div className="col-md-4 my-3" key={val.id}>
                  <div className="card card-body" style={{cursor:"pointer"}} title={`Click on ${val.name} to recieve push notification corresponding to it.`} onClick={()=>{
                    displayPush(val.id);
                  }}>
                    <p className="text-center display-4">{val.name}</p>
                  </div>
                </div>
              )
            })
          }
        </div>
      </div>
    </>
  )
}

export default App;