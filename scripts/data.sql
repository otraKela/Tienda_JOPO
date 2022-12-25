use jopo_store_db;

/* PRODUCT_CATEGORIES */
insert product_categories (name, img) values (
     'Cámaras', '/images/products/camaras/camara-0.jpg'
	);
insert product_categories (name, img) values (
    'Televisores','/images/products/televisores/tv-0.jpg'
    );
insert product_categories (name, img) values (
    'Vinilos', '/images/products/vinilos/vinilo-0.jpg'
    );
insert product_categories (name, img) values (
    'Tocadiscos', '/images/products/tocadiscos/tocadiscos-00.jpg'
    );
insert product_categories (name, img) values (
    'Radios', '/images/products/radios/radio-0.jpg'
    );
insert product_categories (name, img) values (
    'Teléfonos', '/images/products/telefonos/telefono-0.jpg'
	);

/* COLORS */
insert colors (name) values ('Blanco');
insert colors (name) values ('Negro');
insert colors (name) values ('Rojo');
insert colors (name) values ('Verde');
insert colors (name) values ('Amarillo');
insert colors (name) values ('Azul');
insert colors (name) values ('Naranja');
insert colors (name) values ('Metal');
insert colors (name) values ('Madera');
insert colors (name) values ('N/A');
insert colors (name) values ('Beige');
insert colors (name) values ('Gris');
insert colors (name) values ('Marrón');

/* USER_CATEGORIES */
insert user_categories (type, name) values (1, 'Administrador');
insert user_categories (type, name) values (2, 'Estándar');

/* USERS */
insert users (first_name, last_name, email, password, img, category_id)
values ("Marcela", "Bustamante", "marcela@gmail.com", "$2a$10$0OEABTA3/HM1WIKs6i1nxO.7JI.xUzwGX.H2/gkUIvhkfKJ5q2HEK", 
"1661528777919.png", 1);
insert users (first_name, last_name, email, password, phone, img, category_id)
values ( "Cecilia", "Lafuente", "lafuentececilia@hotmail.com", "$2a$10$zJSTNbPxnNuatPPRLWKMw.htj9rTV20c6e0/cZugf2Qvw1c5NYP/2",
1134165282, "1661884973144.jpg", 1);
insert users (first_name, last_name, email, password, phone, img, category_id)
values ("Leonel", "Mariani", "leomariani_1@hotmail.com", "$2a$10$mvhST3YixZUSOYSqGU7GK.DtPer8Ig8tyhrwQzSu5I5GOJNWEDET.",
1151335555, "1660694116691.png", 1);

/* PRODUCTS */
insert products (name, description, price, special, img, category_id)
values ( "Vinilo de Leño", "Vinilo del grupo español de culto Leño, editado en 1973. Excelente condición.",
4200, 1, "/images/products/vinilos/vinilo-2.jpg", 3);
insert products (name, description, price, special, img, category_id)
values ("Teléfono antiguo marca Bell", "Teléfono antiguo de la fábrica inglesa Bell, de principios de siglo XX, en óptimas condiciones de conservación. Adaptado para conectar
 a línea telefónica actual, funciona correctamente.", 4000, 0, "/images/products/telefonos/telefono-1.jpg", 6);
insert products (name, description, price, discount, special, img, category_id)
values ("Radio Esténtor modelo Cathedral", "Radio Esténtor original de los años 40, en el exclusivo modelo Cathedral, usado, en su época, por la aristocracia porteña. Cierre los ojos e imagine que escucha a Oscar Casco en la radionovela de la tarde.",
3500, 15, 0, "/images/products/radios/radio-1.jpg", 5);
insert products (name, description, price, special, img, category_id)
values ("Tocadiscos Steinway con tapa", "Tocadiscos de origen alemán marca Steinway. Pua nueva, mecanismo restaurado, 
caja lustrada, radio en funcionamiento. ¡Una joya para disfrutar!", 5000, 1, "/images/products/tocadiscos/tocadiscos-1.jpg", 4);
insert products (name, description, price, discount, special, img, category_id)
values ("Mini combinado con tapa marca Zenith", "Hermoso y decorativo combinado de apoyo marca Zenith, originario de EEUU, años 50. Parlantes
laterales que mejoran la experiencia musical, pua y mecanismo renovado, sintonizador en funcionamiento. Caja lustrada a nuevo.",
 5500, 20, 0, "/images/products/tocadiscos/tocadiscos-2.jpg", 4);
insert products (name, description, price, special, img, category_id)
values ("Cámara fotográfica Polaroid plegable", "Cámara Polaroid de los años 80, plegable, para llevar en la cartera de la dama o el bolsillo del caballero. 
En perfecto estado de funcionamiento. Contamos con los rollos de película para su uso (no incluídos).", 3500, 0,  "/images/products/camaras/camara-1.jpg", 1);
insert products (name, description, price, discount, special, img, category_id)
values ("Cámara fotográfica de fuelle Polaroid", "Cámara de fuelle marca Polaroid. Impecable, en su estado original. No funciona.",
2000, 15, 0, "/images/products/camaras/camara-2.jpg", 1);
insert products (name, description, price, discount, special, img, category_id)
values ("Álbum Deram, David Bowie", "Álbum Deram. Una rareza, de los pocos ejemplares disponibles de esta joya
de la música británica. Versión mono y estéreo original, en perfecto estado.", 3000, 15, 0,
 "/images/products/vinilos/vinilo-3.jpg", 3);
insert products (name, description, price, discount, special, img, category_id)
values ("Radio Sharp original, años 70", "Radio Sharp original. Sintonizador en funcionamiento. Excelente estado exterior. Sonido deteriorado.",
 "1500", 20, 0, "/images/products/radios/radio-10.jpg", 5);
insert products (name, description, price, special, img, category_id)
values ("Televisor Noblex 16 pulgadas, años 80", "Televisor Noblex, industria argentina. Objeto decorativo, no funciona.",
2500, 0, "/images/products/televisores/tv-1.jpg", 2);
insert products (name, description, price, special, img, category_id)
values ("Radio-reloj-despertador portátil Grasep", "Práctico radio-reloj-despertador portátil Grasep. Ideal para llevar al picnic dominical sin perderse el 
partido del club de sus amores.", 2000, 1, "/images/products/radios/radio-3.jpg", 5);
insert products (name, description, price, discount, special, img, category_id)
values ("Teléfono con dial marca Siemens, años 80", "Teléfono con carcasa plástica marca Siemens, industria argentina. Perfecto estado de conservación 
y funcionamiento. Posee ficha de conexión actual.", 3000, 20, 0, "/images/products/telefonos/telefono-2.jpg", 6);
insert products (name, description, price, special, img, category_id)
values ("Álbum Changes Two Bowie, David Bowie", "Álbum compilación de temas de David Bowie, editado en 1981. Perfecto estado.",
 2500, 0, "/images/products/vinilos/vinilo-4.jpg", 3);
insert products (name, description, price, special, img, category_id)
values ("Teléfono con dial marca Opis Technology", "Teléfono fabricado en los años 70 por Opis Technology, tecnología de avanzada de los años 70. Fue utilizado en la escenografía 
de la primera película de Austin Powers, luego adquirido en un remate por Susana Giménez quien lo utilizó por varios años en su chacra de Punta.", 
3000, 0,  "/images/products/telefonos/telefono-3.jpg", 6);
insert products (name, description, price, discount, special, img, category_id)
values ("Antiquísima cámara fotográfica", "Cámara fotográfica circa 1820, revestida en cuero vacuno negro, con todas sus partes originales. 
Objeto decorativo.", 4000, 20, 1, "/images/products/camaras/camara-4.jpg", 1);
insert products (name, description, price, discount, special, img, category_id)
values ("Teléfono candelabro marca Williams, circa 1890", "Teléfono de pie o candelabro de la renombrada fábrica Williams, 
originario de Gran Bretaña. Originalmente comprado por el Palacio de Buckingham y utilizado por la reina Victoria en sus últimos años de reinado.",
 4000, 20, 1, "/images/products/telefonos/telefono-6.jpg", 6);
insert products (name, description, price, discount, special, img, category_id)
values ("Bandeja tocadiscos portátil marca Technics, de fines de los años 80", "Original bandeja tocadiscos estilo maletín.
 Estuche revestido en cuero vacuno de primera calidad. Ideal para disfrutar de un atardecer en la playa moviendo el 
 esqueleto. E", 2000, 10, 0,  "/images/products/tocadiscos/tocadiscos-6.jpg", 4);
insert products (name, description, price, discount, special, img, category_id)
values ("Teléfono antiguo en madera y bronce", "Teléfono muy antiguo, se dice que perteneció a la familia Errázuris. Marca y origen desconocidos. 
Objeto decorativo, no funciona.", 4000, 15, 0, "/images/products/telefonos/telefono-5.jpg", 6);
insert products (name, description, price, special, img, category_id)
values ("Televisor de 20 pulgadas marca Solid State, años 70", "Televisor originario de EEUU, marca Solid State. Primera generación de televisores a color. 
Adquirido por Guillermo Coppola para ver el Mundial 78.", 5000, 1, "/images/products/televisores/tv-4.jpg", 2);

/* PRODUCT_COLORS */
insert product_colors (product_id, color_id) values (1, 10);
insert product_colors (product_id, color_id) values (2, 8);
insert product_colors (product_id, color_id) values (2, 9);
insert product_colors (product_id, color_id) values (3, 9);
insert product_colors (product_id, color_id) values (4, 9);
insert product_colors (product_id, color_id) values (4, 11);
insert product_colors (product_id, color_id) values (5, 9);
insert product_colors (product_id, color_id) values (6, 8);
insert product_colors (product_id, color_id) values (6, 9);
insert product_colors (product_id, color_id) values (7, 2);
insert product_colors (product_id, color_id) values (8, 10);
insert product_colors (product_id, color_id) values (9, 7);
insert product_colors (product_id, color_id) values (9, 11);
insert product_colors (product_id, color_id) values (10, 12);
insert product_colors (product_id, color_id) values (10, 2);
insert product_colors (product_id, color_id) values (11, 9);
insert product_colors (product_id, color_id) values (11, 11);
insert product_colors (product_id, color_id) values (12, 4);
insert product_colors (product_id, color_id) values (13, 10);
insert product_colors (product_id, color_id) values (14, 3);
insert product_colors (product_id, color_id) values (16, 8);
insert product_colors (product_id, color_id) values (16, 9);
insert product_colors (product_id, color_id) values (17, 13);
insert product_colors (product_id, color_id) values (18, 1);
insert product_colors (product_id, color_id) values (18, 8);
insert product_colors (product_id, color_id) values (19, 5);
insert product_colors (product_id, color_id) values (19, 2);
insert product_colors (product_id, color_id) values (15, 2);







