USE zoologico;

CREATE TABLE animal(
animalID INT PRIMARY KEY AUTO_INCREMENT,
nome varchar(50),
especie varchar(50),
sexo varchar(10),
idade INT,
localizacao VARCHAR(50)
) ENGINE=InnoDB;

CREATE TABLE gerente(
gerenteID INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50)
)ENGINE=InnoDB;

CREATE TABLE cuidador(
cuidadorID INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(50),
gerenteID INT,
FOREIGN KEY (gerenteID) REFERENCES gerente(gerenteID)
) ENGINE=InnoDB;

CREATE TABLE animal_cuidador(
animalID INT,
gerenteID INT,
CONSTRAINT PRIMARY KEY(animalID, gerenteID),
FOREIGN KEY (animalID) REFERENCES animal(animalID),
FOREIGN KEY (gerenteID) REFERENCES gerente(gerenteID)
)ENGINE=InnoDB;