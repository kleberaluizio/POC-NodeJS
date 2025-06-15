import HapiGeolocate from 'hapi-geo-locate';
import HapiInert from '@hapi/inert'

const plugins = [
    {
        plugin: HapiGeolocate,
        options: {
            enabledByDefault: false
        }
    },
    {
        plugin: HapiInert
    }
];

export default plugins;