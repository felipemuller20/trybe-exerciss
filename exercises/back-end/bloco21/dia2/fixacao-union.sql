SELECT first_name, last_name FROM sakila.actor
UNION
SELECT first_name, last_name FROM sakila.customer;

SELECT first_name, last_name FROM sakila.customer
UNION ALL
SELECT first_name, last_name FROM sakila.actor;

(SELECT first_name, last_name FROM sakila.customer
WHERE first_name LIKE '%tracy%')
UNION
(SELECT first_name, last_name FROM sakila.actor
WHERE first_name LIKE '%je%');

(SELECT first_name FROM sakila.actor
ORDER BY actor_id DESC LIMIT 5)
UNION
(SELECT first_name FROM sakila.staff LIMIT 1)
UNION
(SELECT first_name FROM sakila.customer
LIMIT 5 OFFSET 15)
ORDER BY first_name;

(SELECT first_name, last_name FROM sakila.customer
LIMIT 60)
UNION
(SELECT first_name, last_name FROM sakila.actor
LIMIT 60)
ORDER BY first_name, last_name
LIMIT 15 OFFSET 45;