USE sakila;
SELECT * FROM customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

SELECT first_name, last_name FROM customer
WHERE active IS FALSE AND store_id = 2
AND (first_name NOT LIKE '%KENNETH%')
ORDER BY first_name;

SELECT title, description, release_year, replacement_cost FROM film 
WHERE (rating = 'G' OR rating = 'PG' OR rating = 'PG-13')
AND replacement_cost > 18
ORDER BY replacement_cost DESC, title LIMIT 100;

SELECT count(*) FROM customer
WHERE active IS TRUE AND store_id = 1;

SELECT * FROM customer WHERE active IS NOT TRUE;

SELECT * FROM film
WHERE rating = 'NC-17'
ORDER BY rental_rate, title
LIMIT 50;

