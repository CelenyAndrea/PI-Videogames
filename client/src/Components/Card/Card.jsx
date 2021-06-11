import React from 'react';
import {Link} from 'react-router-dom';


function Card({data}) {
	return (
		<div>
			<Link to={`/videogames/${data.id}`}>
				{data.image === null || !data.image ?
        			<h1>"Image not found"</h1>  
        			: (<img src={data.image} alt={data.name} />)
				}
			</Link>
			<div>
				<div>
					<div>{data.name}</div>
					<div>{data.genres}</div>
				</div>
				<div>
					<div>{data.rating}</div>
				</div>
			</div>
		</div>
	);
}

export default Card;