SELECT * FROM sakila.city;

SELECT * FROM sakila.country;

SELECT city.city, city.country_id, country.country
FROM sakila.city AS city
INNER JOIN sakila.country AS country
ON city.country_id = country.country_id;

SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;

SELECT actor.actor_id, CONCAT(actor.first_name, " ", actor.last_name), film.film_id
FROM sakila.actor AS actor
INNER JOIN sakila.film_actor as film
ON actor.actor_id = film.actor_id;

SELECT * FROM sakila.staff;
SELECT * FROM sakila.address;

SELECT s.first_name, s.last_name, a.address
FROM sakila.staff s
INNER JOIN sakila.address a
ON s.address_id = a.address_id;

SELECT * FROM sakila.address;
SELECT * FROM sakila.customer;

SELECT c.customer_id, c.first_name, c.email, a.address_id, a.address
FROM sakila.customer c
INNER JOIN sakila.address a
ON c.address_id = a.address_id
ORDER BY c.first_name
LIMIT 100;

SELECT * FROM sakila.address;
SELECT * FROM sakila.customer;

SELECT c.first_name, c.email, a.address, a.district
FROM sakila.customer c
INNER JOIN sakila.address a
ON c.address_id = a.address_id
WHERE a.district = 'California' AND c.first_name LIKE '%rene%';

SELECT c.first_name, COUNT(a.address_id) AS 'qtd_address'
FROM sakila.customer c
INNER JOIN sakila.address a
ON a.address_id = c.address_id
WHERE c.`active`
GROUP BY c.first_name
ORDER BY c.first_name DESC;

SELECT * FROM sakila.payment;
SELECT * FROM sakila.staff;

SELECT s.first_name, s.last_name, ROUND(AVG(p.amount),2) AS 'average_amount'
FROM sakila.staff s
INNER JOIN sakila.payment p
ON s.staff_id = p.staff_id
WHERE YEAR(p.payment_date) = 2006
GROUP BY s.first_name, s.last_name;

SELECT * FROM sakila.actor;
SELECT * FROM sakila.film_actor;
SELECT * FROM sakila.film;

SELECT a.actor_id, a.first_name, f.film_id, f.title
FROM sakila.actor a
INNER JOIN sakila.film_actor fa
ON fa.actor_id = a.actor_id
INNER JOIN sakila.film f
ON fa.film_id = f.film_id;