import { Loader } from "@googlemaps/js-api-loader";

export const googleMapsLoader = () => new Loader({
    apiKey: '',
    version: '',
    language: '',
    region: ''
});
