import {response} from "express";
import axios from "axios";
import {ActSchema} from "./act.validator";
import {Status} from "../../utils/interfaces/Status";

const GEOCODIO_API_KEY = process.env.GEOCODIO_API_KEY;
export type LocationResponse={success:boolean, message:string, lat:number|null, lng:number|null};

export async function Geocod(address: string): Promise<LocationResponse> {

    try {
        const response = await axios.get(`https://api.geocod.io/v1.7/geocode`, {
            params: {q: address, api_key: GEOCODIO_API_KEY}
        });

        const location = response.data.results[0]?.location;
        if (location) {
            return {success:true, message: 'success', lat: location.lat, lng: location.lng};
        } else {
            return{success:false, message: 'Address not found', lat:null, lng:null}
        }
    } catch (error) {
        console.log(error);
        return{success:false, message: "Error fetching coordinates", lat:null, lng:null}
    }
}