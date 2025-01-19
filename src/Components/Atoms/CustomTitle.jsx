import React from 'react';

const CustomTitle = ({ text, fontSize, className, onClick }) => {
  const style = { fontSize: fontSize };

  return (
    <h2 style={style} className={className} onClick={onClick}>
      {text}
    </h2>
  );
}

export default CustomTitle;

{/* 
<CustomTitle text="Questo è un titolo" fontSize="24px" className="custom-title" />
 */}