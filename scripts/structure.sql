-- drop database if exists jopo_store_db;
-- create database jopo_store_db;

use jopo_store_db;

drop table if exists shopping_cart_detail;
drop table if exists shopping_cart;
drop table if exists users;
drop table if exists user_categories;
drop table if exists product_colors;
drop table if exists colors;
drop table if exists products;
drop table if exists product_categories;



create table user_categories (
	id int primary key not null auto_increment,
    type tinyint not null,			-- 1=admin  2=std user
    name varchar(30) not null
    );
    
create table users (
	id int primary key not null auto_increment,
    first_name varchar(30) not null,
    last_name varchar(30) not null,
    email varchar(50) not null unique,
    password varchar(100) not null,
    phone bigint,
    date_birth date,
    img varchar(500) default 'images/logo1.jpg',
    category_id int not null default 2,
    foreign key (category_id) 
	references user_categories(id)
    );
    
create table product_categories (
	id int primary key not null auto_increment,
    name varchar(30) not null,
    img varchar(500) default 'images/logo1.jpg'
    );
    
create table products (
	id int primary key not null auto_increment,
    name varchar(100) not null,
    description varchar(500) not null,
    price decimal(6, 2) not null,
    discount tinyint,
    special tinyint default 0,		-- 0=not special  1=special
    img varchar(500) default 'images/logo1.jpg',
    category_id int not null,
    foreign key (category_id)
    references product_categories(id)
    );
    
create table colors (
	id int primary key not null auto_increment,
	name varchar(20) not null
	);
	
create table product_colors (
	id int primary key not null auto_increment,
	product_id int not null,
	color_id int not null,
	foreign key (product_id)
	references products(id),
	foreign key (color_id)
	references colors(id)
	);

create table shopping_cart(
	id int primary key not null auto_increment,
    user_id int not null,
	address_line1 varchar(100),
    address_line2 varchar(100),
    city varchar(50),
    zip_code int,
    payment_type tinyint,
    foreign key (user_id)
    references users(id)
    );
    
create table shopping_cart_detail (
	id int primary key not null auto_increment,
    shopping_cart_id int not null,
	product_id int not null,
    quantity tinyint not null,
    price decimal(6, 2) not null,
    discount tinyint,
    name varchar(100) not null,
    description varchar(500) not null,
    img varchar(500) default 'images/logo1.jpg',
    foreign key (shopping_cart_id)
    references shopping_cart(id)
    );

    
    
    
    
    