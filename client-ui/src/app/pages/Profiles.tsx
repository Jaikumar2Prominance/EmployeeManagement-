import React, {useEffect, useState} from "react";
import {shallowEqual, useSelector, connect, useDispatch, ConnectedProps} from 'react-redux';
import {RootState} from '../../setup';
import {getProfiles} from '../modules/auth/redux/AuthCRUD';
  
export function Profiles() {
    const accessToken = useSelector<RootState>(({auth}) => auth.accessToken, shallowEqual)
    //const allProfiles;

    useEffect(()=> {
        console.log('loaded..');
        
        const getAllProfiles = async () => {
            try {
                const res = await getProfiles();
                return res.data;
            } catch (error) {
              console.error(error)
            } finally {
            }
      
            
        }

        if (accessToken) {
            console.log(accessToken);
            
            getAllProfiles().then(result => {
                
                let profiles = result;
                console.log(profiles);
                console.log(profiles.length);

               //allProfiles = profiles;
               
            });
           
            
            
          } else {
            
          }
    },[]);
    
    return (
    <div className="profiles">
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h1 className="display-4 text-center">Employees Profiles</h1>
          <p className="lead text-center">List of employee details</p>
          <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">S.No</th>
                <th scope="col">E-Mail</th>
                <th scope="col">Name</th>
                <th scope="col">Current Branch</th>
                <th scope="col">Designation</th>
                <th scope="col">Phone Number</th>
                <th scope="col" />
                <th scope="col" />
              </tr>
            </thead>
            <tbody>
            {/* allProfiles */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
  );

}