import React
    from 'react';
import { servicios } from '../../../lib/data';
const ServiciosSummary = () => {
    const serviciosToShow = servicios.slice(0, 2);
    return (<section className="border border-gray-300 rounded-lg p-4 pb-6"> {/* Increase bottom padding to pb-6 */}
        {serviciosToShow.map((servicio, index) => (<div key={index} className="mb-4">
            <h3 className="text-lg font-medium text-custom-red">{`SERVICIO: ${servicio.title}`}</h3>
            <p className="text-gray-200 font-bold">{`${servicio.precio}`}</p>
            {index !== serviciosToShow.length - 1 && <hr className="my-2 border-gray-300" />}
        </div>))}
    </section>);
};
export default ServiciosSummary;