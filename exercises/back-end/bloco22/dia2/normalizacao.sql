USE normalization;

CREATE TABLE funcionarios(
funcionario_id INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50),
sobrenome VARCHAR(50),
email VARCHAR(100),
telefone VARCHAR(50),
data_cadastro VARCHAR(50)
)ENGINE=InnoDB;

SELECT * FROM funcionarios;

INSERT INTO funcionarios (nome, sobrenome, email, telefone, data_cadastro) VALUES (
'Joseph', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445', now()
);
INSERT INTO funcionarios (nome, sobrenome, email, telefone, data_cadastro) VALUES (
'Andre', 'Freeman', 'andre1990@gmail.com', '(47)99522-4996', now()
), ('Cintia', 'Duval', 'cindy@outlook.com', '(33)99855-4669', now()),
('Fernanda', 'Mendes','fernandamendes@yahoo.com', '(33)99200-1556', now());

CREATE TABLE setores(
setor_id INT PRIMARY KEY AUTO_INCREMENT,
setor VARCHAR(50)
)ENGINE=InnoDB;

INSERT INTO setores (setor) VALUES ('Administração'), ('Vendas'), ('Operacional'), ('Estrategico'), ('Marketing');

CREATE TABLE setor_funcionarios(
funcionario_id INT,
setor_id INT,
FOREIGN KEY (funcionario_id) REFERENCES funcionarios(funcionario_id),
FOREIGN KEY (setor_id) REFERENCES setores(setor_id),
CONSTRAINT PRIMARY KEY (setor_id, funcionario_id)
)ENGINE=InnoDB;

INSERT INTO setor_funcionarios(funcionario_id, setor_id) VALUES
(1, 1),
(1, 2),
(2, 3),
(3, 4),
(3, 2),
(4, 5);

SELECT * FROM setor_funcionarios;