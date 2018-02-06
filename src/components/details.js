import React from 'react';

const Details = props => {
  //const { ne } = props.n;
  //console.log('ne => ' + ne);
  return (
    <div className="col-md-8">
      <div className="details">
        <div className="row">
          <div className="col-md-12">
            <h1>
              {props.n.title}
              <hr />
            </h1>
          </div>
          {/* <div className="col-md-5">
            <img
              src={`${character.thumbnail.path}/portrait_uncanny.${character.thumbnail.extension}`}
              alt={character.name}
            />
          </div> */}
          <div className="col-md-7">
            <p>{props.n.description}</p>
            <h4>Fiyat: ({props.n.price} TL)</h4>
            <span>
              Stok:
              <input type="checkbox" checked={props.n.inStock} />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
