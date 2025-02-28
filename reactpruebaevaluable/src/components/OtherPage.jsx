import React from 'react';
import './OtherPage.css'; // Importamos el archivo de CSS Module

function OtherPage() {
    return (
        <div>
            
            <div className='otra-pagina'>
            <h2>¿Quienes somos?</h2>

                <section>
                    <h2>Nuestra Historia</h2>
                    <p>
                        En **Amaclon**, somos una tienda en línea dedicada a ofrecer los mejores productos
                        únicos y exclusivos a nuestros clientes. Nuestra misión es proporcionar una experiencia
                        de compra excepcional con productos de alta calidad y atención al detalle.
                    </p>
                </section>

                <section>
                    <h2>¿Qué Hacemos?</h2>
                    <p>
                        Ofrecemos una amplia variedad de productos en diferentes categorías: tecnología, moda,
                        hogar y más. Nos esforzamos por mantener un catálogo actualizado con lo último en
                        tendencias y calidad, siempre con el mejor servicio al cliente.
                    </p>
                </section>

                <section>
                    <h2>Nuestro Equipo</h2>
                    <p>
                        Contamos con un equipo profesional y apasionado por la innovación, siempre enfocado en
                        brindar un excelente servicio. Nuestro equipo trabaja incansablemente para asegurar que
                        cada cliente tenga una experiencia de compra satisfactoria.
                    </p>
                </section>

                <section>
                    <h2>Valores</h2>
                    <div className='valores'>
                        <p>Calidad en todo lo que hacemos.</p>
                        <p>Innovación constante en nuestros productos y servicios.</p>
                        <p>Compromiso con la satisfacción de nuestros clientes.</p>
                        <p>Respeto y honestidad en nuestras relaciones comerciales.</p>
                    </div>
                </section>

                <section>
                    <h2>Contacto</h2>
                    <p>
                        Si tienes preguntas o deseas obtener más información sobre nosotros, no dudes en
                        contactarnos a través de nuestro correo electrónico o nuestras redes sociales.
                    </p>
                </section>
            </div>
        </div>
    )
}

export default OtherPage;
