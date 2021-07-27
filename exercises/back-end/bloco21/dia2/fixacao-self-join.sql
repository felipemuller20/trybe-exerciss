SELECT * FROM sakila.film;

SELECT t1.film_id, t1.replacement_cost, t2.film_id, t2.replacement_cost
FROM sakila.film t1, sakila.film t2
WHERE t1.replacement_cost = t2.replacement_cost;

SELECT t1.title, t1.rental_duration, t2.title, t2.rental_duration
FROM sakila.film t1, sakila.film t2
WHERE t1.rental_duration = t2.rental_duration;
