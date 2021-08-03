USE sakila;
CREATE TABLE noticia(
noticia_id INT PRIMARY KEY,
titulo VARCHAR(100),
historia VARCHAR(300)
)ENGINE=InnoDB;

ALTER TABLE noticia CHANGE historia conteudo_postagem VARCHAR(1000) NOT NULL;

SELECT * FROM noticia;

ALTER TABLE noticia ADD COLUMN data_postagem date NOT NULL;