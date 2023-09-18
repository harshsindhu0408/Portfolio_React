import React from 'react'
const skillLinks = [
    'https://res.cloudinary.com/dpjyfmoav/image/upload/v1695035341/portfolio/htmlcss_y65bgm.jpg',
    'https://res.cloudinary.com/dpjyfmoav/image/upload/v1695035342/portfolio/tailwind_akrjiq.jpg',
    'https://res.cloudinary.com/dpjyfmoav/image/upload/v1695035341/portfolio/js_jt0hn9.jpg',
    'https://res.cloudinary.com/dpjyfmoav/image/upload/v1695035343/portfolio/react1_vhxzat.jpg',
    'https://res.cloudinary.com/dpjyfmoav/image/upload/v1695035341/portfolio/next_aaxrbk.jpg',
    'https://res.cloudinary.com/dpjyfmoav/image/upload/v1695035342/portfolio/node_j23non.jpg',
    'https://res.cloudinary.com/dpjyfmoav/image/upload/v1695035341/portfolio/express_nduxdk.jpg',
    'https://res.cloudinary.com/dpjyfmoav/image/upload/v1695035342/portfolio/mongo_phxmxt.jpg',
    'https://res.cloudinary.com/dpjyfmoav/image/upload/v1695035342/portfolio/mysql_b0vbc2.jpg',
    'https://res.cloudinary.com/dpjyfmoav/image/upload/v1695035342/portfolio/git_skorfi.jpg',
    'https://res.cloudinary.com/dpjyfmoav/image/upload/v1695035343/portfolio/rest_bt616m.jpg',
    'data:image/png;base64,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',
];

const Technologies = () => {
    const imagesPerRow = 3; // Number of images per row
  
    const renderImageRows = () => {
      const rows = [];
      for (let i = 0; i < skillLinks.length; i += imagesPerRow) {
        const rowImages = skillLinks.slice(i, i + imagesPerRow);
        rows.push(
          <div className="flex justify-center" key={i}>
            {rowImages.map((image, index) => (
              <div key={index} className="p-2">
                <img src={image} width='300px' height='150px' alt='tech'></img>
              </div>
            ))}
          </div>
        );
      }
      return rows;
    };
  
    return (
      <div>
        {renderImageRows()}
      </div>
    );
  };

export default Technologies
