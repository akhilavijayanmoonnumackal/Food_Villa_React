import {IMG_CDN_URL} from '../config';

const RestrauntCard = ({
    name, 
    cuisines, 
    lastMileTravelString, 
    cloudinaryImageId
}) => {
    return (
        <div className="w-56 m-2 p-2 shadow-lg bg-slate-300">
            <img 
            src={IMG_CDN_URL + cloudinaryImageId
             }
             />
            <h2 className='font-bold text-xl'>{name}</h2>
            <h3>{cuisines && cuisines.join(", ")}</h3>
            {/* <h3>{cuisines.join(", ")}</h3>           */}
            <h4>{lastMileTravelString} minutes</h4>
        </div>
    );
};

export default RestrauntCard;