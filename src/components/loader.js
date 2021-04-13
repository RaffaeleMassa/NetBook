import React from "react";

const Loader = ({loading,searchBook}) => {
    return(
        <>
         {
           loading && (
           <div style={{color: 'green'}}>fetching books for "<strong>{searchBook}</strong>"
           </div>
           )
         }
        
        </>
    );
};
export default Loader;